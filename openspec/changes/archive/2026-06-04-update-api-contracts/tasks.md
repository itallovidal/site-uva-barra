## 1. Types Foundation

- [x] 1.1 Create `src/types/api-response-types.ts` with `ResponsePayload<T>`, `ErrorPayload`, `MetaApiPayload`, `ErrorCode`
- [x] 1.2 Update `src/domain/entities.ts` — add `TokenPayloadDTO`, `CreateCategoryRequestDTO`, `UpdateCategoryRequestDTO`, `CreateNewsDTO`, `CreateUserDTO`
- [x] 1.3 Update `src/domain/entities.ts` — update `Category` (remove `description`, `createdAt`; add `tags: string[]`)
- [x] 1.4 Update `src/domain/entities.ts` — update `News` (`category` replaces `categoryId`, `author` replaces `authorId`, `readingTime` non-null)
- [x] 1.5 Update `src/domain/entities.ts` — update `NewsPreviewDTO` (`category` replaces `categoryName`, `tags: string[]` replaces nested objects, `readingTime` non-null)
- [x] 1.6 Update `src/domain/entities.ts` — remove `NewsRequestDTO`, `UserRequestDTO` (replaced by `CreateNewsDTO`, `CreateUserDTO`)

## 2. Validation Schemas

- [x] 2.1 Update `src/schemas/news-schemas.ts` — replace `categoryId` → `category`, `tagIds` → `tags` in `newsSchema`
- [x] 2.2 Update `src/schemas/user-schemas.ts` — replace `UserRequestDTO` → `CreateUserDTO` references
- [x] 2.3 Create `src/schemas/category-schemas.ts` with schemas for `CreateCategoryRequestDTO` / `UpdateCategoryRequestDTO`

## 3. Mock Data

- [x] 3.1 Update `src/mocks/news-categories-mocks.ts` — remove `description`, add `tags`
- [x] 3.2 Update `src/mocks/news-highlight-mocks.ts` — new `NewsPreviewDTO` shape (`category` field, `tags: string[]`)
- [x] 3.3 Update `src/mocks/news-category-mocks.ts` — new `NewsPreviewDTO` shape (`category` field, `tags: string[]`)

## 4. MSW Handlers

- [x] 4.1 Update all handlers in `src/mocks/handlers.ts` to wrap responses in `ResponsePayload { status, data }` envelope
- [x] 4.2 Add `POST /api/categories` and `DELETE /api/categories/:id` handlers (from refactor-category-domain scope)

## 5. Data-Fetching Hooks

- [x] 5.1 Update `src/hooks/use-news-highlights.ts` — unwrap `ResponsePayload.data`
- [x] 5.2 Update `src/hooks/use-news-by-category.ts` — unwrap `ResponsePayload.data`
- [x] 5.3 Update `src/hooks/use-collaborators.ts` — unwrap `ResponsePayload.data`
- [x] 5.4 Update inline hook in `src/pages/admin/news-publication-review-page.tsx` — unwrap `ResponsePayload.data`
- [x] 5.5 Update inline hook in `src/pages/admin/news-published-page.tsx` — unwrap `ResponsePayload.data`
- [x] 5.6 Update inline hook in `src/pages/admin/collaborators-requests-page.tsx` — unwrap `ResponsePayload.data`

## 6. Consumer Updates

- [x] 6.1 Update `src/components/news-form/news-form.tsx` — new `Category` shape (no `description`), updated schema imports
- [x] 6.2 Update `src/components/news-form/news-form.tsx` — category/tag references (`category` not `categoryId`, `tags` not `tagIds`)
