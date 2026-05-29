## Context

The admin section has placeholder pages for "Solicitações" and "Lista de Colaboradores". Both need a card component to display collaborator information. The "Solicitações" page needs actions for approving or deleting pending collaborator requests, while the "Lista de Colaboradores" page only needs a preview variant.

The project already has a `User` entity with fields (`id`, `name`, `email`, `avatarUrl`, `profession`, `status`, etc.) and an existing `TeamMemberCard` component in the public-facing "Sobre" page that serves as a reference pattern.

## Goals / Non-Goals

**Goals:**
- Create a reusable `AdminColaboratorCard` component that displays collaborator name, profession, and avatar
- Support two visual modes: `"admin"` (with approve/delete action buttons) and `"preview"` (read-only display)
- Replace the placeholder page at `/admin/collaborators/requests` with a functional listing page
- Add MSW mock handlers for pending collaborator requests and approve/delete mutations

**Non-Goals:**
- This change does NOT implement the collaborator list page (`/admin/collaborators`) — that will reuse the card with `variant="preview"` in a future change
- No backend API integration — everything stays mocked via MSW
- No pagination or filtering in this first iteration

## Decisions

### Component API: `variant` prop over separate components
A single component with a `variant` prop (`"admin" | "preview"`) is cleaner than two separate components. The variant controls whether action buttons render and whether the card has hover/interactive states.

### Data model: `User` entity directly
The card accepts a `User` object directly (from `@/domain/entities`). For the admin flow, we need the full user including `status`, `id`, and `email` (not just the profile DTO). The `status` field (`pending` | `active` | `inactive`) determines whether to show approve/delete actions.

### Styling: shadcn/ui Card as base
Using the existing `Card` primitive from `@/components/lib/card.tsx` ensures visual consistency with the rest of the admin panel. Phosphor icons (already used in the admin sidebar) will be used for action buttons.

### Callbacks for actions
The card receives `onApprove` and `onDelete` callbacks instead of handling API calls internally. This keeps the card presentational and lets the parent page manage async state.

## Risks / Trade-offs

- Tight coupling to the `User` entity: if the entity shape changes, the card needs updating. Mitigation: use only stable fields (`id`, `name`, `avatarUrl`, `profession`, `status`).
- Mock-first approach: MSW handlers for approve/delete need to be designed to match what a real API would look like, avoiding refactors later.
