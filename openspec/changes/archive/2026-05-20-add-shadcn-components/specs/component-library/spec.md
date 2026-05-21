## MODIFIED Requirements

### Requirement: Base shadcn/ui components shall be importable from src/components/lib
All shadcn/ui components SHALL be importable using the `@/components/lib/<name>` path pattern and work correctly with TypeScript.

#### Scenario: Button component is importable
- **WHEN** a file imports `import { Button } from "@/components/lib/button"`
- **THEN** the Button component renders with correct styles and variants

#### Scenario: Components have TypeScript types
- **WHEN** a shadcn/ui component is used with TypeScript
- **THEN** props are correctly typed and the compiler catches type errors

### Requirement: Components shall support class-variance-authority variants
shadcn/ui components SHALL use `class-variance-authority` (CVA) for variant definitions. The Button component SHALL support variants: default, destructive, outline, secondary, ghost, link and sizes: default, xs, sm, lg, icon, icon-xs, icon-sm, icon-lg.

#### Scenario: Button renders with default variant
- **WHEN** `<Button>Click</Button>` is rendered without props
- **THEN** the button displays with the default variant styles

#### Scenario: Button renders with xs size
- **WHEN** `<Button size="xs">Tiny</Button>` is rendered
- **THEN** the button displays with extra-small sizing (h-6, px-2)

#### Scenario: Button uses unified radix-ui Slot
- **WHEN** `<Button asChild>` is used
- **THEN** the Slot component from `radix-ui` (not `@radix-ui/react-slot`) is used for child element rendering
