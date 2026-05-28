## ADDED Requirements

### Requirement: Three-category component directory

The system SHALL organize all components under `src/components/` into exactly three categories: library primitives (`lib/`), page-scoped components (`[page-name]/`), and global components (`[component-name]/`). Files SHALL NOT be placed directly in `src/components/` unless they are in a subdirectory matching one of the three categories.

#### Scenario: Component placed in correct category

- **WHEN** a developer creates or moves a component file under `src/components/`
- **THEN** the file SHALL reside in one of:
  - `src/components/lib/` — for shadcn/ui primitives only (no project-specific components)
  - `src/components/[page-name]/` — for components used by exactly one page
  - `src/components/[component-name]/` — for components used across multiple pages

#### Scenario: Top-level file rejection

- **WHEN** a file is placed directly in `src/components/` (not inside a subdirectory)
- **THEN** the file SHALL be considered non-compliant and SHALL be moved to the appropriate subdirectory

### Requirement: Page-scoped components folder

A page with the route file `src/pages/[page-name]-page.tsx` SHALL have its specific components under `src/components/[page-name]/`. The folder name SHALL match the page name segment (the part before `-page` in the route file).

#### Scenario: Home page components

- **WHEN** the home page exists at `src/pages/home-page.tsx`
- **THEN** components specific to the home page SHALL be placed in `src/components/home/`

#### Scenario: New page with components

- **WHEN** a new page `contact-page.tsx` is created in `src/pages/`
- **THEN** any components specific to the contact page SHALL be placed in `src/components/contact/`

### Requirement: Root layout folder

The root layout SHALL live in `src/components/root-layout/root-layout.tsx` instead of a top-level file. Sub-components of the root layout (e.g., header wrapper, footer wrapper) SHALL also reside in `src/components/root-layout/`.

#### Scenario: Root layout path

- **WHEN** the root layout component is imported
- **THEN** the import path SHALL be `@/components/root-layout/root-layout` (or `@/components/root-layout` via index file)

#### Scenario: Layout sub-components

- **WHEN** a developer adds a sub-component used only by the root layout
- **THEN** the sub-component SHALL be created inside `src/components/root-layout/`
