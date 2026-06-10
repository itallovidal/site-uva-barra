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
The system SHALL provide a mock handler for `GET /api/health` that returns a `ResponsePayload` with status information.

#### Scenario: Health check returns ok
- **WHEN** a `GET /api/health` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": { "status": "ok" } }`

#### Scenario: Health check response is intercepted
- **WHEN** the home page component fetches `/api/health`
- **THEN** the response SHALL come from the MSW mock handler, not from a real server

### Requirement: Health status displayed on home page
The home page SHALL display the health check result to confirm MSW is working.

#### Scenario: Health status visible
- **WHEN** the home page loads and the health check succeeds
- **THEN** the page SHALL display a message indicating the API is responding, such as "API: ok"

### Requirement: GET /api/news/latest mock handler

The system SHALL return a `ResponsePayload` wrapping an array of `NewsPreviewDTO` objects from the `/api/news/latest` endpoint.

#### Scenario: Returns ResponsePayload with NewsPreviewDTO array
- **WHEN** a `GET /api/news/latest` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": [ ... NewsPreviewDTO[] ] }`
- **AND** each `NewsPreviewDTO` SHALL contain fields: `id`, `title`, `summary`, `coverImageUrl`, `category`, `tags` (string[]), `featured`, `readingTime`, `publishedAt`, `author`

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

### Requirement: POST /registration/:id/approve mock handler

The system SHALL return a `ResponsePayload` confirming approval of a registration request.

#### Scenario: Approves registration
- **WHEN** an authenticated `POST /registration/:id/approve` request is made
- **THEN** the system SHALL remove the request from pending and respond with HTTP 200 and JSON body `{ "status": 200, "data": { "success": true } }`

#### Scenario: Registration not found
- **WHEN** an authenticated `POST /registration/nonexistent/approve` request is made
- **THEN** the system SHALL respond with HTTP 404 and JSON body `{ "status": 404, "data": null, "error": { "message": "Solicitação não encontrada", "code": "NOT_FOUND" } }`

#### Scenario: Unauthenticated approve
- **WHEN** an unauthenticated `POST /registration/:id/approve` request is made
- **THEN** the system SHALL respond with HTTP 401 and JSON body `{ "status": 401, "data": null, "error": { "message": "Não autorizado", "code": "UNAUTHORIZED" } }`

### Requirement: POST /registration/:id/reject mock handler

The system SHALL return a `ResponsePayload` confirming rejection of a registration request.

#### Scenario: Rejects registration with reason
- **WHEN** an authenticated `POST /registration/:id/reject` request is made with body `{ "reason": "Perfil não atende aos requisitos" }`
- **THEN** the system SHALL remove the request from pending and respond with HTTP 200 and JSON body `{ "status": 200, "data": { "success": true } }`

#### Scenario: Rejects registration without reason
- **WHEN** an authenticated `POST /registration/:id/reject` request is made without a body
- **THEN** the system SHALL remove the request from pending and respond with HTTP 200 and JSON body `{ "status": 200, "data": { "success": true } }`

#### Scenario: Registration not found
- **WHEN** an authenticated `POST /registration/nonexistent/reject` request is made
- **THEN** the system SHALL respond with HTTP 404 and JSON body `{ "status": 404, "data": null, "error": { "message": "Solicitação não encontrada", "code": "NOT_FOUND" } }`

#### Scenario: Unauthenticated reject
- **WHEN** an unauthenticated `POST /registration/:id/reject` request is made
- **THEN** the system SHALL respond with HTTP 401 and JSON body `{ "status": 401, "data": null, "error": { "message": "Não autorizado", "code": "UNAUTHORIZED" } }`

### Requirement: POST /registration/ mock handler

The system SHALL provide a public mock handler for registration requests.

#### Scenario: Successful registration
- **WHEN** a `POST /registration` request is made with body `{ "name": "João Silva", "email": "joao@example.com", "password": "123456", "profession": "desenvolvedor", "bio": "Backend developer" }`
- **THEN** the system SHALL add the request to pending and respond with HTTP 201 and JSON body `{ "status": 201, "data": { "id": "<uuid>" } }`

#### Scenario: Duplicate email
- **WHEN** a `POST /registration` request is made with an email that already exists in pending
- **THEN** the system SHALL respond with HTTP 409 and JSON body `{ "status": 409, "data": null, "error": { "message": "Email já cadastrado", "code": "EMAIL_ALREADY_EXISTS" } }`

### Requirement: GET /registration/requests mock handler

The system SHALL return a `ResponsePayload` wrapping an array of pending registration requests with pagination and filtering.

#### Scenario: Returns pending requests with pagination
- **WHEN** an authenticated `GET /registration/requests?status=PENDING&page=1&perPage=10` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": [ ... User[] ], "meta": { "page": 1, "perPage": 10, "total": 3, "totalPages": 1 } }`

#### Scenario: Unauthenticated request
- **WHEN** an unauthenticated `GET /registration/requests` request is made
- **THEN** the system SHALL respond with HTTP 401 and JSON body `{ "status": 401, "data": null, "error": { "message": "Não autorizado", "code": "UNAUTHORIZED" } }`

### Requirement: GET /news/search uses GET method with validation

The news search mock handler SHALL use `GET /news/search` (not POST) and validate the required `q` query parameter.

#### Scenario: Search with query
- **WHEN** a `GET /news/search?q=uva` request is made
- **THEN** the system SHALL respond with HTTP 200 and matching results sorted by newest first

#### Scenario: Search with oldest order
- **WHEN** a `GET /news/search?q=semana-de&order=oldest` request is made
- **THEN** the system SHALL return results sorted by oldest first

#### Scenario: Missing query parameter
- **WHEN** a `GET /news/search` request is made without a `q` parameter
- **THEN** the system SHALL respond with HTTP 400 and JSON body `{ "status": 400, "data": null, "error": { "message": "Parâmetro de busca é obrigatório", "code": "VALIDATION_ERROR" } }`

### Requirement: GET /news supports status filter

The `GET /news` mock handler SHALL support a `status` query parameter.

#### Scenario: Filter published
- **WHEN** a `GET /news?status=published` request is made
- **THEN** the system SHALL return only news with `publishedAt` set

#### Scenario: Filter unpublished requires auth
- **WHEN** a `GET /news?status=unpublished` request is made without auth
- **THEN** the system SHALL respond with HTTP 401

#### Scenario: Filter unpublished with auth
- **WHEN** an authenticated `GET /news?status=unpublished` request is made
- **THEN** the system SHALL return only news without `publishedAt`

### Requirement: Login mock uses correct credentials

The login mock SHALL accept `admin@email.com` / `admin123` for successful authentication.

#### Scenario: Login with correct credentials
- **WHEN** a `POST /user/login` request is made with `{ "email": "admin@email.com", "password": "admin123" }`
- **THEN** the system SHALL respond with HTTP 200 and `{ "status": 200, "data": { "accessToken": "<jwt>", "user": <UserProfileDTO> } }`

### Requirement: GET /categories returns categories from state

The `GET /categories` handler SHALL return categories from the mutable in-memory array (not a single fixture).

#### Scenario: Returns all categories
- **WHEN** a `GET /categories` request is made
- **THEN** the system SHALL respond with HTTP 200 and `{ "status": 200, "data": [ ... Category[] ] }` containing all categories from state

## ADDED Requirements

### Requirement: POST /api/categories mock handler

The system SHALL provide a mock handler for `POST /api/categories` that validates the request body using the `categorySchema` Zod schema, creates a new category with a generated UUID, and appends it to the mutable categories array.

#### Scenario: Creates category successfully

- **WHEN** a `POST /api/categories` request is made with a valid JSON body `{ "name": "Esportes" }`
- **THEN** the system SHALL respond with HTTP 201 and JSON body `{ "success": true, "id": "<uuid>" }`
- **AND** the new category SHALL be added to the in-memory categories array

#### Scenario: Returns 400 for empty name

- **WHEN** a `POST /api/categories` request is made with an empty name
- **THEN** the system SHALL respond with HTTP 400 and JSON body `{ "error": "Nome é obrigatório" }`

### Requirement: DELETE /api/categories/:id mock handler

The system SHALL provide a mock handler for `DELETE /api/categories/:id` that removes a category by its ID from the mutable categories array.

#### Scenario: Deletes existing category

- **WHEN** a `DELETE /api/categories/cat_tec` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "success": true }`
- **AND** the category SHALL be removed from the in-memory categories array

#### Scenario: Returns 404 for non-existent category

- **WHEN** a `DELETE /api/categories/nonexistent` request is made
- **THEN** the system SHALL respond with HTTP 404 and JSON body `{ "error": "Categoria não encontrada" }`

### Requirement: GET /api/categories uses mutable array

The system SHALL change the `GET /api/categories` handler to return categories from a mutable in-memory array (instead of the static imported mock array), consistent with the collaborator mock pattern.

#### Scenario: Returns all categories

- **WHEN** a `GET /api/categories` request is made
- **THEN** the system SHALL respond with HTTP 200 and a JSON array of `Category` objects
- **AND** the array SHALL reflect any categories added or removed during the session

### Requirement: Mock fixture data uses author instead of authorName

The mock fixtures in `src/mocks/news/news-fixtures.ts` and `src/mocks/news/news-state.ts` SHALL use `author` instead of `authorName` wherever the field represents a DTO field.

#### Scenario: latestNewsExample uses author

- **WHEN** `latestNewsExample` fixtures are created
- **THEN** each item SHALL have `author` field instead of `authorName`

#### Scenario: pendingNews uses author

- **WHEN** `pendingNews` state items are created
- **THEN** each item SHALL have `author` field instead of `authorName`
