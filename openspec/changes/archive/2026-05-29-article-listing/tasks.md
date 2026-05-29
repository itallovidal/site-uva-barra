## 1. Specification

- [x] 1.1 Add the `admin-articles-list` spec covering the published-articles page and unpublish action

## 2. UI Structure

- [x] 2.1 Extract or extend the reusable article card/actions UI so the moderation page and published list can configure their own actions
- [x] 2.2 Add the new semantic `/admin/articles/published` route
- [x] 2.3 Wire loading, empty, and error states for the published articles page

## 3. Actions

- [x] 3.1 Implement the unpublish action flow for published articles
- [x] 3.2 Keep publish and request-review actions working on the moderation page
- [x] 3.3 Add the API or MSW support needed for the unpublish request

## 4. Verification

- [x] 4.1 Verify `/admin/articles/published` renders the published article list
- [x] 4.2 Verify preview and unpublish actions behave correctly for published articles
