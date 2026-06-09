## MODIFIED Requirements

### Requirement: Collaborator register form

The system SHALL provide a register page at `/admin/collaborators/register` that renders the extracted `CollaboratorForm` component with `mode="create"` inside a Card layout.

#### Scenario: Successful form render

- **WHEN** admin navigates to `/admin/collaborators/register`
- **THEN** the system SHALL render a Card containing the `CollaboratorForm` component with `mode="create"` and an `onSubmit` handler that calls `createCollaborator`

#### Scenario: Form is centered on screen

- **WHEN** admin navigates to `/admin/collaborators/register`
- **THEN** the form SHALL be centered both vertically and horizontally within the admin layout content area

#### Scenario: Successful submission redirects to list

- **WHEN** admin fills all required fields correctly and submits
- **THEN** the system SHALL call `createCollaborator` and navigate to `/admin/collaborators` on success

#### Scenario: Submission failure shows feedback

- **WHEN** `createCollaborator` throws an error
- **THEN** the page SHALL display an error message and remain on the form