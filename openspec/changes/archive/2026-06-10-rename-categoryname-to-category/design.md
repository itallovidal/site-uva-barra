## Context

The `News` domain entity uses `category` (string) to identify the article category. However, the `NewsModerationItemDTO` and `AdminNewsCardDTO` interfaces — used by admin views for listing, previewing, and reviewing articles — were created with `categoryName` instead of `category`. This naming drift means the DTOs do not match the domain entity or the API payload shape, creating a risk of confusion when mapping data between the backend response and frontend components.

## Goals / Non-Goals

**Goals:**
- Rename `categoryName` to `category` in `NewsModerationItemDTO` and `AdminNewsCardDTO`
- Update all mock data, components, and pages that consume these DTOs to use the new field name
- Update the `domain-types` spec so it reflects the corrected field name

**Non-Goals:**
- Changing the underlying `News` entity or `CreateNewsDTO` (they already use `category`)
- Renaming the `category` field in the `NewsPreviewDTO` (it is already correct)
- Adding or removing any other fields
- Changing the UI behavior beyond the field rename

## Decisions

1. **Renaming both DTOs at once**: `NewsModerationItemDTO` and `AdminNewsCardDTO` are both affected. Because both are used in the same admin pages (`NewsListingPage`, `NewsPublicationReviewPage`), a single bulk rename is safer than splitting into two changes.

2. **Not introducing a new type alias**: We could have created a `CategoryName` type alias, but since the domain entity already uses `category: string`, the simplest fix is a direct rename.

## Risks / Trade-offs

- **[Risk] TypeScript compilation errors in admin pages**: If any component reads `categoryName` after the rename, the build will fail.  
  → **Mitigation**: Update all references atomically in the same change.

- **[Risk] Mock data desync**: `news-state.ts` fixtures use `categoryName`; they must be updated to match the new DTO shape.  
  → **Mitigation**: Included in the same task list.

## Migration Plan

No runtime migration is needed. This is a compile-time refactor:
1. Update `src/domain/entities.ts` interfaces
2. Update `src/mocks/news/news-state.ts` fixtures
3. Update component and page references
4. Update `openspec/specs/domain-types/spec.md`
5. Run `tsc --noEmit` to verify no remaining references

## Open Questions

- None — scope is clear and limited to the rename.
