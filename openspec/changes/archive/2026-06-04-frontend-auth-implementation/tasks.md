## 1. Auth Infrastructure

- [x] 1.1 Add `LoginResponseDTO` type to `src/domain/entities.ts` with `accessToken: string` and `user: User`
- [x] 1.2 Create `src/hooks/use-auth.tsx` with AuthContext, AuthProvider, and useAuth hook
- [x] 1.3 Implement token persistence in localStorage (read on mount, write on login, clear on logout)
- [x] 1.4 Wrap `<RouterProvider>` with `<AuthProvider>` in `src/app.tsx`

## 2. Login API Integration

- [x] 2.1 Create `src/lib/api-auth-client.ts` with authenticated fetch helper (reads token from localStorage, injects Bearer header)
- [x] 2.2 Update `src/mocks/handlers.ts` — add `POST /api/auth/login` handler that validates credentials and returns token + user payload
- [x] 2.3 Update `src/pages/login-page.tsx` — replace console.log with AuthContext.login(), add loading state and error display

## 3. Route Protection

- [x] 3.1 Create `src/components/protected-route.tsx` that checks `isAuthenticated` from useAuth and redirects to `/entrar?redirect=` if false
- [x] 3.2 Update `src/pages/login-page.tsx` — after successful login, read `redirect` query param and navigate there (or `/admin` by default)
- [x] 3.3 Update `src/routes/index.tsx` — wrap admin layout element with `<ProtectedRoute>`
- [x] 3.4 Update `src/pages/admin/admin-layout.tsx` — show logged-in user name in the sidebar header area

## 4. Authenticated API Migration

- [x] 4.1 Update `src/mocks/handlers.ts` — verify auth on mutating endpoints (return 401 if no/invalid Bearer token)
- [x] 4.2 Migrate collaborator approve/delete to use `apiAuthClient`
- [x] 4.3 Migrate news create/publish/unpublish/request-review to use `apiAuthClient`
- [x] 4.4 Migrate category create/delete to use `apiAuthClient`

## 5. Logout

- [x] 5.1 Update `src/pages/admin/placeholder-page.tsx` at `/admin/logout` — call `logout()` from useAuth and redirect to `/entrar`
