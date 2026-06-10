## 1. Update DTO interfaces

- [x] 1.1 Update `src/domain/entities.ts` — rename `categoryName` to `category` in `NewsModerationItemDTO` (line ~113)
- [x] 1.2 Update `src/domain/entities.ts` — rename `categoryName` to `category` in `AdminNewsCardDTO` (line ~125)

## 2. Update mock data

- [x] 2.1 Update `src/mocks/news/news-state.ts` — change `categoryName: 'Cultura'` to `category: 'Cultura'` (line ~14)
- [x] 2.2 Update `src/mocks/news/news-state.ts` — change `categoryName: 'Educação'` to `category: 'Educação'` (line ~27)

## 3. Update UI components

- [x] 3.1 Update `src/components/admin-news-card/admin-news-card.tsx` — replace `article.categoryName` with `article.category` in the card description (line ~45)

## 4. Update admin pages

- [x] 4.1 Update `src/pages/admin/news-listing-page.tsx` — replace `previewNews.categoryName` with `previewNews.category` in the preview modal description (line ~222)
- [x] 4.2 Update `src/pages/admin/news-publication-review-page.tsx` — replace `previewNews.categoryName` with `previewNews.category` in the preview modal description (line ~312)

## 5. Update specification

- [x] 5.1 Update `openspec/specs/domain-types/spec.md` — change `categoryName` to `category` in the `NewsModerationItemDTO` shape scenario (line ~64)
- [x] 5.2 Update `openspec/specs/domain-types/spec.md` — change `categoryName` to `category` in the `AdminNewsCardDTO` shape scenario (line ~69)

## 6. Verify

- [x] 6.1 Run `tsc --noEmit` to confirm no TypeScript errors remain
- [x] 6.2 Run `grep -r "categoryName" src/` to confirm no stray references in source code
