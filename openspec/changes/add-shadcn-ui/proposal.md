## Why

The application currently lacks a component library and styling system. Adding shadcn/ui with Tailwind CSS will provide a consistent, accessible, and customizable component system that accelerates UI development while maintaining full control over styling.

## What Changes

- Install and configure Tailwind CSS v4 with the project's Vite setup
- Install and configure shadcn/ui with components output to `src/components/lib`
- Add path alias `@/` already configured in Vite and TypeScript (already exists)
- Configure CSS variables for shadcn/ui theming
- Set up base Tailwind configuration with shadcn/ui plugin

## Capabilities

### New Capabilities

- `tailwind-setup`: Tailwind CSS v4 configuration with Vite integration and path aliases
- `shadcn-ui-config`: shadcn/ui configuration with custom component directory (`src/components/lib`)
- `component-library`: Base shadcn/ui components available for use across the application

### Modified Capabilities

<!-- No existing specs to modify -->

## Impact

- **Dependencies**: Adds `tailwindcss`, `@tailwindcss/vite`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, and `ts-node` (for shadcn/ui CLI)
- **Configuration**: New `tailwind.config.ts` (or CSS-based config for v4), `components.json` for shadcn/ui
- **Files**: New `src/components/lib/` directory for components, global CSS with Tailwind directives and CSS variables
- **No breaking changes**: Existing components and pages remain unaffected
