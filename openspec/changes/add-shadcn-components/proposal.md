## Why

After the initial shadcn/ui setup (Button component), additional UI components were added via the shadcn/ui CLI to cover common interface patterns needed by the application. This change documents and validates those additions.

## What Changes

- Add 10 shadcn/ui components: Badge, Card, Checkbox, Dialog, Dropdown Menu, Input, Pagination, Separator, Skeleton, Tooltip
- Update Button component to latest shadcn/ui format (unified `radix-ui` imports, new data attributes, additional size variants)
- Remove Carousel component and its `embla-carousel-react` dependency
- Remove redundant `@radix-ui/react-slot` (replaced by unified `radix-ui` package)

## Capabilities

### New Capabilities

- `additional-components`: Badge, Card, Checkbox, Dialog, Dropdown Menu, Input, Pagination, Separator, Skeleton, Tooltip components available at `@/components/lib/`

### Modified Capabilities

- `component-library`: Button component updated to latest shadcn/ui format with unified radix-ui imports and expanded size variants

## Impact

- **Dependencies**: Removed `embla-carousel-react`, removed `@radix-ui/react-slot` (using unified `radix-ui`)
- **Files**: 10 new component files in `src/components/lib/`, updated `button.tsx`
- **No breaking changes**: Existing usage patterns remain compatible
