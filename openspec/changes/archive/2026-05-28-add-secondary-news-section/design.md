## Context

The `NewsHighlightGrid` component currently renders a 2-column grid with 3 items (1 featured spanning 2 rows, 2 regular below). The mock data provides only 5 items. The component returns `null` when fewer than 3 items are available.

The proposal calls for expanding to 6 items total, with the last 3 rendered as a horizontal row below the existing grid.

## Goals / Non-Goals

**Goals:**
- Display 6 highlights total: 3 in the featured grid + 3 in a secondary row
- Secondary row renders 3 compact cards side by side (flex row, wrapping on mobile)
- Mock data expanded to 6 items
- Minimum items guard updated to 6

**Non-Goals:**
- No pagination, infinite scroll, or "load more" behavior
- No changes to the `NewsHighlight` type
- No routing or page-level changes beyond the grid component

## Decisions

1. **Keep secondary cards inside `NewsHighlightGrid`** — Rather than creating a separate component or composing in `HomePage`, adding a second section within the same component keeps the grid+secondary rendering cohesive. The component accepts all 6 highlights and splits them internally.

2. **Add `isCompact` prop to `NewsHighlightCard`** — The secondary cards should be visually smaller (smaller image, less padding, smaller text). Adding an `isCompact` variant is cleaner than creating a separate card component.

3. **Responsive layout: single column on mobile, 3 columns on desktop** — The secondary row uses `flex flex-col gap-4 md:flex-row` so cards stack on small screens and sit side by side on medium+ screens.

4. **Mock expanded with a 6th item** — Simple addition to the existing mock array. The handler already returns all mocks.

## Risks / Trade-offs

- [Component grows in responsibility] → Acceptable for now; can extract a `SecondaryNewsRow` later if needed
- [Compacted card may need design review] → `isCompact` styling is minimal (smaller aspect-ratio, smaller text/padding); easy to adjust
