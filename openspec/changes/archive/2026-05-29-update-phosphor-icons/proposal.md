## Why

The project is using deprecated or incorrect Phosphor icon names, which creates warnings and makes icon imports easy to misuse. We need a single, explicit rule for the repository so the codebase can be updated consistently and future icon usage stays correct.

## What Changes

- Update the project guidance to prefer the current Phosphor icon names, including the `Icon` suffix for the newer exports.
- Clarify that deprecated icon names should not be introduced in new code.
- Update the application to replace incorrect icon usages with the correct Phosphor icons.
- Align developer-facing documentation and OpenSpec context so the rule is visible during implementation.

## Capabilities

### New Capabilities
- `phosphor-icon-usage`: standardizes how Phosphor icons are imported and named, and prevents new usage of deprecated icon names.

### Modified Capabilities
- 

## Impact

- `openspec/config.yaml`: project context should call out the icon naming rule.
- `CODING-RULES.md`: developer guidance should mention deprecated Phosphor icons and the preferred `Icon` suffix.
- Application source files: icon imports and JSX usages may need broad updates.
- Lint warnings and developer workflow: fewer incorrect icon-name warnings after migration.
