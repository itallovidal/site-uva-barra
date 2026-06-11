## ADDED Requirements

### Requirement: Create news API client

The system SHALL provide a centralized API function `createNews` in `src/api/news/create-news.ts` that creates a news article via `POST /news`.

#### Scenario: Create news function exists
- **WHEN** any page or component needs to create a news article
- **THEN** it SHALL call `createNews(data)` from `src/api/news/create-news.ts`
- **AND** the function SHALL accept a typed DTO matching `CreateNewsDTO`

#### Scenario: Create news function sends authenticated request
- **WHEN** `createNews` is called
- **THEN** it SHALL read the auth token from `localStorage`
- **AND** it SHALL send a `POST` request to `/news` with the token in the `Authorization` header
- **AND** it SHALL include `Content-Type: application/json`

#### Scenario: Create news function handles errors
- **WHEN** the API responds with a non-2xx status
- **THEN** the function SHALL throw an error with the message "Falha ao criar notícia"
- **AND** it SHALL validate that the response contains `data.id` before returning

### Requirement: Update news API client

The system SHALL provide a centralized API function `updateNews` in `src/api/news/update-news.ts` that updates a news article via `PUT /news/:id`.

#### Scenario: Update news function exists
- **WHEN** any page or component needs to update a news article
- **THEN** it SHALL call `updateNews(id, data)` from `src/api/news/update-news.ts`
- **AND** the function SHALL accept an `id: string` and a typed DTO matching `CreateNewsDTO`

#### Scenario: Update news function sends authenticated request
- **WHEN** `updateNews` is called
- **THEN** it SHALL read the auth token from `localStorage`
- **AND** it SHALL send a `PUT` request to `/news/:id` with the token in the `Authorization` header
- **AND** it SHALL include `Content-Type: application/json`

#### Scenario: Update news function handles errors
- **WHEN** the API responds with a non-2xx status
- **THEN** the function SHALL throw an error with the message "Falha ao atualizar notícia"
- **AND** it SHALL validate that the response contains `data` before returning

### Requirement: Refactor existing inline creation

The system SHALL remove the inline `fetch` call from `src/pages/admin/news-create-page.tsx` and replace it with the centralized `createNews` function.

#### Scenario: Create page uses API client
- **WHEN** the `NewsCreatePage` handles form submission
- **THEN** it SHALL call `createNews(data)` instead of an inline `fetch`
- **AND** it SHALL redirect to `/admin/news?status=unpublished` on success

#### Scenario: Create page no longer contains API logic
- **WHEN** inspecting `src/pages/admin/news-create-page.tsx`
- **THEN** there SHALL be no `fetch` call to `POST /news`
- **AND** there SHALL be no `env.VITE_API_BASE_URL` usage in the file
