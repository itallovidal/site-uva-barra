## MODIFIED Requirements

### Requirement: CreateNewsDTO author required

The `CreateNewsDTO.author` field SHALL be required (was optional).

#### Scenario: Author is required in create payload

- **WHEN** a `CreateNewsDTO` is created
- **THEN** `author` SHALL be a required `string` field (not optional)

### Requirement: NewsPreviewDTO uses author instead of authorName

The `NewsPreviewDTO` SHALL use `author` instead of `authorName`.

#### Scenario: NewsPreviewDTO shape updated

- **WHEN** a `NewsPreviewDTO` object is created
- **THEN** it SHALL have fields: `id`, `title`, `summary`, `coverImageUrl` (string), `category` (string), `tags` (string[]), `featured` (boolean), `readingTime` (number), `publishedAt` (Date | null), `author` (string)

### Requirement: NewsModerationItemDTO uses author instead of authorName

The `NewsModerationItemDTO` SHALL use `author` instead of `authorName`.

#### Scenario: NewsModerationItemDTO shape updated

- **WHEN** a `NewsModerationItemDTO` object is created
- **THEN** it SHALL have fields: `id`, `title`, `summary`, `content`, `coverImageUrl` (string | null), `categoryName` (string), `author` (string), `status` (NewsStatus), `updatedAt` (Date)

### Requirement: AdminNewsCardDTO uses author instead of authorName

The `AdminNewsCardDTO` SHALL use `author` instead of `authorName`.

#### Scenario: AdminNewsCardDTO shape updated

- **WHEN** an `AdminNewsCardDTO` object is created
- **THEN** it SHALL have fields: `id`, `title`, `summary`, `content`, `coverImageUrl` (string | null), `categoryName` (string), `author` (string), `status` (NewsStatus), `updatedAt` (Date), `publishedAt` (Date | optional)
