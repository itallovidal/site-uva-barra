## Context

The application currently uses Phosphor icons inconsistently, including deprecated names that trigger warnings and make the code harder to maintain. This change spans documentation, project guidance, and broad source updates across the React app, so the team needs a clear migration strategy before implementation.

## Goals / Non-Goals

**Goals:**
- Standardize Phosphor icon usage on the current exports, including `Icon`-suffixed names where applicable.
- Update project guidance so future code uses the correct icon names.
- Replace existing incorrect icon references across the application.

**Non-Goals:**
- Introducing a new icon library.
- Changing visual design beyond replacing equivalent icons.
- Refactoring unrelated component structure.

## Decisions

- Update both `openspec/config.yaml` and `CODING-RULES.md` with the icon naming rule.
  - Rationale: the rule needs to appear in both the OpenSpec context and the human-facing coding guide so future work follows it.
  - Alternatives considered: only updating code. Rejected because the same mistake would likely recur.

- Treat icon replacement as a mechanical migration by keeping the existing visual intent and swapping only the import names/usages.
  - Rationale: this minimizes behavior change and makes the update safe to apply broadly.
  - Alternatives considered: re-evaluating each icon visually and redesigning usage. Rejected because the issue is naming correctness, not UI redesign.

- Use a search-and-replace pass plus manual verification for any ambiguous icon names.
  - Rationale: most fixes are repetitive, but some icons may have similar names or renamed variants that need human judgment.
  - Alternatives considered: automated codemod only. Rejected because the repo may contain edge cases and warnings need to be fully eliminated.

## Risks / Trade-offs

- [Risk] Some icon replacements may change glyphs if a deprecated name maps to a different current variant.
  → Mitigation: verify imports and rendered output in affected areas after replacement.

- [Risk] Missing one or two stale imports will leave warnings behind.
  → Mitigation: run a repository-wide search for Phosphor imports after the migration.

- [Risk] Documentation updates may drift from actual code usage over time.
  → Mitigation: keep the rule explicit in both the config context and coding rules so future changes are reviewed against it.

## Migration Plan

1. Update OpenSpec context and coding rules with the Phosphor naming guidance.
2. Search the application for deprecated or incorrect Phosphor icon imports and usages.
3. Replace each occurrence with the correct current icon export name.
4. Verify the repository no longer contains the outdated icon references.
5. Review the affected UI surfaces for regressions.

Rollback is straightforward: revert the icon import/name changes if a replacement causes an unexpected visual or compile-time issue.

## Open Questions

- None.
