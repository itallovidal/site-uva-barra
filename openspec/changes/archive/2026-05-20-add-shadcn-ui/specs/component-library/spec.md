## ADDED Requirements

### Requirement: Base shadcn/ui components shall be importable from src/components/lib
All shadcn/ui components SHALL be importable using the `@/components/lib/<name>` path pattern and work correctly with TypeScript.

#### Scenario: Button component is importable
- **WHEN** a file imports `import { Button } from "@/components/lib/button"`
- **THEN** the Button component renders with correct styles and variants

#### Scenario: Components have TypeScript types
- **WHEN** a shadcn/ui component is used with TypeScript
- **THEN** props are correctly typed and the compiler catches type errors

### Requirement: Components shall support class-variance-authority variants
shadcn/ui components SHALL use `class-variance-authority` (CVA) for variant definitions (e.g., size, variant, state).

#### Scenario: Button renders with default variant
- **WHEN** `<Button>Click</Button>` is rendered without props
- **THEN** the button displays with the default variant styles

#### Scenario: Button renders with specified variant
- **WHEN** `<Button variant="destructive">Delete</Button>` is rendered
- **THEN** the button displays with destructive (red) styling

### Requirement: Lucide React icons shall be available
The `lucide-react` icon library SHALL be installed and available for use with shadcn/ui components.

#### Scenario: Icons can be imported and rendered
- **WHEN** a component imports `import { IconName } from "lucide-react"`
- **THEN** the icon renders as an SVG element
