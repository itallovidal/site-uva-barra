## Context

The site currently has no admin interface. All pages are public-facing with a top navigation bar and footer layout. The admin panel needs to be a separate section under `/admin` with its own layout.

## Goals / Non-Goals

**Goals:**
- Create `/admin` route with a dedicated layout (vertical sidebar, no top nav, no footer)
- Sidebar with grouped navigation items covering all admin sections
- Responsive: sidebar visible on desktop, hamburger drawer on mobile
- Dashboard page showing latest articles, collaborators, and newsletters
- Placeholder pages for all sub-sections ("ainda em construção")
- Remove top nav bar and footer when in admin area
- Unprotected route (auth to be added later)

**Non-Goals:**
- Actual CRUD functionality for collaborators, articles, or newsletters
- Authentication/authorization
- API integration with real data
- Real-time updates on dashboard

## Decisions

- **Separate layout for admin**: Use a nested route with its own layout component (`AdminLayout`) that replaces `RootLayout`. This avoids cluttering the main layout with admin-specific logic.
- **Sidebar component**: Create a reusable `AdminSidebar` with grouped menu items. On desktop it's a fixed sidebar, on mobile it uses the existing `Drawer` component (vaul).
- **Grouped navigation**: Use section headers in the sidebar: "Colaboradores", "Artigos", "Newsletter", with items grouped under each.
- **Dashboard stats**: Will use static/mock data for now, displayed in cards using the same styling patterns as the home page (max-w-7xl, mx-auto, px-4, py-6, space-y-10).
- **Placeholder pattern**: A single reusable `PlaceholderPage` component displaying "ainda em construção" with a construction icon, to be used by all placeholder routes.
- **No top nav or footer**: The `AdminLayout` will not render the `NavBar` or `Footer` components. The `RootLayout` is unaffected.

## Risks / Trade-offs

- **Duplicate layout code**: Admin layout duplicates some structure from RootLayout, but keeps concerns cleanly separated for now.
- **No auth**: Anyone can access /admin until auth is added. This is intentional for this phase.
