## MODIFIED Requirements

### Requirement: Admin can perform article actions from the list

The system SHALL allow the admin to preview, publish/unpublish, delete, and edit articles from the list.

#### Scenario: No author hides author display
- **WHEN** an article card has a falsy `author` field
- **THEN** the `AdminNewsCard` SHALL show only `categoryName` without the author separator

#### Scenario: Published article can be unpublished
- **WHEN** the admin clicks the unpublish action on a published article
- **THEN** the system SHALL submit a `PUT /news/:id` request with body `{ "status": "draft", "publishedAt": null }`
- **AND** update or remove the card after success

#### Scenario: Unpublished article can be published
- **WHEN** the admin clicks the publish action on an unpublished article
- **THEN** the system SHALL submit a `PUT /news/:id` request with body `{ "status": "published", "publishedAt": <current ISO string> }`
- **AND** update or remove the card after success

#### Scenario: Admin can edit article
- **WHEN** the admin clicks the "Editar" action on any article card
- **THEN** the system SHALL navigate to `/admin/news/edit/:id`
- **AND** the browser URL SHALL reflect the article ID

#### Scenario: Action failure is handled
- **WHEN** an article action request fails
- **THEN** the system SHALL display an error message and keep the article visible

## ADDED Requirements

### Requirement: Admin news card supports edit action

The `AdminNewsCard` component SHALL accept an "Editar" action in its `actions` array, rendered as a button.

#### Scenario: Edit button is rendered
- **WHEN** the `actions` array includes an action with label "Editar"
- **THEN** the `AdminNewsCard` SHALL render a button with that label
- **AND** clicking it SHALL trigger the associated `onClick` handler
