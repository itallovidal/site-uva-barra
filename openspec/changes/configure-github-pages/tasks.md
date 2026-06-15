## 1. Install gh-pages dependency

- [x] 1.1 Run `npm install --save-dev gh-pages`

## 2. Configure Vite base path

- [x] 2.1 In `vite.config.ts`, add `base: '/site-uva-barra/'` to the `defineConfig` call

## 3. Add deploy scripts to package.json

- [x] 3.1 Add `"predeploy": "npm run build"` script
- [x] 3.2 Add `"deploy": "gh-pages -d dist"` script

## 4. Migrate to HashRouter

- [x] 4.1 In `src/routes/index.tsx`, replace `import { createBrowserRouter }` with `import { createHashRouter }`
- [x] 4.2 Replace `createBrowserRouter(` with `createHashRouter(`

## 5. Verify

- [x] 5.1 Run `npm run build` (vite build succeeds; tsc errors are pre-existing)
- [ ] 5.2 Run `npm run dev` and confirm all routes work with `#/` prefix
- [ ] 5.3 Run `npm run deploy` (requires git write access) and verify the `gh-pages` branch is created/updated
- [ ] 5.4 Confirm the site is accessible at `https://itallovidal.github.io/site-uva-barra/`
