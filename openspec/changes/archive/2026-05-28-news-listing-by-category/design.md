## Context

The site currently displays news only on the home page via `NewsHighlightGrid`. There is no way to browse news by category. The existing `NewsHighlightCard` uses a vertical overlay layout (image background with text overlaid), which is not suitable for a dense listing page. A new horizontal card layout is needed for category listings.

## Goals / Non-Goals

**Goals:**
- Provide a route `/news/category/:category` that lists news for a given category
- Reusable `CategorySection` component that fetches news by category with configurable limit
- `NewsCard` component with horizontal layout (image left, text right)
- Extend `NewsHighlight` type with `author` and `publishedAt` fields
- Add MSW mock handler for `GET /api/news?category=:category&limit=:limit`
- Default limit of 3 items per category section

**Non-Goals:**
- Pagination or infinite scroll (single fetch per category)
- Search functionality
- Category list/index page showing all categories at once
- Modifying the existing home page `NewsHighlightCard` layout

## Decisions

1. **Route structure**: `/news/category/:category` — simple, RESTful, matches the URL param to the API query.
2. **API query params**: `GET /api/news?category=X&limit=Y` — follows existing `/api/news/latest` pattern. Reuses the same base `/api/news` path.
3. **Horizontal NewsCard**: A new component (`src/components/news/news-card.tsx`) rather than modifying `NewsHighlightCard` — the layout is fundamentally different (horizontal vs overlay), making a combined component over-engineered.
4. **CategorySection is page-scoped**: Since it's only used on the news category page, it lives under `src/components/news/`.
5. **NewsCard is cross-page**: It lives under `src/components/news-card/` for potential reuse (e.g., search results, related articles).
6. **Hook pattern**: `useNewsByCategory(category, limit)` follows the same pattern as `useNewsHighlights`.
7. **Type extension**: `NewsHighlight` gets `author` and `publishedAt` as optional fields to avoid breaking the existing home page usage.

## Risks / Trade-offs

- [Type change] Adding `author` and `publishedAt` to `NewsHighlight` may require updating existing mock data. → Kept as optional fields; existing mocks still work without them.
- [Data availability] The mock data needs enough articles per category to test. → Added at least 2 articles per category in mocks.
- [Empty state] If no articles exist for a category, the page shows nothing useful. → `CategorySection` handles empty state with a "Nenhuma notícia encontrada" message.
