## 1. Rename `authorName` to `author` in domain DTOs

- [x] 1.1 Change `NewsPreviewDTO.authorName` → `author` in `src/domain/entities.ts`
- [x] 1.2 Change `NewsModerationItemDTO.authorName` → `author` in `src/domain/entities.ts`
- [x] 1.3 Change `AdminNewsCardDTO.authorName` → `author` in `src/domain/entities.ts`
- [x] 1.4 Change `CreateNewsDTO.author` from optional to required in `src/domain/entities.ts`

## 2. Update components that consume renamed DTO field

- [x] 2.1 Update `src/components/news-card/news-card.tsx` — replace `authorName` with `author` in destructuring and JSX
- [x] 2.2 Update `src/components/admin-news-card/admin-news-card.tsx` — replace `article.authorName` with `article.author`
- [x] 2.3 Update `src/pages/admin/news-published-page.tsx` — replace `previewNews.authorName` with `previewNews.author`
- [x] 2.4 Update `src/pages/admin/news-publication-review-page.tsx` — replace `previewNews.authorName` with `previewNews.author`

## 3. Update mock fixtures and state

- [x] 3.1 Update `src/mocks/news/news-fixtures.ts` — rename `authorName` to `author` in `latestNewsExample` items
- [x] 3.2 Update `src/mocks/news/news-state.ts` — rename `authorName` to `author` in `pendingNews` items

## 4. Add `author` field to Zod schema and NewsForm

- [x] 4.1 Add required `author` string field to `newsSchema` in `src/schemas/news-schemas.ts`
- [x] 4.2 Add author text input to `src/components/news-form/news-form.tsx` with label "Autor" and validation error "Autor é obrigatório"

## 5. Update primary submit button label

- [x] 5.1 In `src/components/news-form/news-form.tsx`, change the primary submit button text from `'Enviar para Revisão'` to `'Criar notícia'` (create mode) and `'Editar notícia'` (edit mode)

## 6. Update spec files for archive

- [x] 6.1 Update `openspec/specs/domain-types/spec.md` — merge delta changes from `specs/domain-types/spec.md`
- [x] 6.2 Update `openspec/specs/news-create-form/spec.md` — merge delta changes from `specs/news-create-form/spec.md`
- [x] 6.3 Update `openspec/specs/news-schemas/spec.md` — merge delta changes from `specs/news-schemas/spec.md`
- [x] 6.4 Update `openspec/specs/mock-service-worker/spec.md` — merge delta changes from `specs/mock-service-worker/spec.md`
