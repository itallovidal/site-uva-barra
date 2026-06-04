## ADDED Requirements

### Requirement: Authenticated API client function

The system SHALL provide an `apiAuthClient` helper function that wraps `fetch` with automatic Bearer token injection for mutating requests.

#### Scenario: Token injection on POST request
- **WHEN** `apiAuthClient` is called with method `POST`, `PUT`, `PATCH`, or `DELETE`
- **THEN** the request SHALL include header `Authorization: Bearer <token>` where token is read from `localStorage`
- **AND** the request SHALL include `Content-Type: application/json` header

#### Scenario: Token injection on GET request
- **WHEN** `apiAuthClient` is called with method `GET`
- **THEN** the request SHALL include header `Authorization: Bearer <token>`

#### Scenario: No token available
- **WHEN** `apiAuthClient` is called but no token exists in `localStorage`
- **THEN** the request SHALL proceed without `Authorization` header
- **AND** if the response returns 401, `apiAuthClient` SHALL call `logout()` to clear stale state

#### Scenario: Response shape matches ResponsePayload
- **WHEN** `apiAuthClient` receives a response
- **THEN** it SHALL parse the JSON and return it typed as `ResponsePayload<T>`

### Requirement: Existing hooks use apiAuthClient for mutating endpoints

The system SHALL update hooks and MSW handlers to use `apiAuthClient` for endpoints that require authentication.

#### Scenario: Mutating endpoints use auth client
- **WHEN** a hook calls `POST /api/collaborators/:id/approve`, `DELETE /api/collaborators/:id`, `POST /api/news`, `POST /api/news/:id/publish`, `POST /api/news/:id/unpublish`, `POST /api/news/:id/request-review`, `POST /api/categories`, or `DELETE /api/categories/:id`
- **THEN** the hook SHALL use `apiAuthClient` instead of bare `fetch`
