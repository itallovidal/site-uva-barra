## MODIFIED Requirements

### Requirement: Admin can perform article actions from the list

The system SHALL allow the admin to preview and unpublish articles from the list. The unpublish action SHALL use `PUT /news/:id`.

#### Scenario: Published article can be unpublished

- **WHEN** the admin clicks the unpublish action on a published article
- **THEN** the system SHALL submit a `PUT /news/:id` request with body `{ "status": "draft", "publishedAt": null }`
- **AND** update or remove the card after success

#### Scenario: No author hides author display

- **WHEN** an article card has a falsy `author` field
- **THEN** the `AdminNewsCard` SHALL show only `categoryName` without the author separator

#### Scenario: Action failure is handled

- **WHEN** an article action request fails
- **THEN** the system SHALL display an error message and keep the article visible
