## Why

The current 404 page is a bare-bones unstyled placeholder that provides a poor user experience. It lacks visual branding, navigation guidance, and professional polish, which harms the site's credibility when users land on broken or mistyped URLs.

## What Changes

- Replace the unstyled 404 page with a modern, visually engaging design
- Center all content vertically and horizontally
- Apply the site's brand red color scheme
- Add a large illustrative icon (broken page/404 graphic)
- Include a clear, friendly error message
- Add a "Voltar para Home" (back to home) button using the shadcn Button component
- Add a secondary link to navigate back to the previous page

## Capabilities

### New Capabilities

- `not-found-page`: Modern, branded 404 error page with navigation guidance

### Modified Capabilities

*(None — no existing capabilities have requirement changes.)*

## Impact

- `src/pages/not-found-page.tsx` — full rewrite of the component
- `src/routes/index.tsx` — no changes needed (already routes `*` to `NotFoundPage`)
