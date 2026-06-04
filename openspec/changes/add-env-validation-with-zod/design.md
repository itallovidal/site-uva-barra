## Context

The project is a Vite + React SPA with MSW for API mocking during development. Currently, environment variables are accessed directly via `import.meta.env` with no validation, no type safety, and no centralization. The only env var in use is `DEV=false` in `.env`. The MSW initialization in `src/main.tsx` is commented out and gated on `import.meta.env.DEV` (a Vite built-in). The `apiAuthClient` and `useAuth` hook hardcode relative API paths.

Since this is a client-side Vite app, variables exposed to the browser must use the `VITE_` prefix (Vite convention). Non-prefixed variables (e.g., `JWT_SECRET`, `FIREBASE_*`) are included in the schema for documentation and future backend use, but will be optional with no runtime validation impact on the client.

## Goals / Non-Goals

**Goals:**
- Single `src/env.ts` with a Zod schema covering all environment variables used by the app
- Typed `env` object exported for use across the app
- `validateEnv(env)` function that throws a clear error at startup if validation fails
- MSW activation controlled by `VITE_ENABLE_MSW` env var instead of hardcoded `import.meta.env.DEV`
- API calls use `VITE_API_BASE_URL` as the base URL, with a fallback to empty string (same-origin)
- `.env.example` documenting all required and optional vars
- Vite config passes env vars explicitly for clarity and type safety

**Non-Goals:**
- Runtime secret management (JWT_SECRET, FIREBASE_* are included but optional for client; they are placeholders for a future backend)
- Migration to a different env loading library
- Build-time environment replacement beyond what Vite provides
- Removing `import.meta.env` usage in `vite.config.ts` (it runs in Node, unaffected)

## Decisions

1. **Prefixed env vars for client access** — Vite only exposes `VITE_*` variables to the client bundle. Non-prefixed vars (`NODE_ENV`, `JWT_SECRET`, `FIREBASE_*`) are optional in the schema so validation passes on the client. This prevents leaking secrets while keeping a single schema.
2. **`validateEnv` called in `main.tsx`** — Validating at the app entry point ensures fails-fast: the app won't render if critical client env vars are misconfigured.
3. **`VITE_API_BASE_URL` with empty-string default** — API calls currently use relative paths (`/api/...`). An empty-string default means same-origin behavior is preserved. When set (e.g., `http://localhost:4000`), the `apiAuthClient` prepends it.
4. **`VITE_ENABLE_MSW` replaces `import.meta.env.DEV`** — Gives explicit control over mocking independent of build mode. Allows enabling MSW in production previews and disabling it in dev.

## Risks / Trade-offs

- [**Breaking change**] → `apiAuthClient` and `useAuth` will prepend `VITE_API_BASE_URL`. If the base URL is empty, behavior is identical to before.
- [**Env var duplication**] → Vite's built-in `import.meta.env.MODE` overlaps with our `NODE_ENV`. We keep both: `MODE` is consumed internally by Vite, `NODE_ENV` follows the convention of the example schema.
- [**Zod v4 API surface**] → The project uses `zod@^4.4.3`. Zod v4 has some API differences from v3 (e.g., `.default()` and `.transform()` still exist but validate behavior). We use only well-established Zod APIs (`z.object`, `z.enum`, `z.coerce.number`, `z.string`, `z.string().min(1)`, `.default()`, `.transform()`, `.safeParse()`).
