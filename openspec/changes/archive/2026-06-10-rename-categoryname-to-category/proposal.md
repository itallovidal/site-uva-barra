## Why

The `NewsModerationItemDTO` and `AdminNewsCardDTO` interfaces use `categoryName` as the field name for the article category, while the `News` entity and `CreateNewsDTO` use `category`. This inconsistency creates confusion and risks of type mismatches when mapping between the article domain model and the DTOs used in admin views. Aligning all DTOs to use `category` ensures the naming is consistent across the domain.

## What Changes

- **BREAKING**: Rename `categoryName` to `category` in `NewsModerationItemDTO` and `AdminNewsCardDTO` in `src/domain/entities.ts`
- Update all mock data and fixtures that currently set `categoryName` to use `category`
- Update all UI components and pages that read `categoryName` from the DTOs to read `category` instead
- Update the domain-types spec to reflect the corrected field name

## Capabilities

### New Capabilities
- *(none — this is a consistency fix)*

### Modified Capabilities
- `domain-types`: Update `NewsModerationItemDTO` and `AdminNewsCardDTO` shape requirements to use `category` instead of `categoryName`

## Impact

- `src/domain/entities.ts` — DTO interface changes
- `src/mocks/news/news-state.ts` — mock data shape update
- `src/components/admin-news-card/admin-news-card.tsx` — component prop usage
- `src/pages/admin/news-listing-page.tsx` — preview modal usage
- `src/pages/admin/news-publication-review-page.tsx` — preview modal usage
- `openspec/specs/domain-types/spec.md` — spec requirement update

No external API changes are required — this is purely an internal alignment between our DTOs and the domain model.
