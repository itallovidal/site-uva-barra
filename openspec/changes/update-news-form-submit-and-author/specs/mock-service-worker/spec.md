## MODIFIED Requirements

### Requirement: GET /api/news/latest mock handler

The system SHALL return a `ResponsePayload` wrapping an array of `NewsPreviewDTO` objects from the `/api/news/latest` endpoint.

#### Scenario: Returns ResponsePayload with NewsPreviewDTO array

- **WHEN** a `GET /api/news/latest` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "status": 200, "data": [ ... NewsPreviewDTO[] ] }`
- **AND** each `NewsPreviewDTO` SHALL contain fields: `id`, `title`, `summary`, `coverImageUrl`, `category`, `tags` (string[]), `featured`, `readingTime`, `publishedAt`, `author`

### Requirement: Mock fixture data uses author instead of authorName

The mock fixtures in `src/mocks/news/news-fixtures.ts` and `src/mocks/news/news-state.ts` SHALL use `author` instead of `authorName` wherever the field represents a DTO field.

#### Scenario: latestNewsExample uses author

- **WHEN** `latestNewsExample` fixtures are created
- **THEN** each item SHALL have `author` field instead of `authorName`

#### Scenario: pendingNews uses author

- **WHEN** `pendingNews` state items are created
- **THEN** each item SHALL have `author` field instead of `authorName`
