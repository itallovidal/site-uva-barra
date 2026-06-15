## Context

The project is a Vite + React SPA hosted at `github.com/itallovidal/site-uva-barra`. GitHub Pages serves static files with no server-side logic, so client-side routing via `createBrowserRouter` fails on deep link refreshes.

GitHub Pages serves the site at `https://itallovidal.github.io/site-uva-barra/`, so Vite's `base` must be set to `/site-uva-barra/` for asset paths to resolve correctly.

The app currently uses `createBrowserRouter` from react-router-dom. This needs to change for static hosting compatibility.

## Goals / Non-Goals

**Goals:**
- Vite `base` set to `/site-uva-barra/` for correct asset paths on GitHub Pages
- Migrate from `createBrowserRouter` to `createHashRouter` so all routes work on static hosting
- `gh-pages` dev dependency installed
- `predeploy` script runs `npm run build`, `deploy` script runs `gh-pages -d dist`
- Manual deploy via `npm run deploy`

**Non-Goals:**
- GitHub Actions workflow (manual deploy via `npm run deploy` is sufficient)
- Custom domain configuration
- Server-side rendering

## Decisions

1. **`createHashRouter` replaces `createBrowserRouter`** — HashRouter uses the URL hash (`#/noticia/123`) for routing, which works on static hosting because everything after `#` is never sent to the server. The change is minimal: just the import and function call in `src/routes/index.tsx`.
2. **`base: '/site-uva-barra/'` in vite.config.ts** — Required because the site is served from a subpath, not the root. Without this, JS/CSS assets would 404.
3. **`gh-pages` package for publishing** — Simple, well-established package that pushes the `dist/` folder to the `gh-pages` branch. No complex scripting needed.
4. **`predeploy` hook in package.json** — Ensures `npm run build` always runs before `gh-pages` publishes, preventing stale builds.
5. **No GitHub Actions** — Manual deploy is sufficient for this project's scale. Can be added later if needed.

## Risks / Trade-offs

- [**URL aesthetics**] → HashRouter adds `#/` to all URLs (e.g., `example.com/#/noticia/123`). This is a cosmetic trade-off for static hosting compatibility.
- [**SEO impact**] → Hash URLs are not ideal for SEO, but since this is an admin-facing site (or small-scale public site), the impact is minimal. If SEO becomes critical later, a proper server or SSG would be needed anyway.
- [**No breaking changes**] → The route paths themselves don't change — only the URL prefix does. All relative links and programmatic navigation continue to work identically.
