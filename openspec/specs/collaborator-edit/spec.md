## ADDED Requirements

### Requirement: Edit collaborator dialog

The system SHALL open a Dialog with the `CollaboratorForm` component in `mode="edit"` when the user clicks the edit (pencil) button on a collaborator card.

#### Scenario: User clicks edit button

- **WHEN** the user clicks the edit (pencil) icon button on a collaborator card
- **THEN** a Dialog SHALL open containing the `CollaboratorForm` with `mode="edit"` and `defaultValues` populated from the collaborator's current data

#### Scenario: Edit form submission

- **WHEN** the user modifies fields in the edit dialog and submits
- **THEN** the system SHALL call `updateCollaborator(collaborator.id, data)`, close the dialog on success, and refresh the collaborator list

#### Scenario: Edit submission fails

- **WHEN** the `updateCollaborator` API call returns an error
- **THEN** the dialog SHALL remain open and the form SHALL display an error feedback message

#### Scenario: User cancels edit

- **WHEN** the user closes the edit dialog without submitting
- **THEN** no changes SHALL be made to the collaborator data

### Requirement: Edit visibility based on permissions

The system SHALL only display the edit button when the logged-in user is an admin or is viewing their own card.

#### Scenario: Admin viewing any card

- **WHEN** the logged-in user has `isAdmin === true`
- **THEN** the edit button SHALL be visible on every collaborator card

#### Scenario: Collaborator viewing own card

- **WHEN** the logged-in user's `user.id` matches `collaborator.id`
- **THEN** the edit button SHALL be visible on that card

#### Scenario: Collaborator viewing another's card

- **WHEN** the logged-in user is NOT an admin and `user.id` does NOT match `collaborator.id`
- **THEN** the edit button SHALL be hidden

### Requirement: updateCollaborator API function

The system SHALL provide an `updateCollaborator` function in `src/api/collaborators/update-collaborator.ts` that sends a PUT request to `/user/:id` using `apiAuthClient`.

#### Scenario: Successful update

- **WHEN** `updateCollaborator(id, data)` is called with a valid ID and data
- **THEN** it SHALL send a PUT request to `/user/:id` with the update payload and return the updated user data

#### Scenario: Update with authentication error

- **WHEN** `updateCollaborator` receives a 401 response
- **THEN** it SHALL throw an appropriate error

### Requirement: Update collaborator mock handler

The system SHALL provide an MSW handler for `PUT /api/user/:id` that updates a collaborator's data and returns the updated record.

#### Scenario: Update existing collaborator

- **WHEN** a PUT request is made to `/api/user/:id` with valid data and an authenticated session
- **THEN** the handler SHALL update the collaborator's fields and return `{ status: 200, data: { ...updatedFields } }`

#### Scenario: Update non-existent collaborator

- **WHEN** a PUT request is made to `/api/user/:id` with an ID not found
- **THEN** the handler SHALL return `{ status: 404, error: { message: "Colaborador não encontrado" } }`
