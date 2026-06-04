## Why

Currently, environment variables are accessed ad-hoc via `import.meta.env` without any validation, typing, or centralized configuration. This leads to runtime errors from missing or malformed env vars, poor developer experience (no autocomplete or type safety), and scattered env access patterns. Adding Zod-based validation provides a single source of truth, strict typing, and fails-fast validation at startup.

## What Changes

- Create `src/env.ts` with a Zod schema that validates and parses all environment variables
- Export a typed `env` object and a `validateEnv` function
- Replace all direct `import.meta.env` usages with the typed `env` object
- Add environment variables for: `NODE_ENV`, `PORT`, `HOST`, `JWT_SECRET`, `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, `VITE_ENABLE_MSW`, `VITE_API_BASE_URL`
- Update `src/main.tsx` to validate env on startup and conditionally enable MSW based on `env.ENABLE_MSW`
- Create `.env.example` documenting all required env vars

## Capabilities

### New Capabilities
- `env-validation`: Centralized environment variable validation, typing, and access via Zod schema

### Modified Capabilities
- `mock-service-worker`: MSW activation will now check `env.ENABLE_MSW` instead of `import.meta.env.DEV`

## Impact

- **New file**: `src/env.ts` — Zod schema, types, and validation function
- **New file**: `.env.example` — documentation of all environment variables
- **Modified file**: `src/main.tsx` — env validation call, MSW activation via env flag
- **Dependency**: zod already installed (`zod@^4.4.3`)
- The `.env` file may need updating with new variables; no existing vars are removed
