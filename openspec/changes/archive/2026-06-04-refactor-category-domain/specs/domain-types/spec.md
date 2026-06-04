## MODIFIED Requirements

### Requirement: Domain entities and DTOs defined

The system SHALL define domain entities (`User`, `Category`, `News`) and DTOs (`NewsRequestDTO`, `UserRequestDTO`, `NewsPreviewDTO`, `UserProfileDTO`) in `src/domain/entities.ts`.

#### Scenario: User entity shape

- **WHEN** a `User` object is created
- **THEN** it SHALL have fields: `id`, `name`, `email`, `password`, `avatarUrl` (optional), `role` (UserRole), `profession` (UserProfession), `bio` (optional), `status` (UserStatus), `createdAt` (Date), `updatedAt` (Date)

#### Scenario: News entity shape

- **WHEN** a `News` object is created
- **THEN** it SHALL have fields: `id`, `title`, `slug`, `summary`, `content`, `coverImageUrl` (optional), `categoryId`, `authorId`, `status` (NewsStatus), `tags` (string[]), `featured` (boolean), `readingTime` (number | null), `createdAt` (Date), `updatedAt` (Date), `publishedAt` (Date | optional)

#### Scenario: Category entity shape

- **WHEN** a `Category` object is created
- **THEN** it SHALL have fields: `id`, `name`, `createdAt` (Date)
- **AND** it SHALL NOT have a `description` field

#### Scenario: NewsRequestDTO shape

- **WHEN** a `NewsRequestDTO` object is created
- **THEN** it SHALL have fields: `title`, `summary`, `content`, `categoryId`, `tagIds` (string[]), `coverImageUrl` (optional), `status` (optional, NewsStatus.DRAFT | NewsStatus.REVIEW), `featured` (optional, boolean), `readingTime` (optional, number | null)

#### Scenario: UserRequestDTO shape

- **WHEN** a `UserRequestDTO` object is created
- **THEN** it SHALL have fields: `name`, `email`, `password`, `profession` (UserProfession), `role` (optional, UserRole), `bio` (optional, string | null)

#### Scenario: NewsPreviewDTO shape

- **WHEN** a `NewsPreviewDTO` object is created
- **THEN** it SHALL have fields: `id`, `title`, `summary`, `coverImageUrl` (string | null), `categoryName`, `tags` (Array<{id, name, slug}>), `featured` (boolean), `readingTime` (number | null), `publishedAt` (Date | null), `authorName`

#### Scenario: UserProfileDTO shape

- **WHEN** a `UserProfileDTO` object is created
- **THEN** it SHALL have fields: `id`, `name`, `avatarUrl` (string | null), `profession` (UserProfession), `bio` (string | null)
