## 1. Create NewsArticleRenderer Component

- [x] 1.1 Create `src/components/news/news-article-renderer.tsx` with props interface for article fields (title, summary, category, author, coverImageUrl, tags, content)
- [x] 1.2 Implement conditional author rendering: show "Escrito por: {author}" only when author is truthy, omit entirely when falsy
- [x] 1.3 Implement cover image rendering with fallback to `/agencia-uva-fallback.jpg`
- [x] 1.4 Implement HTML/Markdown content detection and rendering (delegate to `NewsHtmlContent` for HTML, `Markdown` + `remarkGfm` for markdown), with `prose` wrapper styling matching `NewsDetailPage`
- [x] 1.5 Add barrel export in `src/components/news/news-article-renderer/index.ts`

## 2. Refactor NewsDetailPage to Use NewsArticleRenderer

- [x] 2.1 Replace inline article rendering in `NewsDetailPage` with `NewsArticleRenderer` component, keeping the `<article>` wrapper and `<h1>` title in the page
- [x] 2.2 Verify the detail page visually matches the previous rendering after refactor

## 3. Rename Route and Update Navigation

- [x] 3.1 Update `src/routes/index.tsx`: change path from `/admin/news/published` to `/admin/news`
- [x] 3.2 Update `src/pages/admin/admin-sidebar.tsx`: change link from `/admin/news/published` to `/admin/news` and text from "Notícias Publicadas" to "Listagem de Notícias"
- [x] 3.3 Update `src/pages/admin/news-create-page.tsx`: change navigate redirect from `/admin/news/published` to `/admin/news`
- [x] 3.4 Rename file to `news-listing-page.tsx`, rename component to `NewsListingPage` (aliased as `AdminNewsListingPage` in routes to avoid conflict with public `NewsListingPage`), update exports and imports
- [x] 3.5 Update page title in `NewsListingPage` from "Notícias Publicadas" to "Listagem de Notícias" and update subtitle accordingly

## 4. Fix AdminNewsCard Author Display

- [x] 4.1 Update `AdminNewsCard` in `admin-news-card.tsx`: change `{article.categoryName} · {article.author}` to conditionally render author only when truthy: show `{article.categoryName}` alone if no author, `{article.categoryName} · {article.author}` if present

## 5. Redesign Preview Modal in NewsPublishedPage

- [x] 5.1 Update `DialogContent` to use flex column layout: `flex flex-col max-h-[80vh]`
- [x] 5.2 Make the modal body area scrollable: add `overflow-y-auto` to the content section between header and footer
- [x] 5.3 Replace the inline preview rendering with `NewsArticleRenderer` component
- [x] 5.4 Add conditional author display in the modal header (`DialogTitle`/`DialogDescription`) — show author only when truthy
- [x] 5.5 Keep DialogHeader and DialogFooter visible (not scrolling) while article content scrolls