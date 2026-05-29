## Why

The admin panel has placeholder pages for news article management. The creation page at `/admin/articles/create` needs to be implemented so collaborators and admins can write and submit news articles with rich text content using MDXEditor.

## What Changes

- Replace the placeholder page at `/admin/articles/create` with a functional news creation form
- Integrate MDXEditor (`@mdxeditor/editor`) for the rich text content body
- Add category selection combobox and tag selection
- Add cover image URL input with preview
- Add reading time auto-calculation based on content length
- Implement form validation using the existing `newsSchema` (zod)
- Add a `POST /api/news` MSW mock handler for development
- Create a reusable `useCreateNews` hook for the API mutation

## Capabilities

### New Capabilities

- `news-create-form`: Admin news article creation form with rich text editing, category/tag selection, cover image upload, status selection (draft/review), and featured toggle

### Modified Capabilities

- _(none — no existing spec requirements are changing)_

## Impact

- **Pages**: `src/pages/admin/` — new `news-create-page.tsx` replaces placeholder at `/admin/articles/create`
- **Components**: `src/components/news-create/` — new component directory for form sub-components
- **Hooks**: `src/hooks/` — new `use-create-news.ts` hook
- **Mocks**: `src/mocks/handlers.ts` — new `POST /api/news` handler
- **Routes**: `src/routes/index.tsx` — update import and route element from `PlaceholderPage` to `NewsCreatePage`
- **Dependencies**: `@mdxeditor/editor` already installed (v4.0.1)
