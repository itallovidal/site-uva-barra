## 1. Type & Data Layer

- [x] 1.1 Extend `NewsHighlight` type with optional `author` and `publishedAt` string fields
- [x] 1.2 Create mock data for category-based news in `src/mocks/news-category-mocks.ts`
- [x] 1.3 Add MSW handler for `GET /api/news?category=:category&limit=:limit`

## 2. Data Fetching

- [x] 2.1 Create `useNewsByCategory` hook in `src/hooks/use-news-by-category.ts` that accepts `category` and `limit` params

## 3. Components

- [x] 3.1 Create `src/components/news-card/news-card.tsx` with horizontal image-left layout, badge, title, summary, and time-ago + author metadata
- [x] 3.2 Add time-ago utility helper in `src/utils/` or inline in the card
- [x] 3.3 Create `src/components/news/category-section.tsx` that uses `useNewsByCategory` and renders `NewsCard` items with loading/error/empty states

## 4. Page & Routing

- [x] 4.1 Create `src/pages/news-category-page.tsx` that reads `:category` from URL params and renders `CategorySection`
- [x] 4.2 Add route `/news/category/:category` in `src/routes/index.tsx`
- [x] 4.3 Skipped — nav already has "Novidades"; category-specific links would require dynamic data and are out of scope
