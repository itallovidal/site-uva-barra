## ADDED Requirements

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
