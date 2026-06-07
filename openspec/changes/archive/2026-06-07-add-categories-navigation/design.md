## Context

The project already has a categories hook, a responsive navbar with desktop and mobile variants, and a footer rendered from the root layout. The news listing page already reads `?categoria=` from the URL and preselects the matching category, so the navigation only needs to generate the correct links.

## Goals / Non-Goals

**Goals:**
- Expose all available categories directly from the navbar and footer
- Use `editoriais` as the navbar trigger label
- Route category clicks to the existing news listing page using the category query param contract
- Keep the mobile experience usable without introducing a separate category management flow
- Preserve current layout and styling conventions

**Non-Goals:**
- Add new category management or editing UI
- Change the news listing query param contract or listing behavior
- Introduce a new API endpoint or data source for categories

## Decisions

1. **Single source of truth for categories**: Both the navbar and footer should consume the existing `useCategories` hook so the displayed category set stays aligned with the API/mock data.
2. **Navbar behavior by breakpoint**: Desktop should show a real dropdown anchored to `editoriais`. On mobile, the same categories should be exposed inside the drawer as a grouped list so the flow remains tap-friendly instead of forcing a hover-based interaction.
3. **Shared destination contract**: Each category link should point to the existing listing page route with `?categoria=<value>`. The listing page already handles preselection, so no extra client-side state is needed.
4. **Footer layout expansion**: The footer top section should evolve from two columns to three columns on desktop, while remaining stacked on mobile.
5. **No new fetch layer**: The current hook and API plumbing are sufficient; this change is presentation-only.

## Risks / Trade-offs

- The category list is rendered in two places, so the UI must stay consistent across navbar and footer
- A long category list can make the dropdown and footer taller, but the current data set is expected to remain small
- Using the same hook in multiple layout areas may duplicate requests depending on caching behavior; acceptable for now because the data set is small and read-only