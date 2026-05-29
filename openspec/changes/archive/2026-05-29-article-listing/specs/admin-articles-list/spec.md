## ADDED Requirements

### Requirement: Admin published articles list page displays live articles

The system SHALL provide an admin page at `/admin/articles/published` that lists already published articles in a card-based layout.

#### Scenario: Articles are loaded
- **WHEN** the admin opens the published articles list page
- **THEN** the system SHALL fetch and display the published articles
- **AND** the page SHALL show the total number of items

#### Scenario: Empty state is shown
- **WHEN** there are no published articles to show
- **THEN** the system SHALL display an empty state message indicating there are no published articles

### Requirement: Admin can perform article actions from the list

The system SHALL allow the admin to preview and unpublish published articles from the list.

#### Scenario: Published article can be unpublished
- **WHEN** the admin clicks the unpublish action on a published article
- **THEN** the system SHALL submit the unpublish action for that article
- **AND** update or remove the card after success

#### Scenario: Unrelated statuses are excluded
- **WHEN** an article is not published
- **THEN** the system SHALL not include it in the published articles list

#### Scenario: Action failure is handled
- **WHEN** an article action request fails
- **THEN** the system SHALL display an error message and keep the article visible
