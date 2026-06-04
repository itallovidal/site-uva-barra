## Why

The admin section is currently unprotected — anyone can access `/admin/*` routes without authentication. The login page exists but submits nothing to the backend. User-mutation endpoints (collaborator CRUD, news create/update/delete) also lack token-based authorization. We need a complete frontend auth flow to protect admin routes and secure mutating API calls.

## What Changes

- **Auth flow**: Login page sends email/password to the API, receives `accessToken` + user info, stores token in `localStorage`
- **Auth Context**: React context providing `user`, `token`, `login`, `logout`, `isAuthenticated`, `isAdmin` state globally
- **Route guard**: Admin routes require authentication; unauthenticated users are redirected to `/entrar`
- **Bearer token injection**: All mutating API requests (POST/PUT/DELETE for users and news) include `Authorization: Bearer <token>`
- **Logout**: Clear token/user from context and localStorage, redirect to `/entrar`
- **MSW auth handler**: Mock login endpoint returning token + user payload for development

## Capabilities

### New Capabilities
- `auth-flow`: Login API integration, token storage, user state, and logout
- `auth-guard`: Protected route wrapper for admin section
- `api-auth-client`: HTTP helper that injects Bearer token into mutating requests

### Modified Capabilities
- `auth-pages`: Update login page submission logic to call API and handle success/error responses
- `admin-layout`: Add auth guard to prevent unauthenticated access; update logout navigation to clear session

## Impact

- `src/pages/login-page.tsx` — rewrite `onSubmit` to call login API
- `src/pages/admin/admin-layout.tsx` — add auth guard (redirect if not authenticated)
- New files: auth context/provider, auth hook, api client helper, route guard component
- `src/mocks/handlers.ts` — add login POST handler
- `src/main.tsx` or `src/app.tsx` — wrap with `AuthProvider`
- `src/routes/index.tsx` — potentially add loader/guard logic
