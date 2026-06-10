## Why

The news form submit button always shows "Enviar para Revisão" regardless of create or edit mode, which is confusing — users expect context-specific labels like "Criar notícia" or "Editar notícia". Additionally, the form does not capture the author name, yet the API expects it. The DTOs use `authorName` while the core `News` entity uses `author`, creating an inconsistency that should be unified.

## What Changes

1. **Button text by mode**: Change the primary submit button label from "Enviar para Revisão" to "Criar notícia" (create mode) / "Editar notícia" (edit mode). The secondary "Salvar Rascunho" button remains unchanged.
2. **Author field in form**: Add an author text input to the news form, required for submission.
3. **BREAKING — Rename `authorName` to `author`**: Update all DTOs (`NewsPreviewDTO`, `NewsModerationItemDTO`, `AdminNewsCardDTO`) to use `author` instead of `authorName`.
4. **Update all consumers**: Components, pages, mocks, and fixtures that reference `authorName` must use `author`.
5. **Update Zod schema**: Add `author` field to `newsSchema`.

## Capabilities

### New Capabilities

*(none)*

### Modified Capabilities

- `news-create-form`: Submit button labels change from "Enviar para Revisão" to mode-specific text; author field added to form; form data includes `author`.
- `news-schemas`: Zod schema gains required `author` field.
- `domain-types`: DTO fields renamed from `authorName` to `author` across all interfaces.
- `mock-service-worker`: MSW fixtures and handlers updated to use `author` instead of `authorName`.

## Impact

- `src/domain/entities.ts` — rename `authorName` → `author` in 3 DTOs
- `src/schemas/news-schemas.ts` — add `author` field
- `src/components/news-form/` — update button text, add author input
- `src/components/news-card/news-card.tsx` — use `author` instead of `authorName`
- `src/components/admin-news-card/admin-news-card.tsx` — use `author` instead of `authorName`
- `src/pages/admin/news-published-page.tsx` — use `author` instead of `authorName`
- `src/pages/admin/news-publication-review-page.tsx` — use `author` instead of `authorName`
- `src/mocks/news/news-fixtures.ts` — use `author` instead of `authorName`
- `src/mocks/news/news-state.ts` — use `author` instead of `authorName`
- `openspec/specs/news-create-form/spec.md` — update scenarios
- `openspec/specs/news-schemas/spec.md` — update scenarios
- `openspec/specs/domain-types/spec.md` — update scenarios
