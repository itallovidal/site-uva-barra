## 1. Setup

- [x] 1.1 Install dependencies: `zod`, `react-hook-form`, `@hookform/resolvers`
- [x] 1.2 Create `src/types/auth-types.ts` with `RequestLoginDTO` and `RequestSignupDTO` types
- [x] 1.3 Create `src/schemas/auth-schemas.ts` with Zod schemas for login and signup, inferring types from schemas

## 2. Login Page

- [x] 2.1 Create `src/pages/login-page.tsx` with Card layout, react-hook-form + zod validation, email + password inputs, submit button "Entrar", and link to `/cadastro`

## 3. Signup Page

- [x] 3.1 Create `src/pages/signup-page.tsx` with hero text ("Ajude-nos a Crescer" / "Seja um colaborador..."), Card layout, react-hook-form + zod validation, email/name/password/confirm-password inputs, Combobox for role (desenvolvedor, design, redator, pesquisador), submit button "Solicitar Cadastro", and link to `/entrar`

## 4. Routing and Navigation

- [x] 4.1 Add routes `/entrar` and `/cadastro` to `src/routes/index.tsx`
- [x] 4.2 Update `src/components/nav-bar/desktop-nav-bar.tsx` — wrap Login button with `<Link to="/entrar">`
- [x] 4.3 Update `src/components/nav-bar/mobile-nav-bar.tsx` — wrap Login button with `<Link to="/entrar">`
