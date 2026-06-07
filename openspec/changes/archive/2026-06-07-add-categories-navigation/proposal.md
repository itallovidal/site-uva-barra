## Why

The site already exposes categories and supports filtering the news listing by category query param, but users can only reach that flow after finding a category elsewhere. Adding category access directly in the main navigation and footer improves discoverability and gives users a faster path into topical news.

## What Changes

- Add an `editoriais` trigger in the navigation bar that opens a dropdown listing all available categories
- Each category entry links to the news listing page with the category preselected via query param
- Add a dedicated `Categorias` column in the footer that lists the same available categories as quick links
- Reuse the existing categories data source so the navigation stays in sync with the API/mock data
- Keep the current nav and footer structure intact aside from the new category access points

## Capabilities

### New Capabilities

- `categories-navigation`: Category discovery links exposed from the main navbar and footer

### Modified Capabilities

- `nav-bar`: The navigation bar gains an `editoriais` dropdown populated from available categories
- `footer`: The footer gains a third column with category links alongside the existing institutional and navigation columns

## Impact

- Update `src/components/nav-bar/` to render the category dropdown and link to the listing page with `?categoria=`
- Update `src/components/root-layout/footer.tsx` to add the category column and links
- Reuse the existing `useCategories` hook and current listing route contract
- No backend/API contract changes are required