## Context

The news form at `src/components/news-form/news-form.tsx` uses "Enviar para Revisão" as the primary submit button label for both create and edit modes. The form does not capture `author` — the `CreateNewsDTO.author` field is optional and never populated. The DTOs (`NewsPreviewDTO`, `NewsModerationItemDTO`, `AdminNewsCardDTO`) use `authorName` while the core `News` entity uses `author`, creating an inconsistency that requires consumers to map between names.

## Goals / Non-Goals

**Goals:**
- Primary submit button shows "Criar notícia" (create) / "Editar notícia" (edit) instead of "Enviar para Revisão"
- Author text input added to the form, required before submission
- All DTOs renamed from `authorName` to `author` for consistency with the `News` entity
- All consumers (components, pages, mocks) updated to use `author`

**Non-Goals:**
- Not changing the "Salvar Rascunho" / "Salvar como Rascunho" button
- Not implementing the news edit page (only the form supports edit mode)
- Not changing the review dialog on the approval page (that's a separate feature)
- Not adding user authentication-based author auto-fill
- Not changing the `News` entity (already uses `author`)

## Decisions

1. **Button text change only, no behavior change**: The primary button still submits with `status: NewsStatus.REVIEW`. Only the label changes: "Criar notícia" (create) / "Editar notícia" (edit). The handler function `handleReviewSubmit` is kept as is. Rationale: creating/editing triggers the review workflow; the label should describe the action, not the workflow step.

2. **Author as a required text input**: `author` is a free-text field (not a user selector), matching the existing `CreateNewsDTO.author: string` type. It becomes required (remove the `?` optional marker). Rationale: the project has no backend user system integrated — author is a display name typed by the creator.

3. **Schema field rename `authorName` → `author`**: Straight rename across 3 DTOs. Since this is a frontend-only project with MSW, there is no backend contract to coordinate. All consumers must be updated atomically.

4. **Mock data alignment**: `latestNewsExample` items currently use `authorName` but serve as `NewsPreviewDTO` fixtures. They will be renamed to `author`. `pendingNews` items use `authorName` as `NewsModerationItemDTO` fixtures — renamed to `author`. `publishedNewsExample`/`draftNewsExample`/`newsDetailFixture` already use `author` (the `News` entity shape) — no change needed.

5. **Spec files updated in-place**: `domain-types/spec.md`, `news-create-form/spec.md`, `news-schemas/spec.md` get their scenarios updated to reflect the new field name and the new required field.

## Risks / Trade-offs

- **[Risk] Missing rename targets**: `authorName` might be referenced in unsearched files. → Mitigation: Use `rg` to grep the entire codebase for `authorName` before and after changes.
- **[Risk] Existing saved data with `authorName`**: Since this is MSW/mock-only with no persistence, there is no migration concern. If a real backend were added later, a migration would be needed.
- **[Trade-off] Required author field adds friction**: Authors must type their name. This is simpler than integrating user auth and matches the current domain model where `author: string` is the canonical representation.
