## MODIFIED Requirements

### Requirement: Mock handler paths match real API

The mock handler URL patterns SHALL match the real backend API paths exactly. All mock handlers MUST use the same HTTP methods and URL paths as the real backend.

#### Scenario: Registration paths use /registration prefix

- **WHEN** a registration-related mock request is made
- **THEN** the system SHALL use paths under `/registration/` (not `/api/collaborators/`)
- **AND** `POST /registration/` SHALL handle public registration requests
- **AND** `GET /registration/requests` SHALL handle listing registration requests with `status`, `page`, `perPage` query params
- **AND** `POST /registration/:id/approve` SHALL handle approving a registration request (authenticated)
- **AND** `POST /registration/:id/reject` SHALL handle rejecting a registration request (authenticated)

#### Scenario: Search news uses GET method

- **WHEN** a news search mock request is made
- **THEN** the system SHALL use `GET /news/search?q=...&order=...&page=...&perPage=...` (not `POST /news/search`)

#### Scenario: Login mock accepts correct credentials

- **WHEN** a `POST /user/login` request is made with body `{ "email": "admin@email.com", "password": "admin123" }`
- **THEN** the system SHALL respond with HTTP 200 and a valid login response

#### Scenario: Login mock rejects wrong credentials

- **WHEN** a `POST /user/login` request is made with incorrect credentials
- **THEN** the system SHALL respond with HTTP 401 and `{ "status": 401, "data": null, "error": { "message": "Credenciais inválidas", "code": "INVALID_CREDENTIALS" } }`

### Requirement: GET /news supports status filter

The `GET /news` mock handler SHALL support a `status` query parameter for filtering news by publication status.

#### Scenario: Filter by published status

- **WHEN** a `GET /news?status=published` request is made
- **THEN** the system SHALL return only news items with `status: "published"`

#### Scenario: Filter by unpublished status

- **WHEN** a `GET /news?status=unpublished` request is made (authenticated)
- **THEN** the system SHALL return news items with status `draft` or `review`

#### Scenario: No status filter returns all

- **WHEN** a `GET /news` request is made without a `status` parameter
- **THEN** the system SHALL return all news items (default behavior)

### Requirement: GET /registration/requests supports filtering and pagination

The `GET /registration/requests` mock handler SHALL support `status`, `page`, and `perPage` query parameters.

#### Scenario: Filter by PENDING status

- **WHEN** a `GET /registration/requests?status=PENDING` request is made
- **THEN** the system SHALL return only registration requests with `status: "pending"`

#### Scenario: Pagination support

- **WHEN** a `GET /registration/requests?status=PENDING&page=1&perPage=10` request is made
- **THEN** the system SHALL return paginated results with `meta: { page, perPage, total, totalPages }`

### Requirement: POST /registration/:id/reject mock handler exists

The system SHALL provide a mock handler for `POST /registration/:id/reject` that accepts an optional `reason` body.

#### Scenario: Reject with reason

- **WHEN** an authenticated `POST /registration/:id/reject` request is made with body `{ "reason": "Perfil não atende aos requisitos" }`
- **THEN** the system SHALL remove the request from pending and respond with `{ "status": 200, "data": { "success": true } }`

#### Scenario: Reject without reason

- **WHEN** an authenticated `POST /registration/:id/reject` request is made without a body
- **THEN** the system SHALL remove the request from pending and respond with `{ "status": 200, "data": { "success": true } }`

#### Scenario: Reject non-existent request

- **WHEN** an authenticated `POST /registration/nonexistent/reject` request is made
- **THEN** the system SHALL respond with HTTP 404 and `{ "status": 404, "error": { "message": "Solicitação não encontrada", "code": "NOT_FOUND" } }`

#### Scenario: Reject without authentication

- **WHEN** an unauthenticated `POST /registration/:id/reject` request is made
- **THEN** the system SHALL respond with HTTP 401 and `{ "status": 401, "error": { "message": "Não autorizado", "code": "UNAUTHORIZED" } }`

### Requirement: POST /registration/ mock handler exists

The system SHALL provide a mock handler for `POST /registration/` that allows public (unauthenticated) user registration requests.

#### Scenario: Successful registration request

- **WHEN** a `POST /registration/` request is made with body `{ "name": "João Silva", "email": "joao@example.com", "password": "123456", "profession": "desenvolvedor", "bio": "Backend developer" }`
- **THEN** the system SHALL add the request to the pending list and respond with HTTP 201 and `{ "status": 201, "data": { "id": "<uuid>" } }`

#### Scenario: Duplicate email registration

- **WHEN** a `POST /registration/` request is made with an email that already exists
- **THEN** the system SHALL respond with HTTP 409 and `{ "status": 409, "error": { "message": "Email já cadastrado", "code": "EMAIL_ALREADY_EXISTS" } }`

### Requirement: GET /news/search validates required query param

The `GET /news/search` mock handler SHALL return a validation error when called without the `q` query parameter.

#### Scenario: Search without query param

- **WHEN** a `GET /news/search` request is made without a `q` parameter
- **THEN** the system SHALL respond with HTTP 400 and `{ "status": 400, "error": { "message": "Parâmetro de busca é obrigatório", "code": "VALIDATION_ERROR" } }`

#### Scenario: Search with query param

- **WHEN** a `GET /news/search?q=uva` request is made
- **THEN** the system SHALL respond with HTTP 200 and `{ "status": 200, "data": NewsPreviewDTO[], "meta": { page, perPage, total, totalPages } }`

#### Scenario: Search with order param

- **WHEN** a `GET /news/search?q=semana-de&order=oldest` request is made
- **THEN** the system SHALL return results sorted by oldest first

### Requirement: GET /categories returns all categories from state

The `GET /categories` mock handler SHALL return all categories from the mutable categories state array, not a single fixture.

#### Scenario: Returns all categories

- **WHEN** a `GET /categories` request is made
- **THEN** the system SHALL respond with HTTP 200 and `{ "status": 200, "data": Category[] }` where the array contains all categories from the shared state