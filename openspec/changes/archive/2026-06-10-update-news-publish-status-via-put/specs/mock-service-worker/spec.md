## MODIFIED Requirements

### Requirement: PUT /news/:id mock handler

The mock handler for `PUT /news/:id` SHALL accept `status` and `publishedAt` in the request body and reflect them in the response.

#### Scenario: Updates status and publishedAt

- **WHEN** an authenticated `PUT /news/:id` request is made with body `{ "status": "draft", "publishedAt": null }`
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ status: 200, data: <updated News> }`
- **AND** the returned news object SHALL have `status: "draft"` and `publishedAt: null`

#### Scenario: Publishes news via PUT

- **WHEN** an authenticated `PUT /news/:id` request is made with body `{ "status": "published", "publishedAt": "2026-06-10T12:00:00.000Z" }`
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ status: 200, data: <updated News> }`
- **AND** the returned news object SHALL have `status: "published"` and the provided `publishedAt`

## REMOVED Requirements

### Requirement: POST /api/news/:id/publish mock handler

**Reason**: Publication is consolidated into `PUT /news/:id`.

**Migration**: Use `PUT /news/:id` with `{ status: "published", publishedAt: "<ISO>" }`.

### Requirement: POST /api/news/:id/unpublish mock handler

**Reason**: Unpublication is consolidated into `PUT /news/:id`.

**Migration**: Use `PUT /news/:id` with `{ status: "draft", publishedAt: null }`.
