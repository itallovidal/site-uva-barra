## 1. Install Dependencies

- [x] 1.1 Install Tailwind CSS v4 and `@tailwindcss/vite` plugin
- [x] 1.2 Install shadcn/ui runtime dependencies: `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`
- [x] 1.3 Install `@radix-ui/react-slot` (required by shadcn/ui components)

## 2. Configure Tailwind CSS

- [x] 2.1 Add `@tailwindcss/vite` plugin to `vite.config.ts`
- [x] 2.2 Create `src/index.css` with Tailwind import directive (`@import "tailwindcss"`)
- [x] 2.3 Import `src/index.css` in `src/main.tsx`
- [x] 2.4 Verify Tailwind utility classes work in a test component

## 3. Configure shadcn/ui

- [x] 3.1 Create `components.json` with style "new-york", tailwind config, and `@/components/lib` component alias
- [x] 3.2 Add CSS variables for theming to `src/index.css` (`:root` and `.dark` blocks)
- [x] 3.3 Create `src/components/lib/utils.ts` with `cn()` utility function
- [x] 3.4 Create `src/components/lib/` directory

## 4. Add Base Components

- [x] 4.1 Add Button component via shadcn/ui CLI or manual creation
- [x] 4.2 Verify Button component imports correctly with `@/components/lib/button`
- [x] 4.3 Verify Button variants (default, destructive, outline, secondary, ghost, link) render correctly

## 5. Verify Integration

- [x] 5.1 Run `npm run build` to confirm no build errors
- [x] 5.2 Run `npm run dev` and verify styles load correctly
- [x] 5.3 Run `npm run lint` to confirm no linting errors
- [x] 5.4 Verify TypeScript compilation passes with `npx tsc --noEmit`
