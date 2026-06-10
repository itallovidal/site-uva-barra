## Why

The admin news listing page is currently labeled "Notícias Publicadas" and lives at `/admin/news/published`, but it already shows both published and unpublished news via a status filter. The naming is misleading. Additionally, the preview modal doesn't reflect how news will actually look when published, and the author field displays even when empty.

## What Changes

- Rename the admin news listing route from `/admin/news/published` to `/admin/news` and update the sidebar label to "Listagem de Notícias"
- Update the page title from "Notícias Publicadas" to "Listagem de Notícias"
- Hide the author field in `AdminNewsCard` and in the preview modal when `author` is falsy
- Redesign the preview modal: max height 80vh, scrollable content, and render the full news article (tags, category badge, summary, cover image, content) following the `news-detail-page` visual pattern — componentize the article renderer for reuse

## Capabilities

### New Capabilities

- `news-article-renderer`: Shared component that renders a news article's visual content (tags, category badge, summary, cover image, HTML/Markdown content) following the news-detail-page styling, usable both in the detail page and in preview modals

### Modified Capabilities

- `admin-articles-list`: Route changes from `/admin/articles/published` to `/admin/news`, page title and sidebar label updated to "Listagem de Notícias", preview modal redesigned with 80vh max height + scroll and full article rendering
- `news-detail-page`: Uses the new `news-article-renderer` component for article content rendering instead of inline markup
- `news-card`: Author display hidden when `author` is falsy in the `AdminNewsCard` component

## Impact

- Route changes: `/admin/news/published` → `/admin/news` (affects router, sidebar, and `news-create-page` redirect)
- Component changes: `AdminNewsCard`, `NewsPublishedPage`, `NewsDetailPage`
- New component: `NewsArticleRenderer` extracted from `NewsDetailPage`
- Preview dialog: layout and styling changes in `NewsPublishedPage`