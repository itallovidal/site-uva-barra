## Context

The project is a React 19 + TypeScript application using Vite as the build tool. It currently has no CSS framework or component library. The `@/` path alias is already configured in both `vite.config.ts` and `tsconfig.app.json`, pointing to `src/`. The project uses React Router for navigation with a `src/pages/` and `src/components/` structure.

## Goals / Non-Goals

**Goals:**
- Integrate Tailwind CSS v4 with the `@tailwindcss/vite` plugin for Vite-native processing
- Configure shadcn/ui to output all components to `src/components/lib/`
- Set up CSS variables for theming (light/dark mode ready)
- Ensure TypeScript path aliases work seamlessly with shadcn/ui imports
- Keep the setup minimal and maintainable

**Non-Goals:**
- Not migrating existing components to shadcn/ui (that's a future task)
- Not adding a design system or custom theme beyond shadcn/ui defaults
- Not setting up Storybook or component documentation

## Decisions

**Tailwind CSS v4 with `@tailwindcss/vite` plugin**
- Tailwind v4 uses CSS-first configuration instead of `tailwind.config.js`, reducing boilerplate
- The `@tailwindcss/vite` plugin provides native Vite integration without PostCSS
- Alternative: Tailwind v3 with PostCSS — rejected because v4 is the current stable and has better Vite support

**shadcn/ui with custom component directory**
- Configure `components.json` with `"aliases": { "components": "@/components/lib" }` to match user requirement
- Use `tailwind-merge` + `clsx` pattern via `cn()` utility (shadcn/ui standard)
- Use `class-variance-authority` (CVA) for component variants

**CSS variables for theming**
- Define CSS custom properties in `src/index.css` for shadcn/ui theme tokens
- Default to a neutral/zinc color palette (shadcn/ui default)
- Dark mode via class strategy (add `dark` class to `<html>`)

**Path alias strategy**
- Keep existing `@/` → `src/` alias
- shadcn/ui components importable as `@/components/lib/button`

## Risks / Trade-offs

**[Risk] Tailwind v4 breaking changes** → Tailwind v4 has different configuration syntax than v3. Mitigation: Follow official v4 + Vite setup guide, not legacy tutorials.

**[Risk] Component directory collision** → `src/components/lib/` could conflict with future `src/components/ui/` patterns. Mitigation: Document the convention; all shadcn/ui components go in `lib/`.

**[Trade-off] No automatic component updates** → shadcn/ui copies code, not a dependency. When shadcn/ui updates, components must be manually re-added. Mitigation: Pin versions in `components.json`; document update process.
