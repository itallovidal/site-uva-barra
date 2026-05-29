## Why

The admin area does not yet have a dedicated list for already published articles, so editors lack a fast way to review live content and take it offline when needed. A semantic route for published articles keeps the admin flow clear and adds unpublish without mixing it into the moderation queue.

## What Changes

- Add a semantic route for published articles
- Reuse the existing article moderation card pattern so preview and moderation actions stay consistent
- Add an unpublish action for published articles
- Keep the current publish and request-review actions available in the moderation flow
- Preserve the current loading, empty, and error states used across admin pages

## Capabilities

### New Capabilities
- `admin-articles-list`: Admin page at `/admin/articles/published` that lists already published articles with preview and unpublish actions

### Modified Capabilities
- `admin-placeholder-pages`: remove the new published-articles route if it would otherwise be modeled as a placeholder

## Impact

- **Routes**: `src/routes/index.tsx` will add a semantic `/admin/articles/published` route
- **Pages**: New admin article listing page and any shared card/action component needed for reuse
- **API / Mocks**: Article action flow needs unpublish support in the backend or MSW layer
- **Admin UX**: Editors get a direct view of live articles without mixing them with the moderation queue
