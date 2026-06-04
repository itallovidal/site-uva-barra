## Context

The app currently has a login page at `/entrar` and a signup page at `/cadastro`, but neither connects to any API. The admin section at `/admin/*` is publicly accessible with no authentication checks. All mutating endpoints (collaborator approve/delete, news create/publish/unpublish, category create/delete) need a Bearer token but nothing injects it.

The backend (not part of this change scope) returns `{ status, data: { accessToken, user } }` on successful login. Tokens are JWTs with a `sub`, `email`, `role` payload. No refresh token flow exists yet (simplified for MVP).

## Goals / Non-Goals

**Goals:**
- Login calls `POST /api/auth/login` and stores the returned token + user
- Admin routes redirect to `/entrar` if user is not authenticated
- All mutating API requests include `Authorization: Bearer <token>`
- Logout clears stored session and redirects to `/entrar`
- MSW handler for login endpoint so the auth flow works in dev mode

**Non-Goals:**
- Token refresh / silent refresh (will be added later if needed)
- Role-based route guarding beyond admin vs non-admin (e.g., `collaborator` vs `admin` restrictions within admin)
- Signup API integration (separate change)
- Backend implementation

## Decisions

| Decision | Choice | Alternatives | Rationale |
|---|---|---|---|
| Token storage | `localStorage` | `sessionStorage`, cookies | Simplest for MVP; no refresh token yet; survives page reload |
| State management | React Context (`AuthContext`) | Zustand, Redux, React Query | Built-in, zero deps, sufficient for global auth state |
| Route guard | Component wrapper (`ProtectedRoute`) | Route loader, middleware pattern | React Router v7 idiomatic; easy to wrap admin layout |
| API client | Standalone helper function | Axios instance, fetch wrapper | Current codebase uses bare `fetch`; helper keeps pattern consistent with minimal abstraction |
| Auth fetch vs regular fetch | Separate `apiAuthClient` | Interceptor on global fetch | Explicit import makes auth requirements clear at call site |

## Risks / Trade-offs

- **Token expiry**: No refresh logic means the user will be logged out when the JWT expires. Acceptable for MVP.
- **localStorage XSS**: Tokens in `localStorage` are accessible to any JS on the page. The app doesn't render user-generated HTML, so risk is low.
- **Hardcoded admin redirect**: Currently the guard checks for any authenticated user to access `/admin`. Future role-based access will need refinement.
