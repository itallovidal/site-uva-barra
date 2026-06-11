## ADDED Requirements

### Requirement: Admin can delete an article from the list

The system SHALL allow the admin to delete an article directly from the listing page, with a confirmation dialog before execution.

#### Scenario: Delete action is available on each card

- **WHEN** the admin views the admin news listing page
- **THEN** each article card SHALL display a "Deletar" action button with `destructive` variant

#### Scenario: Confirmation dialog appears before deletion

- **WHEN** the admin clicks "Deletar" on an article card
- **THEN** a confirmation dialog SHALL appear with title "Deletar notícia" and description "Tem certeza que deseja deletar esta notícia? Esta ação não pode ser desfeita."
- **AND** the dialog SHALL have "Cancelar" and "Deletar" buttons

#### Scenario: Delete confirms and sends request

- **WHEN** the admin confirms deletion in the dialog
- **THEN** the system SHALL send a `DELETE /news/:id` request with the article's ID
- **AND** SHALL display a loading state on the delete button while the request is in flight

#### Scenario: Article removed from list after successful deletion

- **WHEN** the `DELETE /news/:id` request succeeds (204 No Content)
- **THEN** the article SHALL be removed from the local list
- **AND** the article count SHALL update accordingly

#### Scenario: Delete failure is handled

- **WHEN** the `DELETE /news/:id` request fails
- **THEN** the system SHALL display an error message
- **AND** the article SHALL remain in the list
