## ADDED Requirements

### Requirement: Centralized API fetch functions

The system SHALL provide a set of named functions in `src/api/` that encapsulate all HTTP requests to the REST API. Each public API endpoint SHALL have a corresponding function in a file named after its domain and action.

#### Scenario: getLatestNews fetches latest news

- **WHEN** `getLatestNews()` is called
- **THEN** it SHALL make a `GET` request to `${VITE_API_BASE_URL}/api/news/latest`
- **AND** return a `Promise<ResponsePayload<NewsPreviewDTO[]>>`

#### Scenario: getNewsByCategory fetches news filtered by category

- **WHEN** `getNewsByCategory(category, limit)` is called with a category string and optional limit number
- **THEN** it SHALL make a `GET` request to `${VITE_API_BASE_URL}/api/news?category=<category>&limit=<limit>`
- **AND** return a `Promise<ResponsePayload<NewsPreviewDTO[]>>`

#### Scenario: listAllCategories fetches all categories

- **WHEN** `listAllCategories()` is called
- **THEN** it SHALL make a `GET` request to `${VITE_API_BASE_URL}/api/categories`
- **AND** return a `Promise<ResponsePayload<Category[]>>`

#### Scenario: listAllCollaborators fetches all collaborators

- **WHEN** `listAllCollaborators()` is called
- **THEN** it SHALL make a `GET` request to `${VITE_API_BASE_URL}/api/collaborators`
- **AND** return a `Promise<ResponsePayload<UserProfileDTO[]>>`

### Requirement: Base URL construction

The system SHALL build full request URLs using `env.VITE_API_BASE_URL` as the base, keeping individual functions free from hardcoded base URLs.

#### Scenario: Functions use env base URL

- **WHEN** any `src/api/` function constructs a URL
- **THEN** it SHALL use `${env.VITE_API_BASE_URL}<path>` where `<path>` is the API route relative to the base

### Requirement: Error propagation

Functions in `src/api/` SHALL NOT catch or handle errors — they SHALL propagate exceptions to the caller (the hook or component). The caller is responsible for error handling.

#### Scenario: Network failure propagates

- **WHEN** a `src/api/` function encounters a network error
- **THEN** it SHALL throw the error to the caller
- **AND** the caller SHALL handle it (e.g., with try/catch in the hook)

#### Scenario: Non-OK response throws

- **WHEN** the API returns a non-OK status code
- **THEN** the function SHALL throw an `Error` with a descriptive message (e.g., `'Failed to fetch news'`)
