## Why

The admin panel has a "Lista de Colaboradores" route (`/admin/collaborators`) that currently shows only a placeholder page. Admins need to view all approved collaborators in one place — seeing their name, avatar, and profession — to manage the team roster.

## What Changes

- Replace the placeholder at `/admin/collaborators` with a real page (`CollaboratorsListPage`)
- Consume the existing `GET /api/collaborators` endpoint via the existing `useCollaborators()` hook
- Display each collaborator using `AdminColaboratorCard` with `variant="preview"` (no action buttons)
- Handle loading, error, and empty states consistently with the existing requests page pattern

## Capabilities

### New Capabilities
- `admin-colaboradores-list`: Admin page listing all approved collaborators with display-only cards

### Modified Capabilities

_(None — no existing specs are changing)_

## Impact

- **Routes**: `src/routes/index.tsx` — replace `PlaceholderPage` with `CollaboratorsListPage`
- **Pages**: New file `src/pages/admin/collaborators-list-page.tsx` (mirrors `collaborators-requests-page.tsx` pattern)
- **Components**: No component changes; `AdminColaboratorCard` already supports `variant="preview"`
- **Hooks**: Reuses existing `useCollaborators()` from `src/hooks/use-collaborators.ts`
- **Tests**: No new test infrastructure required
