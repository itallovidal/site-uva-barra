## 1. Schemas & Types

- [x] 1.1 Create `editCollaboratorSchema` in `src/schemas/user-schemas.ts` (name, email, profession, role, bio — no password fields) and export `EditCollaboratorFormData` type
- [x] 1.2 Create `src/components/collaborator-form/collaborator-form-types.ts` with `CollaboratorFormProps` interface (`mode`, `onSubmit`, `defaultValues`)

## 2. API Layer

- [x] 2.1 Create `src/api/collaborators/update-collaborator.ts` with `updateCollaborator(id, data)` function using `apiAuthClient` (PUT `/user/:id`)
- [x] 2.2 Create `src/api/collaborators/delete-collaborator.ts` with `deleteCollaborator(id)` function using `apiAuthClient` (DELETE `/user/:id`)

## 3. Mock Handlers

- [x] 3.1 Expand existing mock handler at `PUT /user/:id` to also update collaborators from `teamMemberMocks`
- [x] 3.2 Expand existing mock handler at `DELETE /user/:id` to also delete collaborators from `teamMemberMocks`

## 4. CollaboratorForm Component

- [x] 4.1 Create `src/components/collaborator-form/collaborator-form.tsx` — extract form JSX from `CollaboratorRegisterPage` into a reusable `CollaboratorForm` component with `mode` and `defaultValues` props, using `registerSchema` for create mode and `editCollaboratorSchema` for edit mode
- [x] 4.2 Conditionally render password and confirmPassword fields only when `mode="create"`
- [x] 4.3 Add success/error feedback state and display, following the `NewsForm` pattern
- [x] 4.4 Add `isSubmitting` state to disable buttons during submission

## 5. Refactor CollaboratorRegisterPage

- [x] 5.1 Replace the inline form in `src/pages/admin/collaborator-register-page.tsx` with `<CollaboratorForm mode="create" onSubmit={handleCreate} />` inside the Card layout, keeping the page-level error handling and navigation

## 6. Update AdminColaboratorCard

- [x] 6.1 Import `NotePencilIcon` and `TrashIcon` from `@phosphor-icons/react` in `AdminColaboratorCard`
- [x] 6.2 Add `onEdit` callback prop to `AdminColaboratorCardProps`
- [x] 6.3 Add edit (pencil) and delete (trash) icon buttons to the card actions, visible when the user is admin or when `collaborator.id === user.id`
- [x] 6.4 Hide the delete button when `collaborator.id === user.id` (self-delete prevention)
- [x] 6.5 Update the `variant="admin"` section to also show edit and delete buttons alongside the existing approve button

## 7. Edit Dialog

- [x] 7.1 Create a Dialog in `CollaboratorsListPage` that renders `CollaboratorForm` with `mode="edit"` and `defaultValues` populated from the selected collaborator
- [x] 7.2 Connect the edit button's `onEdit` callback to open the dialog and set the selected collaborator's data as `defaultValues`
- [x] 7.3 On successful form submission, call `updateCollaborator`, close the dialog, and trigger `refetch` on the collaborator list
- [x] 7.4 On submission failure, keep the dialog open and show the error feedback in the form

## 8. Delete Confirmation Dialog

- [x] 8.1 Create a Dialog in `CollaboratorsListPage` with a confirmation message ("Tem certeza que deseja excluir este colaborador?"), "Cancelar" button (outline), and "Excluir" button (destructive)
- [x] 8.2 Connect the delete button's `onDelete` callback to open the confirmation dialog with the selected collaborator's id
- [x] 8.3 On confirmation, call `deleteCollaborator`, close the dialog on success, and trigger `refetch`
- [x] 8.4 On deletion failure, keep the dialog open and display an error message

## 9. Update useCollaborators Hook

- [x] 9.1 Add a `refetch` function to the `useCollaborators` return value that re-fetches the collaborator list
- [x] 9.2 Pass `refetch` to `CollaboratorsListPage` and call it after successful edit or delete operations

## 10. Verification

- [x] 10.1 Run `npm run lint` and `npx tsc -b` — no new errors introduced
- [ ] 10.2 Verify create page still works: navigate to `/admin/collaborators/register`, fill form, submit
- [ ] 10.3 Verify edit dialog: click edit on a collaborator card, modify fields, submit, confirm list updates
- [ ] 10.4 Verify delete dialog: click delete on a collaborator card, confirm deletion, confirm list updates
- [ ] 10.5 Verify self-delete prevention: logged-in user's card does not show the delete button