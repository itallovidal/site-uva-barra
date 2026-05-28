## Why

The site needs a dedicated page to browse news filtered by category, allowing users to explore articles by topic (e.g., Tecnologia, Educação, Ciência). Currently there is no way to view news organized by category — all articles are shown only on the home page highlights. This change adds news discovery by category, a common pattern in news sites.

## What Changes

- New route `/news/category/:category` that fetches and displays news from a specific category
- `CategorySection` component that receives a category name, fetches news internally via API, and renders up to N results
- `NewsCard` component with a horizontal layout (image left, text right) including badge, title, summary, and author/time metadata
- New API mock handler for `GET /api/news?category=:category&limit=:limit`
- New page `news-category-page.tsx` at route `/news/category/:category`
- Update to `NewsHighlight` type to include `author` and `publishedAt` fields
- New mock data for category-based news responses

## Capabilities

### New Capabilities
- `news-category-page`: Page at `/news/category/:category` that uses `CategorySection` to list news cards for the given category
- `news-card`: Horizontal `NewsCard` component displaying image, badge, title, summary, and author/time metadata, usable across multiple pages

### Modified Capabilities
- `news-highlight`: The `NewsHighlight` type needs `author` and `publishedAt` fields added; `NewsHighlightCard` is not modified since its layout stays the same for the home page

## Impact

- `src/routes/index.tsx` — new route added
- `src/pages/` — new `news-category-page.tsx`
- `src/components/news/` — new directory with `news-card.tsx` and `category-section.tsx`
- `src/hooks/` — new `use-news-by-category.ts` hook
- `src/types/news-highlight-types.ts` — `NewsHighlight` type extended with `author` and `publishedAt`
- `src/mocks/handlers.ts` — new handler for `GET /api/news`
- `src/mocks/` — new mock data file for category-based news
