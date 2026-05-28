## 1. Types and Data

- [x] 1.1 Create `src/types/news-highlight-types.ts` with the `NewsHighlight` interface (`id`, `imageUrl`, `category`, `title`, `summary` — all strings)
- [x] 1.2 Create `src/mocks/news-highlight-mocks.ts` with an array of 3 mock `NewsHighlight` objects

## 2. NewsHighlightCard Component

- [x] 2.1 Create `src/components/home/news-highlight-card.tsx` — card with `aspect-ratio` container, `<img>` with `object-cover`, gradient overlay (`bg-gradient-to-t from-black/70 to-transparent`), category badge (`<span>`), title (`line-clamp-2`), and summary
- [x] 2.2 Handle missing image case with a placeholder background

## 3. NewsHighlightGrid Component

- [x] 3.1 Create `src/components/home/news-highlight-grid.tsx` — responsive CSS Grid layout with 2 columns on desktop (first card spans 2 rows), single column on mobile (`grid-cols-1 lg:grid-cols-2`)
- [x] 3.2 Wire up 3 highlight cards: first as the large/featured slot, second and third as the smaller right-side slots

## 4. Home Page Integration

- [x] 4.1 Update `src/pages/home-page.tsx` — import and render `NewsHighlightGrid` with mock data as the hero section, replacing placeholder content
- [x] 4.2 Export components from `src/components/home/index.ts`

## 5. API Integration with MSW

- [x] 5.1 Expand `news-highlight-mocks.ts` to 5 items
- [x] 5.2 Add `/api/news/latest` MSW handler returning all 5 items
- [x] 5.3 Create `useNewsHighlights` hook that fetches from `/api/news/latest`
- [x] 5.4 Update `HomePage` to use the hook with loading/error states
