## MODIFIED Requirements

### Requirement: AdminColaboratorCard supports admin and preview variants

The system SHALL support a `variant` prop that controls whether action buttons are displayed. The `variant="admin"` SHALL show approve, edit, and delete buttons. The `variant="preview"` SHALL show edit and delete buttons when permission conditions are met.

#### Scenario: Admin variant shows approve, edit, and delete buttons

- **WHEN** the card is rendered with `variant="admin"`
- **THEN** the card SHALL display an approve button, an edit (pencil) button, and a delete (trash) button

#### Scenario: Preview variant shows conditional edit and delete buttons

- **WHEN** the card is rendered with `variant="preview"`
- **THEN** the card SHALL display edit and delete buttons only when the logged-in user is an admin or the card belongs to the logged-in user, subject to self-delete prevention for the delete button

### Requirement: AdminColaboratorCard calls onApprove, onEdit, and onDelete callbacks

The system SHALL accept `onApprove`, `onEdit`, and `onDelete` callback props that fire when the respective buttons are clicked.

#### Scenario: Approve button click

- **WHEN** the user clicks the approve button on a card with `variant="admin"`
- **THEN** the `onApprove` callback SHALL be called with the collaborator's `id`

#### Scenario: Edit button click

- **WHEN** the user clicks the edit button
- **THEN** the `onEdit` callback SHALL be called with the collaborator's `id`

#### Scenario: Delete button click

- **WHEN** the user clicks the delete button
- **THEN** the `onDelete` callback SHALL be called with the collaborator's `id`