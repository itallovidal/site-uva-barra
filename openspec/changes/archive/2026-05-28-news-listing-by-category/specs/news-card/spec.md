## ADDED Requirements

### Requirement: NewsCard renders with horizontal layout
The system SHALL provide a `NewsCard` component that displays a single news article in a horizontal layout with image on the left and metadata on the right.

#### Scenario: Card renders with all fields
- **WHEN** the card receives a valid news article with all fields
- **THEN** it SHALL display the article image on the left side
- **AND** it SHALL display the category badge, title, summary, time ago, and author name in a column on the right
- **AND** the card SHALL be a link to the full article

#### Scenario: Card handles missing image
- **WHEN** the image URL is empty or null
- **THEN** the card SHALL show a placeholder background instead of a broken image

#### Scenario: Card shows relative time
- **WHEN** an article has a `publishedAt` timestamp
- **THEN** the card SHALL display "Há X horas/dias" based on the time difference from now

#### Scenario: Card handles missing author
- **WHEN** the author field is empty or null
- **THEN** the card SHALL omit the author portion from the metadata line
