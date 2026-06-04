## MODIFIED Requirements

### Requirement: Mock Service Worker initialized

The application SHALL initialize the MSW service worker in development mode before rendering the React tree. The worker MUST intercept HTTP requests made by the application.

#### Scenario: Worker starts in development
- **WHEN** the application runs in development mode (not production)
- **THEN** the MSW worker SHALL start and intercept HTTP requests before React renders

#### Scenario: Worker does not start in production
- **WHEN** the application runs in production mode
- **THEN** the MSW worker SHALL NOT be started

### Requirement: Mock handlers organized by domain and action

The mock layer SHALL organize handlers under `src/mocks/[dominio]/[acao-endpoint].ts`, and `src/mocks/handlers.ts` SHALL be limited to registering and exporting the composed handler list.

#### Scenario: Handler lives in a domain folder
- **WHEN** a developer adds or updates a mock for a specific endpoint
- **THEN** the handler SHALL live in a domain folder such as `src/mocks/news/` or `src/mocks/user/`
- **AND** the file name SHALL describe the action or endpoint, such as `get-latest-news.ts` or `login.ts`

#### Scenario: Root handlers file is registration-only
- **WHEN** `src/mocks/handlers.ts` is imported by the worker
- **THEN** the file SHALL only compose and export handlers
- **AND** it SHALL NOT contain route implementation logic

#### Scenario: Domain-specific mocks remain isolated
- **WHEN** a handler needs mutable in-memory state
- **THEN** that state SHALL stay next to the handler or within the same domain module
- **AND** unrelated domains SHALL NOT share implementation details through the root registration file

### Requirement: GET /api/health mock handler

The system SHALL provide a mock handler for `GET /api/health` that returns a `ResponsePayload` with status information.

#### Scenario: Health check returns ok
- **WHEN** a `GET /api/health` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": { "status": "ok" } }`

#### Scenario: Health check response is intercepted
- **WHEN** the home page component fetches `/api/health`
- **THEN** the response SHALL come from the MSW mock handler, not from a real server
