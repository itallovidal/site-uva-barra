## 1. Verify Components

- [x] 1.1 Verify all 10 components exist in `src/components/lib/`
- [x] 1.2 Verify all components import correctly with `@/components/lib/<name>`
- [x] 1.3 Verify Button uses unified `radix-ui` imports (not `@radix-ui/react-slot`)

## 2. Cleanup

- [x] 2.1 Confirm `embla-carousel-react` removed from package.json
- [x] 2.2 Confirm `@radix-ui/react-slot` removed from package.json
- [x] 2.3 Verify no remaining imports of removed packages

## 3. Validate Configuration

- [x] 3.1 Verify `components.json` aliases point to `@/components/lib`
- [x] 3.2 Verify `vite.config.ts` has `@tailwindcss/vite` plugin
- [x] 3.3 Verify `tsconfig.app.json` has `@/*` → `src/*` path alias

## 4. Build Verification

- [x] 4.1 Run `npm run build` to confirm no build errors
- [x] 4.2 Run `npm run lint` to confirm no linting errors
- [x] 4.3 Run `npx tsc --noEmit` to verify TypeScript compilation
