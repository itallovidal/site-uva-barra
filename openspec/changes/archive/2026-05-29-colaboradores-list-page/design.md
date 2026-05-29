## Context

The admin panel has three collaborator routes under `/admin/collaborators`:
- `/` — currently a `PlaceholderPage` ("Lista de Colaboradores")
- `/register` — implemented (collaborator-register-page.tsx)
- `/requests` — implemented (collaborators-requests-page.tsx)

The existing `useCollaborators()` hook fetches `GET /api/collaborators` and returns `UserProfileDTO[]`. The `AdminColaboratorCard` component already supports a `variant="preview"` mode that renders without action buttons — exactly what this page needs.

The goal is to replace the placeholder with a full listing page following the same pattern as `collaborators-requests-page.tsx`.

## Goals / Non-Goals

**Goals:**
- Replace the `/admin/collaborators` placeholder with a real listing page
- Use the existing `AdminColaboratorCard` in `variant="preview"` mode
- Handle loading, error, and empty states
- Reuse the existing `useCollaborators()` hook

**Non-Goals:**
- No changes to `AdminColaboratorCard` or any shared component
- No changes to the data-fetching layer or API
- No new hooks or services
- No search, filter, or pagination (future iterations)

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Page structure | Inline the listing logic in the page component | Follows the exact pattern of `collaborators-requests-page.tsx` — no abstraction needed for a simple list view |
| Card variant | `"preview"` | Already built into `AdminColaboratorCard`; hides Approve/Delete buttons |
| Data fetching | Reuse `useCollaborators()` | Existing hook at `src/hooks/use-collaborators.ts` returns exactly the data needed (`UserProfileDTO[]`) |
| States | Loading text + error message + empty message + card list | Mirrors the existing requests page pattern for consistency |

## Risks / Trade-offs

- **No pagination**: The page assumes a small number of collaborators. If the list grows large, virtualisation or server-side pagination will be needed. Mitigation: the current mock data has only 8 entries, and real deployments are unlikely to exceed 100+ for a university portal.
- **No search/filter**: Admins cannot search or filter the list. This is acceptable for v1; the page is informational, not a management dashboard.
- **Single-column card list**: With many collaborators, a grid layout might be preferable. The card layout can be changed to grid in a follow-up without breaking the component contract.
