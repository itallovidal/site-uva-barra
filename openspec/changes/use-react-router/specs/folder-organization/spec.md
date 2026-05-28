## ADDED Requirements

### Requirement: Components folder organization
The `src/components/` folder SHALL be organized as follows:

```
src/components/
├── lib/              # shadcn/ui primitives — DO NOT MODIFY
├── [pagina]/         # Components specific to a page (e.g., home/, contact/)
├── [componente-global]/ # Shared components used across pages (e.g., nav-bar/, footer/)
└── root-layout/      # Root layout and sub-components
```

#### Scenario: Page-specific components
- **WHEN** component is used by exactly one page
- **THEN** component folder matches the page route segment name
- **THEN** example: `src/components/home/` for `src/pages/home-page.tsx`

#### Scenario: Global components
- **WHEN** component is used across multiple pages
- **THEN** component folder uses component name (kebab-case)
- **THEN** example: `src/components/nav-bar/` for navigation component

#### Scenario: Component directory rules
- `src/components/lib/` — ONLY shadcn/ui primitives. Do not modify.
- `src/components/[page-name]/` — Components used by exactly one page
- `src/components/[component-name]/` — Shared components
- `src/components/root-layout/` — Root layout and sub-components

### Requirement: Pages folder for route components
- **WHEN** creating entry component for a route
- **THEN** use `src/pages/[page-name]-page.tsx` naming convention
- **THEN** example: `src/pages/home-page.tsx`, `src/pages/contact-page.tsx`

#### Scenario: Route configuration
- **WHEN** configuring routes
- **THEN** use `src/routes/` folder with `index.tsx` using `createBrowserRouter`

#### Scenario: Root layout
- **WHEN** defining application shell
- **THEN** use `src/components/root-layout` for root and sub-components
- **THEN** this includes layout wrapper, providers, etc.

### Requirement: Other folder purposes
- **WHEN** creating utility functions
- **THEN** use `src/utils/` (e.g., `formatDate.ts`)
- **WHEN** defining TypeScript interfaces and types
- **THEN** use `src/types/` (e.g., `api.d.ts`, `auth.d.ts`)