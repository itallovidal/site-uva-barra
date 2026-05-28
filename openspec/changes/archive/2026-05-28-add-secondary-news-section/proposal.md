## Why

The news highlight section only displays 3 featured news items, wasting valuable real estate below the main grid. Readers have no quick way to see additional recent news without scrolling further down the page. Adding a secondary row of 3 news cards below the grid increases content density and improves discoverability of recent articles.

## What Changes

- Expand `newsHighlightMocks` from 5 to 6 items (so the grid gets 3 featured + 3 secondary)
- Add a secondary news section below the existing grid in `NewsHighlightGrid`, rendering the next 3 highlights (indices 3-5)
- Each secondary card displayed side by side in a horizontal row
- Secondary cards use a compact variant of `NewsHighlightCard` (smaller image, no `isFeatured` treatment)
- Bump minimum items check from 3 to 6 in `NewsHighlightGrid`
- Update `home-page.tsx` if needed for layout adjustments (e.g., wrapping the entire section in a proper container)

## Capabilities

### New Capabilities
- `secondary-news-grid`: A horizontal row of 3 compact news cards rendered below the featured grid, displaying highlights from index 3 to 5

### Modified Capabilities
<!-- No existing specs are changing requirements -->

## Impact

- `src/components/home/news-highlight-grid.tsx` — modified to add secondary row
- `src/components/home/news-highlight-card.tsx` — may need a compact variant prop
- `src/mocks/news-highlight-mocks.ts` — expanded to 6 items
- `src/pages/home-page.tsx` — may need minor layout wrapping
