## Why

The current `src/components/` directory mixes page-specific components, global components, and layout files at the same level without clear organization rules. As the project grows, this leads to confusion about where to place new components and makes it harder to locate code related to a specific page.

## What Changes

- Update `CODING-RULES.md` with a clear directory structure for `src/components/`
- Update `openspec/specs/coding-conventions/spec.md` with the new component structure requirements
- Move `src/components/root-layout.tsx` into `src/components/root-layout/` as a folder

## Capabilities

### New Capabilities
- `component-structure`: Defines the directory structure for `src/components/` with page-scoped, global, and library folders

### Modified Capabilities
- `coding-conventions`: File structure section updated to reflect the new component organization rules

## Impact

- `CODING-RULES.md` - File Structure section will be updated
- `openspec/specs/coding-conventions/spec.md` - New requirement for component directory structure
- `src/components/root-layout.tsx` - will be moved to `src/components/root-layout/root-layout.tsx`
