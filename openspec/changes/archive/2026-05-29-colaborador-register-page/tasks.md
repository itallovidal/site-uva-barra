## 1. Schema

- [x] 1.1 Add `registerSchema` to `src/schemas/user-schemas.ts` with fields: name, email, password, confirmPassword, profession, role, bio — including password confirmation refinement
- [x] 1.2 Export `registerSchema` and its inferred type from `src/schemas/user-schemas.ts`

## 2. Page Component

- [x] 2.1 Create `src/pages/admin/collaborator-register-page.tsx` with react-hook-form using `zodResolver(registerSchema)`
- [x] 2.2 Build form UI with fields: name, email, password, confirmPassword (with icons), profession (Combobox), role (Combobox), bio (textarea)
- [x] 2.3 Center the form on screen using `flex min-h-[calc(100vh-10rem)] items-center justify-center` inside an admin-appropriate layout wrapper
- [x] 2.4 Implement `onSubmit` handler that maps form data to `UserRequestDTO` and logs it

## 3. Routing

- [x] 3.1 Import `CollaboratorRegisterPage` in `src/routes/index.tsx`
- [x] 3.2 Replace `PlaceholderPage` with `CollaboratorRegisterPage` on route `/admin/collaborators/register`
