## ADDED Requirements

### Requirement: GET /api/news/latest mock handler

The system SHALL return an array of `NewsPreviewDTO` objects instead of `NewsHighlight` objects from the `/api/news/latest` endpoint.

#### Scenario: Returns NewsPreviewDTO array
- **WHEN** a `GET /api/news/latest` request is made
- **THEN** the system SHALL respond with HTTP 200 and a JSON array of `NewsPreviewDTO` objects
- **AND** each object SHALL contain fields: `id`, `title`, `summary`, `coverImageUrl`, `categoryName`, `tags`, `featured`, `readingTime`, `publishedAt`, `authorName`

### Requirement: GET /api/news mock handler

The system SHALL return an array of `NewsPreviewDTO` objects instead of `NewsHighlight` objects from the `/api/news` endpoint.

#### Scenario: Returns filtered NewsPreviewDTO array
- **WHEN** a `GET /api/news?category=Tecnologia` request is made
- **THEN** the system SHALL respond with HTTP 200 and a JSON array of `NewsPreviewDTO` objects filtered by category

### Requirement: GET /api/collaborators mock handler

The system SHALL return an array of `UserProfileDTO` objects instead of `TeamMember` objects from the `/api/collaborators` endpoint.

#### Scenario: Returns UserProfileDTO array
- **WHEN** a `GET /api/collaborators` request is made
- **THEN** the system SHALL respond with HTTP 200 and a JSON array of `UserProfileDTO` objects
- **AND** each object SHALL contain fields: `id`, `name`, `avatarUrl`, `profession`, `bio`
