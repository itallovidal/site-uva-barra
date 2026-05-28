## Context

The app has a `RootLayout` component at `src/components/root-layout/root-layout.tsx` that renders `NavBar` and an `<Outlet />`. There is no footer. The component-structure spec mandates that root-layout sub-components live inside `src/components/root-layout/`.

The project uses Tailwind CSS 4 with Phosphor icons (`@phosphor-icons/react`).

## Goals / Non-Goals

**Goals:**
- Add a responsive `Footer` component rendered in `RootLayout`
- Desktop: max-w-7xl centered layout with left/right content sections
- Mobile (< 640px): px-4 padding
- Left column: institutional text ("Agência UVA...")
- Right column: navigation links (Sobre, Sobre a UVA, Equipe Editorial, Fale Conosco, Notícias)
- Bottom bar: copyright left, social icons (Instagram, LinkedIn) right, separated by a thin horizontal line
- Follow existing coding conventions (named functions, named exports, kebab-case files)

**Non-Goals:**
- Dynamic/editable footer content from a CMS or API
- Multi-language support
- Newsletter signup or other interactive forms

## Decisions

- **File location**: `src/components/root-layout/footer.tsx` — follows component-structure spec for root-layout sub-components
- **Max-width utility**: Tailwind `max-w-7xl mx-auto` for desktop centering, matching standard content width
- **Social icons**: `InstagramLogo` and `LinkedinLogo` from `@phosphor-icons/react` (already a dependency)
- **Layout**: CSS Grid (`grid-cols-1 md:grid-cols-2`) for the top section, `flex justify-between` for the bottom bar
- **No props needed**: Footer content is static; no dynamic data required

## Risks / Trade-offs

- Static content means URL changes require a code deploy — acceptable for this stage
- No mobile hamburger/overflow for nav links; all links visible — acceptable given small link count
