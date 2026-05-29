## ADDED Requirements

### Requirement: Domain constants defined as const objects

The system SHALL define domain constants as `as const` objects with derived union types in `src/domain/constants.ts`.

#### Scenario: UserRole constant
- **WHEN** `UserRole` is imported
- **THEN** it SHALL contain `COLLABORATOR: 'collaborator'` and `ADMIN: 'admin'`
- **AND** `UserRoleType` SHALL be the union `'collaborator' | 'admin'`

#### Scenario: UserProfession constant
- **WHEN** `UserProfession` is imported
- **THEN** it SHALL contain keys: `DESIGNER`, `REDATOR`, `DESENVOLVEDOR`, `SOCIAL_MEDIA`, `EDITOR_CHEFE`, `OUTRO`
- **AND** `UserProfessionType` SHALL be the union of all values

#### Scenario: NewsStatus constant
- **WHEN** `NewsStatus` is imported
- **THEN** it SHALL contain keys: `DRAFT`, `REVIEW`, `PUBLISHED`, `ARCHIVED`
- **AND** `NewsStatusType` SHALL be the union of all values

#### Scenario: UserStatus constant
- **WHEN** `UserStatus` is imported
- **THEN** it SHALL contain keys: `ACTIVE`, `INACTIVE`, `PENDING`
- **AND** `UserStatusType` SHALL be the union of all values

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
- **THEN** it SHALL have fields: `id`, `name`, `description` (optional), `createdAt` (Date)

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

### Requirement: DTOs use domain constant types

DTO field types SHALL reference the domain constant types (e.g., `UserRoleType`, `UserProfessionType`, `NewsStatusType`), not raw string unions.

#### Scenario: UserRequestDTO uses UserRoleType and UserProfessionType
- **WHEN** `UserRequestDTO.role` is annotated
- **THEN** its type SHALL be `UserRoleType` (not a custom string union)
- **AND** `UserRequestDTO.profession` SHALL be `UserProfessionType`
