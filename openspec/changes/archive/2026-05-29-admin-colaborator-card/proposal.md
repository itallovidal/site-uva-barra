## Why

The admin interface currently has placeholder pages for "Solicitações" (collaborator requests) and "Lista de Colaboradores". To make these pages functional, we need a reusable card component to display collaborator information with appropriate actions — approve/delete for pending requests, and a preview-only mode for the collaborators list page.

## What Changes

- Create `AdminColaboratorCard` component that displays a collaborator's name, profession, and avatar with conditional action buttons
- Add a `variant` prop (`"admin" | "preview"`) to control whether approve/delete actions are shown
- Create the admin collaborators requests page (`/admin/collaborators/requests`) using the card with `variant="admin"`
- Wire up mock API handlers for listing pending collaborators and approving/deleting them

## Capabilities

### New Capabilities
- `admin-colaborator-card`: Reusable card component for displaying collaborator info with configurable actions (approve/delete or preview-only)

### Modified Capabilities

<!-- No existing capability requirements are changing -->

## Impact

- New component: `src/components/admin-colaborator-card/admin-colaborator-card.tsx`
- New page: `src/pages/admin/collaborators-requests-page.tsx` replacing the placeholder
- New MSW handlers for collaborator requests (list pending, approve, delete)
- New hook or extended `use-collaborators` hook for requests management
- Admin sidebar link to `/admin/collaborators/requests` now points to the functional listing page instead of the placeholder
