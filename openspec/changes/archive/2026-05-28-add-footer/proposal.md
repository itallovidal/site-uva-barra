## Why

The application currently has a navigation bar but no footer. A footer is essential for providing institutional information, navigation links, and social media presence — completing the page layout and improving user trust and discoverability.

## What Changes

- Add a `Footer` component inside `src/components/root-layout/` rendered below the `<Outlet />` in `RootLayout`
- Footer displays institutional info (left), quick links (right), and copyright with social icons (bottom)
- Desktop: max-w-7xl centered; Mobile: px-4 padding
- Social icon links for Instagram and LinkedIn

## Capabilities

### New Capabilities

- `footer`: Global site footer with institutional branding, navigation links, copyright, and social media icon links.

### Modified Capabilities

<!-- No existing spec behavior changes -->

## Impact

- New file: `src/components/root-layout/footer.tsx`
- Modify: `src/components/root-layout/root-layout.tsx` to render `<Footer />`
- No new dependencies required (Phosphor icons already available for Instagram/LinkedIn logos)
