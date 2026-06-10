## MODIFIED Requirements

### Requirement: Domain entities and DTOs defined

The system SHALL define domain entities (`User`, `Category`, `News`) and DTOs in `src/domain/entities.ts`.

#### Scenario: NewsModerationItemDTO shape

- **WHEN** a `NewsModerationItemDTO` object is created
- **THEN** it SHALL have fields: `id`, `title`, `summary`, `content`, `coverImageUrl` (string | null), `category` (string), `author` (string), `status` (NewsStatus), `updatedAt` (Date)

#### Scenario: AdminNewsCardDTO shape

- **WHEN** an `AdminNewsCardDTO` object is created
- **THEN** it SHALL have fields: `id`, `title`, `summary`, `content`, `coverImageUrl` (string | null), `category` (string), `author` (string), `status` (NewsStatus), `updatedAt` (Date), `publishedAt` (Date | optional)
