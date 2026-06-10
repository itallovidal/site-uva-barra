## MODIFIED Requirements

### Requirement: Update news documented

The documentation SHALL cover the `PUT /news/:id` endpoint as accepting partial fields including `status` and `publishedAt`.

#### Scenario: Update news with status and publishedAt

- **WHEN** reading the News section
- **THEN** the endpoint `PUT /news/:id` SHALL be documented as authenticated with partial body fields including `status` (`draft` | `published` | `review` | `archived`) and `publishedAt` (ISO string or `null`)
- **AND** response SHALL be `{ status: 200, data: News }`

## REMOVED Requirements

### Requirement: Publish/unpublish endpoints documented

**Reason**: Publication and unpublication are consolidated into `PUT /news/:id`.

**Migration**: Use `PUT /news/:id` with `{ status: "published", publishedAt: "<ISO>" }` to publish and `{ status: "draft", publishedAt: null }` to unpublish.
