## Purpose

Centralized API endpoint reference document that describes all backend endpoints, their methods, authentication requirements, request/response shapes, and example payloads.

## Requirements

### Requirement: API endpoint documentation file exists

The project SHALL contain a file at `docs/api-endpoints.md` that documents every backend API endpoint grouped by resource (User, Registration, News, Categories).

#### Scenario: Documentation file is present

- **WHEN** a developer navigates to `docs/api-endpoints.md`
- **THEN** the file SHALL exist and contain sections for User, Registration, News, and Categories endpoints

### Requirement: User endpoints documented

The documentation SHALL cover all User endpoints with method, path, auth requirement, request body schema, and response shape.

#### Scenario: Login endpoint documented

- **WHEN** reading the User section
- **THEN** the endpoint `POST /user/login` SHALL be documented with fields `email` (string) and `password` (string), and response shape `{ status, data: { accessToken, user } }`

#### Scenario: Create user endpoint documented

- **WHEN** reading the User section
- **THEN** the endpoint `POST /user/` SHALL be documented as authenticated, with request fields `name`, `email`, `password`, `profession`, `bio`, `role` and response `{ status: 201, data: CreateUserResult }`

#### Scenario: Get user by ID documented

- **WHEN** reading the User section
- **THEN** the endpoint `GET /user/:id` SHALL be documented as authenticated with response `{ status: 200, data: UserProfileDTO }`

#### Scenario: List users endpoint documented

- **WHEN** reading the User section
- **THEN** the endpoint `GET /user/list` SHALL be documented as authenticated with response `{ status: 200, data: UserProfileDTO[] }`

#### Scenario: Get user by email documented

- **WHEN** reading the User section
- **THEN** the endpoint `GET /user/email/:email` SHALL be documented as authenticated with response `{ status: 200, data: UserProfileDTO }`

#### Scenario: Update user endpoint documented

- **WHEN** reading the User section
- **THEN** the endpoint `PUT /user/:id` SHALL be documented as authenticated with partial body fields and response `{ status: 200, data: UserProfileDTO }`

#### Scenario: Delete user endpoint documented

- **WHEN** reading the User section
- **THEN** the endpoint `DELETE /user/:id` SHALL be documented as authenticated with response `{ status: 204 }` or `{ status: 200, data: { success: true } }`

### Requirement: Registration endpoints documented

The documentation SHALL cover all Registration endpoints.

#### Scenario: Registration request endpoint documented

- **WHEN** reading the Registration section
- **THEN** the endpoint `POST /registration/` SHALL be documented as public (no auth) with request fields `name`, `email`, `password`, `profession`, `bio` and response `{ status: 201, data: { id } }`

#### Scenario: List registration requests documented

- **WHEN** reading the Registration section
- **THEN** the endpoint `GET /registration/requests?status=PENDING&page=1&perPage=10` SHALL be documented as authenticated with query params `status`, `page`, `perPage` and response `{ status: 200, data: RegistrationRequest[], meta: { page, perPage, total, totalPages } }`

#### Scenario: Approve registration documented

- **WHEN** reading the Registration section
- **THEN** the endpoint `POST /registration/:id/approve` SHALL be documented as authenticated with response `{ status: 200, data: { success: true } }`

#### Scenario: Reject registration documented

- **WHEN** reading the Registration section
- **THEN** the endpoint `POST /registration/:id/reject` SHALL be documented as authenticated with optional body `{ reason: string }` and response `{ status: 200, data: { success: true } }`

### Requirement: News endpoints documented

The documentation SHALL cover all News endpoints.

#### Scenario: Create news endpoint documented

- **WHEN** reading the News section
- **THEN** the endpoint `POST /news` SHALL be documented as authenticated with CreateNewsDTO body and response `{ status: 201, data: News }`

#### Scenario: Get news by ID documented

- **WHEN** reading the News section
- **THEN** the endpoint `GET /news/:id` SHALL be documented as public with response `{ status: 200, data: News }`

#### Scenario: Update news documented

- **WHEN** reading the News section
- **THEN** the endpoint `PUT /news/:id` SHALL be documented as authenticated with partial body fields including `status` (`draft` | `published` | `review` | `archived`) and `publishedAt` (ISO string or `null`)
- **AND** response SHALL be `{ status: 200, data: News }`

#### Scenario: Delete news documented

- **WHEN** reading the News section
- **THEN** the endpoint `DELETE /news/:id` SHALL be documented as authenticated with response `{ status: 204 }`

#### Scenario: List news documented

- **WHEN** reading the News section
- **THEN** the endpoint `GET /news?page=1&perPage=10&status=published` SHALL be documented as public (with optional auth for unpublished) with query params `page`, `perPage`, `status` and response `{ status: 200, data: NewsPreviewDTO[], meta }`

#### Scenario: List news by category documented

- **WHEN** reading the News section
- **THEN** the endpoint `GET /news/category/:category?page=1&perPage=10&status=published` SHALL be documented as public (with optional auth for unpublished) with path param `category`, query params `page`, `perPage`, `status`
- **AND** response `{ status: 200, data: NewsPreviewDTO[], meta }`

#### Scenario: Get news by slug documented

- **WHEN** reading the News section
- **THEN** the endpoint `GET /news/slug/:slug` SHALL be documented as public with response `{ status: 200, data: News }`

#### Scenario: Search news documented

- **WHEN** reading the News section
- **THEN** the endpoint `GET /news/search?q=term&order=oldest&page=1&perPage=10` SHALL be documented as public with required query param `q`, optional `order` (`oldest`|default), `page`, `perPage`
- **AND** response `{ status: 200, data: NewsPreviewDTO[], meta }`
- **AND** missing `q` param SHALL return `{ status: 400, error: { message, code: 'VALIDATION_ERROR' } }`

### Requirement: Category endpoints documented

The documentation SHALL cover all Category endpoints.

#### Scenario: Create category documented

- **WHEN** reading the Categories section
- **THEN** the endpoint `POST /categories` SHALL be documented as authenticated with body `{ name: string, tags?: string[] }` and response `{ status: 201, data: Category }`

#### Scenario: List categories documented

- **WHEN** reading the Categories section
- **THEN** the endpoint `GET /categories` SHALL be documented as public with response `{ status: 200, data: Category[] }`

#### Scenario: Get category by ID documented

- **WHEN** reading the Categories section
- **THEN** the endpoint `GET /categories/:id` SHALL be documented as public with response `{ status: 200, data: Category }`

#### Scenario: Update category documented

- **WHEN** reading the Categories section
- **THEN** the endpoint `PUT /categories/:id` SHALL be documented as authenticated with body `{ name: string, tags: string[] }` and response `{ status: 200, data: Category }`

#### Scenario: Delete category documented

- **WHEN** reading the Categories section
- **THEN** the endpoint `DELETE /categories/:id` SHALL be documented as authenticated with response `{ status: 204 }`
