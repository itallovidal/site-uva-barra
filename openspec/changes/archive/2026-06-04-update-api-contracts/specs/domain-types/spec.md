## REMOVED Requirements

### Requirement: Domain entities and DTOs defined — Category entity shape (description)

**Reason**: Backend `Category` no longer has a `description` field — replaced by `tags`.

**Migration**: Remove `description` from `Category` interface; add `tags: string[]`.

### Requirement: NewsRequestDTO

**Reason**: Replaced by `CreateNewsDTO` with updated field names.

**Migration**: Replace all references `NewsRequestDTO` → `CreateNewsDTO`; rename `categoryId` → `category`, `tagIds` → `tags`.

### Requirement: UserRequestDTO

**Reason**: Replaced by `CreateUserDTO` matching backend contract.

**Migration**: Replace all references `UserRequestDTO` → `CreateUserDTO`.

## ADDED Requirements

### Requirement: TokenPayloadDTO

The system SHALL provide a `TokenPayloadDTO` interface in `src/domain/entities.ts` containing authentication token claims.

#### Scenario: Token payload shape

- **WHEN** a `TokenPayloadDTO` is created
- **THEN** it SHALL have fields: `sub` (string), `email` (string), `role` (string)

### Requirement: CreateCategoryRequestDTO

The system SHALL provide a `CreateCategoryRequestDTO` interface for creating categories.

#### Scenario: Create category payload shape

- **WHEN** a `CreateCategoryRequestDTO` is created
- **THEN** it SHALL have fields: `name` (string), `tags` (optional, string[])

### Requirement: UpdateCategoryRequestDTO

The system SHALL provide an `UpdateCategoryRequestDTO` interface for updating categories.

#### Scenario: Update category payload shape

- **WHEN** an `UpdateCategoryRequestDTO` is created
- **THEN** it SHALL have fields: `name` (string), `tags` (string[])

### Requirement: CreateNewsDTO

The system SHALL provide a `CreateNewsDTO` interface for creating news articles, replacing `NewsRequestDTO`.

#### Scenario: Create news payload shape

- **WHEN** a `CreateNewsDTO` is created
- **THEN** it SHALL have fields: `title`, `summary`, `content` (strings), `coverImageUrl` (string), `category` (string), `tags` (string[]), `featured` (boolean), `status` (NewsStatusType), `slug` (optional string), `author` (optional string)

### Requirement: CreateUserDTO

The system SHALL provide a `CreateUserDTO` interface for creating users, replacing `UserRequestDTO`.

#### Scenario: Create user payload shape

- **WHEN** a `CreateUserDTO` is created
- **THEN** it SHALL have fields: `name`, `email`, `password` (strings), `profession` (UserProfessionType), `bio` (optional string | null), `role` (optional UserRoleType)

## MODIFIED Requirements

### Requirement: Domain entities and DTOs defined

The system SHALL define domain entities (`User`, `Category`, `News`) and DTOs in `src/domain/entities.ts`.

#### Scenario: User entity shape

- **WHEN** a `User` object is created
- **THEN** it SHALL have fields: `id`, `name`, `email`, `password`, `avatarUrl` (optional), `role` (UserRole), `profession` (UserProfession), `bio` (optional), `status` (UserStatus), `createdAt` (Date), `updatedAt` (Date)

#### Scenario: News entity shape

- **WHEN** a `News` object is created
- **THEN** it SHALL have fields: `id`, `title`, `slug`, `summary`, `content`, `coverImageUrl` (string), `category` (string), `author` (string), `status` (NewsStatus), `tags` (string[]), `featured` (boolean), `readingTime` (number), `createdAt` (Date), `updatedAt` (Date), `publishedAt` (Date | optional)

#### Scenario: Category entity shape

- **WHEN** a `Category` object is created
- **THEN** it SHALL have fields: `id` (string), `name` (string), `tags` (string[])
- **AND** it SHALL NOT have a `description` field
- **AND** it SHALL NOT have a `createdAt` field

#### Scenario: NewsPreviewDTO shape

- **WHEN** a `NewsPreviewDTO` object is created
- **THEN** it SHALL have fields: `id`, `title`, `summary`, `coverImageUrl` (string), `category` (string), `tags` (string[]), `featured` (boolean), `readingTime` (number), `publishedAt` (Date | null), `authorName` (string)

#### Scenario: UserProfileDTO shape

- **WHEN** a `UserProfileDTO` object is created
- **THEN** it SHALL have fields: `id`, `name`, `avatarUrl` (string | null), `profession` (UserProfession), `bio` (string | null)

#### Scenario: NewsModerationItemDTO shape

- **WHEN** a `NewsModerationItemDTO` object is created
- **THEN** it SHALL have fields: `id`, `title`, `summary`, `content`, `coverImageUrl` (string | null), `categoryName` (string), `authorName` (string), `status` (NewsStatus), `updatedAt` (Date)

#### Scenario: AdminNewsCardDTO shape

- **WHEN** an `AdminNewsCardDTO` object is created
- **THEN** it SHALL have fields: `id`, `title`, `summary`, `content`, `coverImageUrl` (string | null), `categoryName` (string), `authorName` (string), `status` (NewsStatus), `updatedAt` (Date), `publishedAt` (Date | optional)
