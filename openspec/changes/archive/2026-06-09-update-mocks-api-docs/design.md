## Context

The project uses MSW (Mock Service Worker) to simulate API responses during development. The current mocks have several mismatches with the real backend API:

1. **Path mismatches**: Registration endpoints use `/api/collaborators/*` but the real API uses `/registration/*`
2. **Method mismatches**: News search uses `POST` but the real API uses `GET`
3. **Credential mismatches**: Login mock accepts `admin@gmail.com`/`senha123` but the real API expects `admin@email.com`/`admin123`
4. **Missing handlers**: No `POST /registration/` (public registration request), no `POST /registration/:id/reject`
5. **Incomplete filtering**: News listing doesn't support `status` query param; registration requests don't support `status`/`page`/`perPage` params
6. **Fixture inconsistencies**: Categories mock returns single fixture instead of state array; user fixtures don't align with API response shapes

Additionally, there is no centralized API endpoint documentation, making it hard for developers to understand what endpoints exist and how they behave.

## Goals / Non-Goals

**Goals:**
- Align all MSW mock handler paths, methods, and response shapes with the real backend API specification
- Add missing mock handlers for registration request (`POST /registration/`), reject (`POST /registration/:id/reject`), and filtered registration requests (`GET /registration/requests?status=...&page=...&perPage=...`)
- Fix news search handler from `POST` to `GET` with proper query parameters (`q`, `order`, `page`, `perPage`)
- Fix login mock credentials to `admin@email.com`/`admin123`
- Add `status` query param support to news listing handlers
- Create a centralized API endpoint documentation file (`docs/api-endpoints.md`)
- Ensure all mock fixture data consistently follows the domain entity types

**Non-Goals:**
- Changing real API client code (unless paths are wrong)
- Adding authentication middleware/jwt validation to mocks (keep simple Bearer token check)
- Adding new frontend pages or components
- Migrating from MSW to a different mocking solution

## Decisions

### Decision 1: Use `/registration/*` paths instead of `/api/collaborators/*`

The real backend API uses `/registration/` for the registration flow (request, approve, reject) rather than `/api/collaborators/`. We will remap all registration-related mock handlers to the correct paths. The `/user/` endpoints remain unchanged for user CRUD.

**Rationale**: Matches the real API. The `/api/collaborators/*` paths were a placeholder that never matched the backend.

### Decision 2: Fix search news from POST to GET

The mock currently uses `POST /news/search` but the real API (and the existing API client `src/api/news/search-news.ts`) uses `GET /news/search?q=...`. The mock will be updated to `GET` with query params (`q`, `order`, `page`, `perPage`).

**Rationale**: The API client already uses GET. The mock should match.

### Decision 3: Store API docs in `docs/api-endpoints.md`

A single markdown file at `docs/api-endpoints.md` will document all endpoints grouped by resource (User, Registration, News, Categories). Each endpoint will include method, path, auth requirement, request body schema, and response shape.

**Rationale**: Single file is easier to maintain than scattered docs. Markdown is version-controlled and readable.

### Decision 4: Add status/pagination filtering to mocks where the real API supports it

News listing (`GET /news`) will support `status=published|unpublished|review|draft` and registration requests (`GET /registration/requests`) will support `status=PENDING|APPROVED|REJECTED` plus `page`/`perPage`.

**Rationale**: The real API supports these filters; mocks should too for realistic dev testing.

## Risks / Trade-offs

- **[Breaking]** Changing mock paths from `/api/collaborators/*` to `/registration/*` may break any frontend code that directly calls those paths. Mitigation: Check and update all API clients that reference the old paths.
- **[Data consistency]** Updating fixture data (e.g., login credentials) means any saved localStorage tokens or test scenarios will need resetting. Mitigation: Document in the change notes.
- **[Incomplete coverage]** Some endpoints like `GET /news/slug/:slug` or `GET /news/category/:category` may have edge cases not fully tested. Mitigation: The API docs will make these explicit.