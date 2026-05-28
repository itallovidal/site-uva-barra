## Why

The site needs an administrative area where editors and managers can handle collaborators, articles, newsletters, and other administrative tasks. Currently there is no admin interface — all management would require direct database or code manipulation.

## What Changes

- Create a new `/admin` route with a dedicated layout featuring a vertical sidebar menu
- Sidebar with grouped navigation: Collaborators (register, list, requests), Articles (create, list, approve), Newsletter (create, list), and Logout
- Admin dashboard/home page showing latest articles, latest collaborators, and latest newsletters sent
- All admin sub-pages (register collaborator, list collaborators, requests, create article, list articles, approve articles, create newsletter, list newsletter) will display a placeholder "ainda em construção" (still under construction) message
- Top navigation bar is replaced by the admin sidebar on the admin layout
- On mobile, the sidebar collapses into a hamburger drawer similar to the main site navigation
- Route is unprotected (no auth guard) for now

## Capabilities

### New Capabilities
- `admin-layout`: Admin layout with vertical sidebar navigation, grouped menu items, responsive hamburger on mobile, and an outlet for child routes
- `admin-dashboard`: Admin dashboard page showing latest articles, latest collaborators, and latest newsletters
- `admin-placeholder-pages`: Placeholder pages for all admin sub-sections displaying "ainda em construção"

### Modified Capabilities

<!-- No existing capabilities are modified -->

## Impact

- `src/routes/index.tsx`: Add `/admin/*` route tree
- New files under `src/pages/admin/` for the admin layout and pages
- New files under `src/components/admin/` for sidebar and layout components
