## 1. Setup

- [x] 1.1 Create `src/api/` directory with subdirectories: `news/`, `categories/`, `collaborators/`

## 2. Create API functions

- [x] 2.1 Create `src/api/news/get-latest-news.ts` with `getLatestNews()` function — fetches `GET /api/news/latest`, returns `Promise<ResponsePayload<NewsPreviewDTO[]>>`
- [x] 2.2 Create `src/api/news/get-by-category.ts` with `getNewsByCategory(category, limit?)` function — fetches `GET /api/news?category=&limit=`, returns `Promise<ResponsePayload<NewsPreviewDTO[]>>`
- [x] 2.3 Create `src/api/categories/list-all.ts` with `listAllCategories()` function — fetches `GET /api/categories`, returns `Promise<ResponsePayload<Category[]>>`
- [x] 2.4 Create `src/api/collaborators/list-all.ts` with `listAllCollaborators()` function — fetches `GET /api/collaborators`, returns `Promise<ResponsePayload<UserProfileDTO[]>>`

## 3. Update hooks to use API functions

- [x] 3.1 Update `use-news-highlights.ts` — replace inline fetch with call to `getLatestNews()`
- [x] 3.2 Update `use-news-by-category.ts` — replace inline fetch with call to `getNewsByCategory()`
- [x] 3.3 Update `use-categories.ts` — replace inline fetch with call to `listAllCategories()`
- [x] 3.4 Update `use-collaborators.ts` — replace inline fetch with call to `listAllCollaborators()`

## 4. Verify

- [x] 4.1 Run `npm run lint` to check for type and lint errors
- [x] 4.2 Run `npm run build` to confirm build succeeds
