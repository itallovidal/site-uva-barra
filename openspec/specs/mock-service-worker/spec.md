## Purpose

Mock service worker setup and mock API handlers for development.
## Requirements
### Requirement: Mock Service Worker initialized
The application SHALL initialize the MSW service worker in development mode before rendering the React tree. The worker MUST intercept HTTP requests made by the application.

#### Scenario: Worker starts in development
- **WHEN** the application runs in development mode (not production)
- **THEN** the MSW worker SHALL start and intercept HTTP requests before React renders

#### Scenario: Worker does not start in production
- **WHEN** the application runs in production mode
- **THEN** the MSW worker SHALL NOT be started

### Requirement: GET /api/health mock handler
The system SHALL provide a mock handler for `GET /api/health` that returns a successful response with status information.

#### Scenario: Health check returns ok
- **WHEN** a `GET /api/health` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": "ok" }`

#### Scenario: Health check response is intercepted
- **WHEN** the home page component fetches `/api/health`
- **THEN** the response SHALL come from the MSW mock handler, not from a real server

### Requirement: Health status displayed on home page
The home page SHALL display the health check result to confirm MSW is working.

#### Scenario: Health status visible
- **WHEN** the home page loads and the health check succeeds
- **THEN** the page SHALL display a message indicating the API is responding, such as "API: ok"

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

