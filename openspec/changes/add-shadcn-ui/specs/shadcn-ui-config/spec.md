## ADDED Requirements

### Requirement: shadcn/ui shall be configured with components in src/components/lib
The shadcn/ui configuration (`components.json`) SHALL specify `@/components/lib` as the component alias so all generated components are placed in `src/components/lib/`.

#### Scenario: CLI adds components to correct directory
- **WHEN** running `npx shadcn@latest add <component>`
- **THEN** the component file is created at `src/components/lib/<component>.tsx`

#### Scenario: Configuration file exists at project root
- **WHEN** the setup is complete
- **THEN** `components.json` exists at the project root with correct aliases and style settings

### Requirement: cn() utility shall be available for class merging
A `cn()` utility function SHALL be available at `@/components/lib/utils` that combines `clsx` and `tailwind-merge` for safe Tailwind class composition.

#### Scenario: cn() merges conflicting classes
- **WHEN** `cn("px-2 p-4")` is called
- **THEN** the result resolves the conflict correctly (e.g., `"p-4 px-2"` with tailwind-merge precedence)

#### Scenario: cn() handles conditional classes
- **WHEN** `cn("base", isActive && "active")` is called with `isActive = true`
- **THEN** the result is `"base active"`

### Requirement: CSS variables for theming shall be defined
The global CSS SHALL define CSS custom properties for shadcn/ui theme tokens (background, foreground, primary, secondary, border, ring, etc.) using the zinc color palette.

#### Scenario: Theme variables are available
- **WHEN** the application renders
- **THEN** CSS variables like `--background`, `--foreground`, `--primary` are defined on `:root`

#### Scenario: Dark mode variables are defined
- **WHEN** the `.dark` class is applied to a parent element
- **THEN** alternate CSS variable values for dark mode are available
