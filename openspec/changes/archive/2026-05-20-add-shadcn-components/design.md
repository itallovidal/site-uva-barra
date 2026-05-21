## Context

The initial shadcn/ui setup (archived as `add-shadcn-ui`) provided only the Button component. The application needed additional UI primitives for common patterns: forms, navigation, feedback, and layout. Components were added via `npx shadcn@latest add` CLI.

## Goals / Non-Goals

**Goals:**
- Document and validate the 10 additional components added
- Ensure all components use the unified `radix-ui` import pattern
- Remove unused Carousel and clean up redundant dependencies

**Non-Goals:**
- No new components beyond the 10 already added
- No custom theming or style overrides

## Decisions

**Unified `radix-ui` package over individual packages**
- The shadcn/ui CLI now uses `import { X } from "radix-ui"` instead of `@radix-ui/react-x`
- Reduces dependency count and simplifies imports
- `@radix-ui/react-slot` is no longer needed

**Keep Carousel removed**
- Carousel requires `embla-carousel-react` (extra dependency)
- Not needed for current application requirements
- Can be re-added later if needed

## Risks / Trade-offs

**[Risk] CLI path configuration** — The shadcn/ui CLI uses `components.json` to determine output paths. The current config has `"components": "@/components/lib"` which correctly resolves to `src/components/lib/`. If the CLI ever creates files in the wrong location, verify the `aliases.components` value in `components.json`.
