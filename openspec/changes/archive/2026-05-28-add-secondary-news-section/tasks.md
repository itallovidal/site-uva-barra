## 1. Mock Data Expansion

- [x] 1.1 Add 6th item to `newsHighlightMocks` array in `src/mocks/news-highlight-mocks.ts`
- [x] 1.2 Verify mock handler returns 6 items via `/api/news/latest`

## 2. Compact Card Variant

- [x] 2.1 Add `isCompact` prop to `NewsHighlightCardProps`
- [x] 2.2 Apply compact styling: smaller aspect-ratio, reduced text sizes and padding when `isCompact` is true

## 3. Secondary Row in NewsHighlightGrid

- [x] 3.1 Update minimum items guard from 3 to 6 (return null if `highlights.length < 6`)
- [x] 3.2 Destructure last 3 highlights (`rest` from indices 3-5)
- [x] 3.3 Add secondary section below the main grid with `flex flex-col gap-4 md:flex-row` layout
- [x] 3.4 Render each secondary card with `isCompact` prop
- [x] 3.5 Verify responsive behavior: stacks on mobile, side-by-side on md+
