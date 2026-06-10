## Context

The admin news listing page (`NewsPublishedPage`) at `/admin/news/published` currently lists both published and unpublished news (toggled by a status filter), but its title and route imply only published news. The preview modal shows a minimal summary (title, category · author, summary, cover image, content) but lacks the full visual treatment that matches the public `NewsDetailPage`. The `AdminNewsCard` always shows the author even when empty.

Current state:
- Route: `/admin/news/published`
- Sidebar label: "Notícias Publicadas"
- `AdminNewsCard` always renders `{categoryName} · {author}` regardless of author value
- Preview dialog uses basic layout with no height constraint or scroll
- `NewsDetailPage` renders article content inline — no shared renderer component

## Goals / Non-Goals

**Goals:**
- Rename route and navigation to reflect that the page lists all news (published and unpublished)
- Hide author display when no author is present
- Make the preview modal faithfully show how news will appear on the detail page
- Extract the article rendering logic into a reusable component for both detail page and preview

**Non-Goals:**
- Changing the API or data model
- Adding pagination (not in scope)
- Modifying the publication review page (`NewsPublicationReviewPage`)
- Creating a new admin layout or navigation structure

## Decisions

**1. Route: `/admin/news/published` → `/admin/news`**
The page shows both statuses, so the route should be generic. The old route should be removed from the router config. The `news-create-page` redirect also needs updating.

**2. Componentize article rendering: `NewsArticleRenderer`**
Extract the visual rendering (tags, category badge, summary, cover image, content) from `NewsDetailPage` into `src/components/news/news-article-renderer.tsx`. This component accepts a `News`-like object and renders the article body. Both `NewsDetailPage` and the preview modal will use it. It handles HTML content detection (`<main id="materia">`) and markdown fallback internally, delegating to `NewsHtmlContent` when HTML is detected.

**3. Preview modal heights and scroll**
Apply `max-h-[80vh]` on the `DialogContent` body area with `overflow-y-auto` so the modal content scrolls while the header and footer remain visible. Use `flex flex-col` layout inside the dialog with the article content area being the scrollable section.

**4. Conditional author in `AdminNewsCard`**
In the `AdminNewsCard` component, render `{article.author ? `${article.categoryName} · ${article.author}` : article.categoryName}` so that when author is empty/null, only the category name is shown. Apply the same logic in the preview modal's description.

## Risks / Trade-offs

- **Route change**: Any bookmarks to `/admin/news/published` will break. Since this is an admin route with sidebar navigation, impact is minimal. No redirect needed.
- **Component extraction**: Refactoring `NewsDetailPage` to use `NewsArticleRenderer` is a low-risk change but requires careful prop typing to ensure both `News` and preview DTOs are compatible. We'll define a minimal props interface that covers the shared fields.