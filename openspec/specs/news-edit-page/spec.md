## ADDED Requirements

### Requirement: News edit page exists

The system SHALL provide a page at `/admin/news/edit/:id` that allows editing an existing news article.

#### Scenario: Page loads article data
- **WHEN** the admin navigates to `/admin/news/edit/:id`
- **THEN** the system SHALL fetch the article via `GET /news/:id`
- **AND** the system SHALL render the `NewsForm` component with `mode="edit"` and `defaultValues` populated from the fetched article

#### Scenario: Page shows loading state
- **WHEN** the article data is being fetched
- **THEN** the system SHALL display a loading state (e.g., skeleton) until the data resolves

#### Scenario: Page handles fetch error
- **WHEN** the `GET /news/:id` request fails
- **THEN** the system SHALL display an error message and keep the admin on the page

#### Scenario: Edit page layout matches create page
- **WHEN** the page renders
- **THEN** the layout, title, and description SHALL match the `NewsCreatePage` (Card with centered title and description)
- **AND** the title SHALL be "Editar Notícia"
- **AND** the description SHALL be "Edite os campos abaixo para atualizar a notícia"

### Requirement: News edit page submits updates

The system SHALL submit article updates via `PUT /news/:id` when the admin saves the form.

#### Scenario: Successful update redirects
- **WHEN** the admin submits the edited form successfully
- **THEN** the system SHALL call `updateNews(id, data)`
- **AND** on success, redirect to `/admin/news?status=unpublished`

#### Scenario: Failed update shows error
- **WHEN** the update API call fails
- **THEN** the system SHALL display an error message and keep the form data intact

#### Scenario: Update uses existing form buttons
- **WHEN** the form is in edit mode
- **THEN** the primary button SHALL display "Editar notícia"
- **AND** the draft button SHALL display "Salvar como Rascunho"
