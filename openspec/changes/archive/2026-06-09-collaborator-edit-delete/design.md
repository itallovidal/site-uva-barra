## Context

The admin collaborator list page (`CollaboratorsListPage`) renders `AdminColaboratorCard` components with `variant="preview"`, which hides all action buttons. The `variant="admin"` shows approve/delete but is only used on the requests page (`CollaboratorsRequestsPage`). There is no edit functionality at all.

The collaborator registration form is currently embedded directly in `CollaboratorRegisterPage` — over 200 lines of inline JSX, validation, and submission logic — making it impossible to reuse in other contexts (e.g., an edit modal).

The project already has an established pattern for extracting reusable forms: `NewsForm` is a standalone component (`src/components/news-form/news-form.tsx`) with a separate types file (`news-form-types.ts`). It accepts `mode`, `defaultValues`, and `onSubmit` props, and is consumed by `NewsCreatePage` by simply rendering `<NewsForm mode="create" onSubmit={handleCreate} />` inside a Card layout owned by the page.

Current auth context (`useAuth`) exposes `user` (including `id` and `role`) and `isAdmin`, which are the data points needed for permission checks on edit/delete visibility.

## Goals / Non-Goals

**Goals:**
- Extract collaborator form into a reusable `CollaboratorForm` component following the `NewsForm` pattern
- Add edit and delete action buttons to `AdminColaboratorCard` with proper permission gating
- Implement delete confirmation dialog using the existing `Dialog` component
- Implement edit dialog that renders `CollaboratorForm` with `mode="edit"` and pre-filled `defaultValues`
- Prevent any user from deleting their own account (including admins)
- Create API client functions for update and delete collaborator endpoints
- Add mock service worker handlers for the new endpoints

**Non-Goals:**
- Changing the collaborator approval flow (already exists on the requests page)
- Adding bulk operations (select multiple collaborators)
- Replacing the current auth system or permission model
- Changing the visual design of existing cards beyond adding the two new action buttons

## Decisions

### D1: Extract `CollaboratorForm` as a standalone component

**Decision**: Create `src/components/collaborator-form/collaborator-form.tsx` and `collaborator-form-types.ts` following the `news-form` folder pattern.

**Rationale**: The `NewsForm` pattern is well-established in this codebase. Extracting the form enables reuse in both the create page and the edit modal. Keeping the types in a separate file avoids circular imports.

**Alternatives considered**:
- Rendering the page inside a Dialog: Would require routing a page into a modal, which is unnecessarily complex and breaks the separation between page and component concerns.
- Duplicating the form: Violates DRY; maintenance burden when fields change.

### D2: Use Dialog component for both edit and delete modals

**Decision**: Use the existing Radix-based `Dialog` component from `src/components/lib/dialog.tsx` for both the delete confirmation and the edit form.

**Rationale**: The project already uses Dialog elsewhere. It provides accessible modal behavior (focus trap, escape close, overlay) out of the box.

**Alternatives considered**:
- Alert dialog for delete: Could be more semantically appropriate, but the project doesn't have an AlertDialog component and building one adds scope.

### D3: Permission checks use `useAuth` user context

**Decision**: Edit and delete buttons are visible only when `isAdmin === true` or `user.id === collaborator.id`. Additionally, the delete button is hidden when `user.id === collaborator.id` (you cannot delete yourself).

**Rationale**: The `useAuth` hook already provides `user.id` and `isAdmin`. No new permission system is needed — just compare IDs and role.

**Alternatives considered**:
- Server-side permission enforcement only: Would leave the UI showing buttons that don't work, creating a poor UX.
- Separate permission hook: Overkill for a simple ID + role comparison.

### D4: `useCollaborators` hook gets `refetch` capability

**Decision**: Update `useCollaborators` to expose a `refetch` function so the list page can refresh data after edit or delete.

**Rationale**: After a successful delete or edit, the collaborator list must reflect the change. The simplest approach is letting the page re-fetch.

**Alternatives considered**:
- Optimistic updates: More complex, requires rollback logic on failure.
- React Query: Not currently used in the project; would be a larger pattern shift.

### D5: Password fields optional in edit mode

**Decision**: When `CollaboratorForm` is in `mode="edit"`, password and confirmPassword fields are hidden. The update DTO does not include password.

**Rationale**: Editing a collaborator's profile should not require resetting their password. Password changes are a separate concern (likely a future "change password" feature). The existing `registerSchema` is not suitable for edit mode — a separate `editCollaboratorSchema` will be created that omits password fields.

### D6: API functions follow existing pattern

**Decision**: Create `src/api/collaborators/update-collaborator.ts` and `src/api/collaborators/delete-collaborator.ts` following the same pattern as `create-user.ts` and `list-all.ts` — using `apiAuthClient` for authenticated requests.

**Rationale**: Consistency with the existing codebase pattern. The `apiAuthClient` handles token injection automatically.

## Risks / Trade-offs

- **[Risk] Edit modal may be too small on mobile** → Mitigation: Dialog content uses `max-w-lg` with responsive width; the form fields are simple inputs that should fit well.
- **[Risk] Stale data after edit/delete if refetch fails** → Mitigation: Show error feedback in the modal and keep it open so the user can retry.
- **[Risk] Self-delete via direct API call** → Mitigation: The backend must also enforce this constraint. The UI check is just UX, not security. Server-side validation is out of scope here but should be a follow-up concern.