## 1. Documentation updates

- [x] 1.1 Update `openspec/config.yaml` to mention the Phosphor `Icon` suffix rule and deprecated icon warning.
- [x] 1.2 Update `CODING-RULES.md` with the same Phosphor icon guidance for developers.

## 2. Application migration

- [x] 2.1 Search the codebase for Phosphor icon imports/usages that use deprecated or incorrect names.
- [x] 2.2 Replace each incorrect icon reference with the current Phosphor export name.
- [x] 2.3 Verify imports compile cleanly and warnings about deprecated icon names are gone.

## 3. Validation

- [x] 3.1 Review affected UI surfaces to confirm the replaced icons render as expected.
- [x] 3.2 Run the relevant lint or typecheck command to confirm the migration is safe.
