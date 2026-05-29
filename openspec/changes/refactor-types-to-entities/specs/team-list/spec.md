## MODIFIED Requirements

### Requirement: Team data source

The system SHALL use `User` entities from `src/domain/entities.ts` instead of a separate `TeamMember` type. The team data SHALL be a `User[]` array with the `profession` field replacing `role`, `bio` replacing the role description text, and `category` derived from `profession`.

#### Scenario: Data file exports User array
- **WHEN** the data file is imported
- **THEN** it SHALL export a typed array of `User` objects
- **AND** each user SHALL have fields from the `User` entity: `id`, `name`, `email`, `password`, `avatarUrl` (optional), `role`, `profession`, `bio` (optional), `status`, `createdAt`, `updatedAt`

### Requirement: TeamSection component uses User entity

The `TeamSection` component SHALL receive `User[]` and group members by profession-based category.

#### Scenario: Section groups by profession
- **WHEN** the `TeamSection` renders with users
- **THEN** it SHALL group users by `profession` into display categories (e.g., designer, redator -> "Criação", "Redação")
- **AND** each group SHALL display the category title with red bar

## REMOVED Requirements

### Requirement: TeamMemberCard with TeamMember type

**Reason**: `TeamMember` type is removed. The card components now use the `User` entity with `profession` and `bio` instead of `role`.

**Migration**: Replace `TeamMember` props with `User` type and update display fields accordingly.

### Requirement: Team data with role string

**Reason**: The `role: string` field is replaced by `profession: UserProfessionType` and `bio: string | null`.

**Migration**: Move role descriptions to `bio` field and use `profession` for the member's function category.
