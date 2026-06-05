## 1. API Layer

- [x] 1.1 Create `src/api/news/search-news.ts` — POST to `${VITE_API_BASE_URL}/news/search?q=<term>`, returns `ResponsePayload<NewsPreviewDTO[]>`
- [x] 1.2 Create `src/api/news/get-news-listing.ts` — GET with query params `category?`, `sort`, `page`, `perPage`; returns `ResponsePayload<NewsPreviewDTO[]>` with `meta`

## 2. Hooks

- [x] 2.1 Create `src/hooks/use-news-listing.ts` — wraps `getNewsListing`, accepts `{ category?, sort, page, perPage }`, returns `{ articles, meta, isLoading, error }`
- [x] 2.2 Create `src/hooks/use-news-search.ts` — wraps `searchNews`, accepts `term`, skips fetch on empty string, returns `{ articles, meta, isLoading, error }`

## 3. MSW Mock Handler

- [x] 3.1 Add handler for `POST /api/news/search` in the existing MSW setup — filters mock news by case-insensitive title match, returns `ResponsePayload<NewsPreviewDTO[]>` with pagination `meta`
- [x] 3.2 Add handler for `GET /api/news` (listing endpoint) with support for `category`, `sort`, `page`, `perPage` query params if not already present

## 4. Components

- [x] 4.1 Create `src/components/news-listing/news-listing-header.tsx` — displays category name (or "Notícias") as `<h1>` with red left vertical bar decoration
- [x] 4.2 Create `src/components/news-listing/news-listing-filters.tsx` — search input (`<form>` that POSTs on submit), sort `<Select>` (Mais recente / Mais antigo), category `<Select>` (Todas + API categories)
- [x] 4.3 Create `src/components/news-listing/news-listing-grid.tsx` — renders list of `<NewsCard>` with loading skeleton, empty state, and error state
- [x] 4.4 Create `src/components/news-listing/news-listing-pagination.tsx` — renders numbered page buttons + Previous/Next; hides when `totalPages <= 1`

## 5. Page

- [x] 5.1 Create `src/pages/news-listing-page.tsx` — reads `?categoria`, `?ordem`, `?pagina` from `useSearchParams`; composes `NewsListingHeader`, `NewsListingFilters`, `NewsListingGrid`, `NewsListingPagination`; switches between listing mode (`useNewsListing`) and search mode (`useNewsSearch`) based on active search term

## 6. Routing

- [x] 6.1 Add route `/noticias` pointing to `<NewsListingPage>` in the app router (`src/routes/` or `src/app.tsx`)

## 7. Verification

- [x] 7.1 Verify `/noticias` loads and displays articles in dev mode
- [x] 7.2 Verify `/noticias?categoria=tecnologia` pre-selects the category dropdown and filters results
- [x] 7.3 Verify search bar submits POST and replaces grid with search results
- [x] 7.4 Verify "Limpar" / empty search returns to listing mode
- [x] 7.5 Verify pagination controls appear when `totalPages > 1` and navigate correctly
- [x] 7.6 Run `npm run lint` and fix any reported issues
