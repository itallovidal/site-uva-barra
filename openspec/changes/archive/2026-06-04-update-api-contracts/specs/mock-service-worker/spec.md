## MODIFIED Requirements

### Requirement: GET /api/health mock handler

The system SHALL provide a mock handler for `GET /api/health` that returns a `ResponsePayload` with status information.

#### Scenario: Health check returns ok

- **WHEN** a `GET /api/health` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": { "status": "ok" } }`

### Requirement: GET /api/news/latest mock handler

The system SHALL return a `ResponsePayload` wrapping an array of `NewsPreviewDTO` objects from the `/api/news/latest` endpoint.

#### Scenario: Returns ResponsePayload with NewsPreviewDTO array

- **WHEN** a `GET /api/news/latest` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": [ ... NewsPreviewDTO[] ] }`
- **AND** each `NewsPreviewDTO` SHALL contain fields: `id`, `title`, `summary`, `coverImageUrl`, `category`, `tags` (string[]), `featured`, `readingTime`, `publishedAt`, `authorName`

### Requirement: GET /api/news mock handler

The system SHALL return a `ResponsePayload` wrapping an array of `NewsPreviewDTO` objects from the `/api/news` endpoint, filterable by category.

#### Scenario: Returns filtered ResponsePayload

- **WHEN** a `GET /api/news?category=Tecnologia` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": [ ... filtered NewsPreviewDTO[] ] }`

### Requirement: GET /api/collaborators mock handler

The system SHALL return a `ResponsePayload` wrapping an array of `UserProfileDTO` objects from the `/api/collaborators` endpoint.

#### Scenario: Returns ResponsePayload with UserProfileDTO array

- **WHEN** a `GET /api/collaborators` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": [ ... UserProfileDTO[] ] }`

### Requirement: GET /api/categories mock handler

The system SHALL return a `ResponsePayload` wrapping an array of `Category` objects from the `/api/categories` endpoint.

#### Scenario: Returns ResponsePayload with Category array

- **WHEN** a `GET /api/categories` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": [ ... Category[] ] }`

### Requirement: POST /api/news mock handler

The system SHALL accept a `CreateNewsDTO` body and return a `ResponsePayload` with the created news ID.

#### Scenario: Creates news and returns ResponsePayload

- **WHEN** a `POST /api/news` request is made with a valid `CreateNewsDTO` body
- **THEN** the system SHALL respond with HTTP 201 and JSON body `{ "status": 201, "data": { "id": "<uuid>" } }`

### Requirement: POST /api/news/:id/publish mock handler

The system SHALL return a `ResponsePayload` confirming publication.

#### Scenario: Publishes news

- **WHEN** a `POST /api/news/:id/publish` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": { "success": true } }`

### Requirement: POST /api/news/:id/unpublish mock handler

The system SHALL return a `ResponsePayload` confirming unpublish.

#### Scenario: Unpublishes news

- **WHEN** a `POST /api/news/:id/unpublish` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": { "success": true } }`

### Requirement: POST /api/news/:id/request-review mock handler

The system SHALL return a `ResponsePayload` confirming review request.

#### Scenario: Requests review

- **WHEN** a `POST /api/news/:id/request-review` request is made with a valid comment
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": { "success": true } }`

### Requirement: POST /api/collaborators/:id/approve mock handler

The system SHALL return a `ResponsePayload` confirming approval.

#### Scenario: Approves collaborator

- **WHEN** a `POST /api/collaborators/:id/approve` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": { "success": true } }`

### Requirement: DELETE /api/collaborators/:id mock handler

The system SHALL return a `ResponsePayload` confirming deletion.

#### Scenario: Deletes collaborator request

- **WHEN** a `DELETE /api/collaborators/:id` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": { "success": true } }`

### Requirement: GET /api/collaborators/requests mock handler

The system SHALL return a `ResponsePayload` wrapping an array of pending collaborator `User` objects.

#### Scenario: Returns pending requests

- **WHEN** a `GET /api/collaborators/requests` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": [ ... User[] ] }`
