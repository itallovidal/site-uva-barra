## Context

The homepage currently has highlight grids and category sections but no newsletter signup. A newsletter section will be added between the content sections to capture email subscriptions and build an audience.

## Goals / Non-Goals

**Goals:**
- Add a self-contained newsletter subscription section to the homepage
- Gradient background (45deg, bright red to darker red) for visual impact
- CTA heading "A ética que move o Jornalismo"
- Email input field + submit button
- POST email to `/newsletter/register` on submit
- Loading, success, and error feedback states
- Responsive layout (mobile-first, works on all viewports)

**Non-Goals:**
- Backend implementation of the newsletter registration endpoint
- Form validation beyond required email format
- reCAPTCHA or bot protection (deferred)
- Email double opt-in flow

## Decisions

1. **Component location**: `src/components/newsletter-section/` following the existing pattern (one component per directory with kebab-case naming)
2. **Styling**: Inline Tailwind CSS classes only — no separate CSS files. Consistent with project convention.
3. **Gradient**: `bg-gradient-to-br from-red-500 via-red-700 to-red-900` — using Tailwind's `to-br` (bottom-right = 135deg approximately). For exact 45deg, use `bg-[linear-gradient(45deg,#EF4444,#991b1b)]` with arbitrary values. The user wants 45deg from bright red to darker red.
4. **State management**: `useState` in the component for `email`, `status` (idle/loading/success/error), and `message`. Follows the same pattern as existing hooks.
5. **API call**: Native `fetch()` to `POST /newsletter/register` with JSON body `{ email }`. Same approach as existing hooks.
6. **Placement on homepage**: At the bottom of the page, above the footer but as part of the main content area. The `space-y-10` in HomePage will naturally space it.
7. **No external dependencies**: Uses only `@phosphor-icons/react` for any iconography if needed.

## Risks / Trade-offs

- **[Risk]** Newsletter API endpoint may not exist yet → **Mitigation**: Treat as backend API; the frontend just calls it and handles errors gracefully
- **[Risk]** No validation feedback on email format → **Mitigation**: Use `type="email"` and HTML5 validation as first line, with clear error messages for API errors
- **[Trade-off]** Using arbitrary gradient `bg-[linear-gradient(45deg,...)]` instead of Tailwind built-in → Less elegant but necessary for exact 45deg
- **[Risk]** Gradient may feel visually heavy → **Mitigation**: Keep section compact and let white text provide contrast
