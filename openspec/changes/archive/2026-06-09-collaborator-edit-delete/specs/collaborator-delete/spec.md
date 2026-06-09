## ADDED Requirements

### Requirement: Delete confirmation dialog

The system SHALL display a confirmation dialog when the user clicks the delete (trash) button on a collaborator card, asking "Tem certeza que deseja excluir este colaborador?".

#### Scenario: User clicks delete button

- **WHEN** the user clicks the trash icon button on a collaborator card
- **THEN** a Dialog SHALL open with a confirmation message and two buttons: "Cancelar" (outline variant, closes dialog) and "Excluir" (destructive variant, triggers deletion)

#### Scenario: User confirms deletion

- **WHEN** the user clicks "Excluir" in the confirmation dialog
- **THEN** the system SHALL call `deleteCollaborator(collaborator.id)`, close the dialog on success, and refresh the collaborator list

#### Scenario: User cancels deletion

- **WHEN** the user clicks "Cancelar" or closes the dialog
- **THEN** the dialog SHALL close without performing any deletion

#### Scenario: Deletion fails

- **WHEN** the `deleteCollaborator` API call returns an error
- **THEN** the dialog SHALL remain open and display an error message

### Requirement: Self-delete prevention

The system SHALL NOT show the delete button on the card of the currently logged-in user, regardless of their role.

#### Scenario: Card belongs to logged-in user

- **WHEN** the `collaborator.id` matches `user.id` from `useAuth`
- **THEN** the delete (trash) button SHALL be hidden regardless of `isAdmin` or `variant`

#### Scenario: Card belongs to another user (admin)

- **WHEN** the logged-in user is an admin and the card belongs to a different user
- **THEN** the delete button SHALL be visible

### Requirement: deleteCollaborator API function

The system SHALL provide a `deleteCollaborator` function in `src/api/collaborators/delete-collaborator.ts` that sends a DELETE request to `/user/:id` using `apiAuthClient`.

#### Scenario: Successful deletion

- **WHEN** `deleteCollaborator(id)` is called with a valid ID
- **THEN** it SHALL send a DELETE request to `/user/:id` and return the response

#### Scenario: Deletion with authentication error

- **WHEN** `deleteCollaborator` receives a 401 response
- **THEN** it SHALL throw an appropriate error

### Requirement: Delete collaborator mock handler

The system SHALL provide an MSW handler for `DELETE /api/user/:id` that removes a collaborator from the approved list and returns a success response.

#### Scenario: Delete existing collaborator

- **WHEN** a DELETE request is made to `/api/user/:id` with a valid authenticated session
- **THEN** the handler SHALL remove the collaborator from the list and return `{ status: 200, data: { success: true } }`

#### Scenario: Delete non-existent collaborator

- **WHEN** a DELETE request is made to `/api/user/:id` with an ID not in the list
- **THEN** the handler SHALL return `{ status: 404, error: { message: "Colaborador não encontrado" } }`