## ADDED Requirements

### Requirement: AdminColaboratorCard displays collaborator info

The system SHALL provide an `AdminColaboratorCard` component that renders a collaborator's avatar (or initials fallback), name, and profession in a card layout.

#### Scenario: Display with avatar

- **WHEN** the card receives a `User` with an `avatarUrl`
- **THEN** the card SHALL render the avatar image in a circular crop

#### Scenario: Display without avatar

- **WHEN** the card receives a `User` without an `avatarUrl`
- **THEN** the card SHALL render the user's initials as a fallback in a colored circle

### Requirement: AdminColaboratorCard supports admin and preview variants

The system SHALL support a `variant` prop that controls whether action buttons are displayed.

#### Scenario: Admin variant shows approve and delete buttons

- **WHEN** the card is rendered with `variant="admin"`
- **THEN** the card SHALL display an approve button and a delete button

#### Scenario: Preview variant hides action buttons

- **WHEN** the card is rendered with `variant="preview"`
- **THEN** the card SHALL NOT display approve or delete buttons

### Requirement: AdminColaboratorCard calls onApprove and onDelete callbacks

The system SHALL accept `onApprove` and `onDelete` callback props that fire when the respective buttons are clicked.

#### Scenario: Approve button click

- **WHEN** the user clicks the approve button on a card with `variant="admin"`
- **THEN** the `onApprove` callback SHALL be called with the collaborator's `id`

#### Scenario: Delete button click

- **WHEN** the user clicks the delete button on a card with `variant="admin"`
- **THEN** the `onDelete` callback SHALL be called with the collaborator's `id`
