## Context

The home page currently shows placeholder content. A news highlight hero section is needed as the primary entry point. The implementation must use existing project conventions (React 19, TypeScript 6, Tailwind CSS 4, named functions, named exports, kebab-case files).

## Goals / Non-Goals

**Goals:**
- Responsive 2-column grid layout: left slot larger (spans 2 rows), right side has 2 stacked smaller slots
- Reusable `NewsHighlightCard` component with image, gradient overlay, category badge, title (max 2 lines), and summary
- Mobile: single-column stack of all 3 cards in order
- Define a `NewsHighlight` type for data shape
- Provide mock data for development

**Non-Goals:**
- API integration or real data fetching from a CMS
- Infinite scroll or pagination
- Click tracking or analytics
- Animations beyond basic Tailwind transitions

## Decisions

1. **CSS Grid for layout** rather than flexbox — Grid handles the asymmetric 2-column span naturally (`grid-template-areas` or `grid-row: span 2`). Flexbox would require wrapping hacks.
2. **Gradient overlay via Tailwind `bg-gradient-to-t from-black/70`** — Simplest approach, no extra elements needed. The gradient goes on a pseudo-element or inner wrapper so text stays readable.
3. **Badge as a simple `<span>` with Tailwind** rather than a shadcn Badge component — Keeps it lightweight. Can be promoted later if a shared badge component emerges.
4. **`object-cover` on image** — Ensures images fill the card area without distortion.
5. **`line-clamp-2` for title** — Tailwind provides this natively for max 2 lines.
6. **Mock data via a local fixture file** rather than MSW handler — Simpler for static data, no need for a network request. MSW can be added later for API integration.
7. **Component folder at `src/components/home/`** — Follows the existing pattern of grouping components by page/domain.

## Risks / Trade-offs

- [Image loading and layout shift] → Use explicit `aspect-ratio` on the card container so the grid doesn't reflow after images load.
- [Large images on mobile] → The grid naturally stacks on mobile, so the large left image becomes a full-width card — acceptable.
