## ADDED Requirements

### Requirement: Admin can view all approved collaborators
The system SHALL display a list of all approved collaborators in the admin panel at `/admin/collaborators`. Each collaborator SHALL show their name, avatar (or initials fallback), and profession label using `AdminColaboratorCard` with `variant="preview"`.

#### Scenario: Successful list display
- **WHEN** the admin navigates to `/admin/collaborators`
- **THEN** the page SHALL display a heading "Lista de Colaboradores"
- **AND** the page SHALL render an `AdminColaboratorCard` for each collaborator returned by `GET /api/collaborators`
- **AND** each card SHALL use `variant="preview"` (no action buttons)

#### Scenario: Loading state
- **WHEN** the admin navigates to `/admin/collaborators` and the data is still loading
- **THEN** the page SHALL display "Carregando colaboradores..."

#### Scenario: Error state
- **WHEN** the `GET /api/collaborators` request fails
- **THEN** the page SHALL display an error message with "Erro ao carregar" heading and the error details

#### Scenario: Empty state
- **WHEN** the `GET /api/collaborators` returns an empty array
- **THEN** the page SHALL display "Nenhum colaborador encontrado" with a descriptive subtitle

#### Scenario: Collaborator count display
- **WHEN** the collaborators list is loaded
- **THEN** the page SHALL show the total count of collaborators (e.g., "3 colaboradores")
