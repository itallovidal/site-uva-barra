## 1. API Layer — Centralize news API calls

- [x] 1.1 Create `src/api/news/create-news.ts` with `createNews` function, following the pattern of `src/api/collaborators/create-user.ts`
- [x] 1.2 Create `src/api/news/update-news.ts` with `updateNews(id, data)` function, following the same pattern
- [x] 1.3 Refactor `src/pages/admin/news-create-page.tsx` to import and use `createNews` from `@/api/news/create-news`, removing inline `fetch` logic
- [x] 1.4 Verify `src/api/news/index.ts` or barrel exports exist; if not, ensure new files are importable via `@/api/news/*`

## 2. Edit Page — Build the news edit page

- [x] 2.1 Create `src/pages/admin/news-edit-page.tsx` with `NewsEditPage` component
- [x] 2.2 Implement data fetching on mount: call `getNewsById` with the `id` param and populate `defaultValues` for `NewsForm`
- [x] 2.3 Implement `handleUpdate` that calls `updateNews(id, data)` and redirects to `/admin/news?status=unpublished` on success
- [x] 2.4 Render `NewsForm` with `mode="edit"`, `defaultValues`, and `onSubmit={handleUpdate}` inside the same Card layout as `NewsCreatePage`
- [x] 2.5 Add loading state (e.g., skeleton) while fetching article data
- [x] 2.6 Add error state if `getNewsById` fails

## 3. Routing — Add edit route

- [x] 3.1 Add route `/admin/news/edit/:id` in `src/routes/index.tsx` mapping to `NewsEditPage`
- [x] 3.2 Import `NewsEditPage` at the top of `src/routes/index.tsx`

## 4. Admin Listing — Add edit action

- [x] 4.1 Add "Editar" action to the `AdminNewsCard` actions array in `src/pages/admin/news-listing-page.tsx`
- [x] 4.2 The "Editar" button should use `useNavigate` to redirect to `/admin/news/edit/${article.id}`
- [x] 4.3 Ensure the button order is: Pré-Visualizar, Publicar/Despublicar, Editar, Deletar

## 5. Mocks & Validation

- [x] 5.1 Verify `src/mocks/news/update-news.ts` handler covers the `PUT /news/:id` payload and returns updated data
- [x] 5.2 Verify `src/mocks/news/create-news.ts` still works after refactor
- [x] 5.3 Run the application and test: create a news article, edit it from the admin list, confirm redirect and updated data
- [x] 5.4 Verify no TypeScript errors (`npm run typecheck` or `tsc --noEmit`)
- [x] 5.5 Verify no ESLint errors (`npm run lint`)
