## Why

The site is currently only accessible locally via `npm run dev`. There is no deployment process and no public URL. Hosting on GitHub Pages provides a free, zero-infrastructure deployment. However, GitHub Pages doesn't support server-side fallback for client-side routing — visiting a deep link like `/noticia/123` directly would return a 404. Switching to HashRouter solves this.

## What Changes

- Add `gh-pages` npm package as a dev dependency for publishing the build output to the `gh-pages` branch
- Configure Vite's `base` path to `/site-uva-barra/` so assets resolve correctly on GitHub Pages
- Add `predeploy` and `deploy` scripts to `package.json`
- Migrate from `createBrowserRouter` to `createHashRouter` so deep links work on GitHub Pages

## Capabilities

### New Capabilities
- `gh-pages-deployment`: Manual deployment to GitHub Pages via `npm run deploy`

### Modified Capabilities
- `routing`: Routing strategy changed from BrowserRouter (history-based) to HashRouter (hash-based) to support static hosting on GitHub Pages

## Impact

- **Modified file:** `vite.config.ts` — add `base: '/site-uva-barra/'`
- **Modified file:** `package.json` — add `gh-pages` dev dependency and `predeploy`/`deploy` scripts
- **Modified file:** `src/routes/index.tsx` — replace `createBrowserRouter` with `createHashRouter`
- **Dependency added:** `gh-pages` (dev)
