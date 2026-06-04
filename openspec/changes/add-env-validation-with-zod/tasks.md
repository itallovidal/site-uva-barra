## 1. Create env validation module

- [x] 1.1 Create `src/env.ts` with Zod schema covering all env vars (NODE_ENV, PORT, HOST, JWT_SECRET, FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY, VITE_ENABLE_MSW, VITE_API_BASE_URL)
- [x] 1.2 Export `Env` type inferred from schema and `validateEnv` function with formatted error output
- [x] 1.3 Export a pre-validated `env` constant by calling `validateEnv(import.meta.env)`

## 2. Create .env.example

- [x] 2.1 Create `.env.example` at project root with all env vars, their types, defaults, and descriptions

## 3. Update main.tsx for env validation and MSW

- [x] 3.1 Import `env` from `./env` and move env validation before React render
- [x] 3.2 Uncomment and update MSW initialization to use `env.VITE_ENABLE_MSW` instead of `import.meta.env.DEV`

## 4. Update API client to use VITE_API_BASE_URL

- [x] 4.1 Update `src/lib/api-auth-client.ts` to import `env` and prepend `env.VITE_API_BASE_URL` to all fetch URLs
- [x] 4.2 Update `src/hooks/use-auth.tsx` to prepend `env.VITE_API_BASE_URL` to the login fetch call

## 5. Update .env file

- [x] 5.1 Replace `.env` content with new variables, including `VITE_ENABLE_MSW=true` and `VITE_API_BASE_URL=`

## 6. Verify

- [x] 6.1 Run `npm run dev` and confirm app starts without validation errors
- [x] 6.2 Run `npm run build` and confirm TypeScript compilation passes
- [x] 6.3 Remove `VITE_ENABLE_MSW` from `.env`, confirm app still starts (defaults to disabled)
