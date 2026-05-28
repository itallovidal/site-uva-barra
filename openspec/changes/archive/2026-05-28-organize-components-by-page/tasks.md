## 1. Update CODING-RULES.md

- [x] 1.1 Update the File Structure section in CODING-RULES.md to document the three-category component directory structure (lib/, [page-name]/, [component-name]/)

## 2. Update openspec/specs/coding-conventions/spec.md

- [x] 2.1 Add a new ADDED requirement for "Component directory structure" referencing the three-category rule

## 3. Create openspec/specs/component-structure/spec.md

- [x] 3.1 Create the new spec file at openspec/specs/component-structure/spec.md with requirements for three-category directory, page-scoped components, and root-layout folder

## 4. Migrate root-layout to folder

- [x] 4.1 Create src/components/root-layout/ directory
- [x] 4.2 Move src/components/root-layout.tsx into src/components/root-layout/root-layout.tsx
- [x] 4.3 Update import path in src/routes/index.tsx to use @/components/root-layout/root-layout (or @/components/root-layout)
- [x] 4.4 Remove the old root-layout.tsx file

## 5. Verify

- [x] 5.1 Run the dev server to verify the app still works
- [x] 5.2 Run linting to check for any issues
