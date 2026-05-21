## ADDED Requirements

### Requirement: Tailwind CSS v4 shall be installed and configured with Vite
The project SHALL use Tailwind CSS v4 with the `@tailwindcss/vite` plugin for native Vite integration without PostCSS.

#### Scenario: Tailwind processes CSS directives
- **WHEN** the development server starts
- **THEN** Tailwind CSS directives in the entry CSS file are processed and utility classes are available

#### Scenario: Utility classes are available in components
- **WHEN** a component uses a Tailwind utility class (e.g., `className="flex items-center"`)
- **THEN** the styles are applied correctly in the browser

### Requirement: Path alias shall resolve for Tailwind content scanning
The Tailwind configuration SHALL scan all source files under `src/` for utility class usage using the existing `@/` path alias.

#### Scenario: Classes in all src files are detected
- **WHEN** a Tailwind utility class is used in any file under `src/`
- **THEN** Tailwind includes the corresponding CSS in the build output

### Requirement: Tailwind CSS entry shall be in src/index.css
The main CSS file at `src/index.css` SHALL contain the Tailwind import directive and serve as the single entry point for global styles.

#### Scenario: CSS entry is imported in application root
- **WHEN** the application starts via `main.tsx`
- **THEN** `src/index.css` is imported and Tailwind styles are available globally
