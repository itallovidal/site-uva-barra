## Context

The `src/components/` directory currently has no formal organization rules. Components are placed at the top level alongside `lib/` (shadcn/ui primitives), `nav-bar/` (global component), and `home/` (page-specific). The root layout exists as a single file `root-layout.tsx` rather than a folder. As new pages are added, this flat structure will become harder to navigate.

## Goals / Non-Goals

**Goals:**
- Define a clear three-category structure for `src/components/`: library (`lib/`), page-scoped (`[page-name]/`), and global (`[component-name]/`)
- Update `CODING-RULES.md` with the new structure
- Update `openspec/specs/coding-conventions/spec.md` with the new requirement
- Move `root-layout.tsx` into a `root-layout/` folder for consistency

**Non-Goals:**
- Rearranging existing page-specific components (they already follow the pattern)
- Creating new barrel exports or index files
- Changing `lib/` contents or structure
- Affecting `src/pages/` structure

## Decisions

1. **Page-scoped folders over flat naming prefixes** — Each page gets its own folder under `src/components/[page-name]/` instead of prefix-based naming (e.g., `home-hero.tsx`, `home-footer.tsx`). Folders provide better IDE collapse, clearer ownership, and easier relocation when pages are restructured.

2. **Global components use folders too** — Components used across multiple pages (like `nav-bar/`) live in their own folder at `src/components/[component-name]/`. This avoids top-level file clutter and matches the page-folder pattern.

3. **`lib/` remains untouched** — The `lib/` directory holds shadcn/ui primitives and should not be modified. It is excluded from the new rules.

4. **Root layout becomes a folder** — `root-layout.tsx` moves to `src/components/root-layout/root-layout.tsx` so it can hold layout-specific sub-components (header, footer wrappers) without cluttering the parent directory.

## Risks / Trade-offs

- **Migration effort**: Moving `root-layout.tsx` requires updating all imports referencing `@/components/root-layout` — low risk since it's a single file with few importers.
- **Breaking existing PRs**: If someone has an open branch referencing the old path, merging this change will cause a conflict. Mitigation: apply this change early, before new page work starts.
