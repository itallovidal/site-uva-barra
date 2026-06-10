## MODIFIED Requirements

### Requirement: Admin published articles list page displays live articles

The system SHALL provide an admin page at `/admin/news` that lists articles in a card-based layout, supporting both published and unpublished articles via a status filter.

#### Scenario: Articles are loaded
- **WHEN** the admin opens the news listing page
- **THEN** the system SHALL fetch and display articles according to the selected status filter
- **AND** the page SHALL show the total number of items
- **AND** the page title SHALL be "Listagem de Notícias"

#### Scenario: Empty state is shown
- **WHEN** there are no articles to show for the selected filter
- **THEN** the system SHALL display an empty state message indicating there are no articles

### Requirement: Admin can perform article actions from the list

The system SHALL allow the admin to preview and unpublish articles from the list.

#### Scenario: No author hides author display
- **WHEN** an article card has a falsy `author` field
- **THEN** the `AdminNewsCard` SHALL show only `categoryName` without the author separator

#### Scenario: Published article can be unpublished
- **WHEN** the admin clicks the unpublish action on a published article
- **THEN** the system SHALL submit a `PUT /news/:id` request with body `{ "status": "draft", "publishedAt": null }`
- **AND** update or remove the card after success

#### Scenario: Action failure is handled
- **WHEN** an article action request fails
- **THEN** the system SHALL display an error message and keep the article visible

## ADDED Requirements

### Requirement: Preview modal renders full article with scroll

The system SHALL display a preview modal when the admin clicks "Pré-Visualizar" on an article card, showing the full article content as it would appear on the detail page.

#### Scenario: Modal opens with article preview
- **WHEN** the admin clicks "Pré-Visualizar" on any article card
- **THEN** a modal SHALL open showing the article rendered via `NewsArticleRenderer`
- **AND** the modal body SHALL have a maximum height of 80vh with vertical scrolling
- **AND** the modal header and footer SHALL remain fixed while content scrolls

#### Scenario: Modal shows author conditionally
- **WHEN** the previewed article has a truthy `author` field
- **THEN** the `NewsArticleRenderer` SHALL display "Escrito por: {author}"
- **WHEN** the `author` field is falsy
- **THEN** the author line SHALL not be shown

#### Scenario: Modal content matches detail page styling
- **WHEN** the modal renders the article
- **THEN** the visual layout and styles SHALL match the public `NewsDetailPage` rendering
