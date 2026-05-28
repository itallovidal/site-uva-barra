## Why

The home page currently has no hero/header section showcasing featured news. This is the first thing visitors see and is critical for engagement. Adding a news highlight grid will give the site a professional, content-first identity and immediately communicate what the publication covers.

## What Changes

- Create a `NewsHighlightCard` component reused across all highlight slots
- Create a `NewsHighlightGrid` component with a 2-column layout (left larger, right stacked)
- Integrate the grid into `HomePage` as the hero section
- Add responsive behavior: single column stack on mobile
- Define a `NewsHighlight` TypeScript type for the data shape
- Provide mock data via MSW or local fixtures for development

## Capabilities

### New Capabilities

- `news-highlight`: Featured news hero section on the home page with a grid of highlighted articles, each rendered as a card with image, gradient overlay, category badge, title, and summary.

### Modified Capabilities

*(none)*

## Impact

- `src/pages/home-page.tsx`: Replace placeholder content with `NewsHighlightGrid`
- `src/components/home/`: New folder and components (`news-highlight-card.tsx`, `news-highlight-grid.tsx`)
- `src/types/`: New type file (`news-highlight-types.ts`)
- `src/mocks/`: New mock data for development
