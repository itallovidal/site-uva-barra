## MODIFIED Requirements

### Requirement: TeamMemberCard component

The `TeamMemberCard` component SHALL accept `UserProfileDTO` instead of `TeamMember`.

#### Scenario: Card renders with all fields
- **WHEN** the card receives a team member with `avatarUrl`, name, and `bio`
- **THEN** the card SHALL display a circular photo (`rounded-full`)
- **AND** the card SHALL display the member's full name in bold
- **AND** the card SHALL display the member's `bio` text

#### Scenario: Card handles missing photo
- **WHEN** the `avatarUrl` is null
- **THEN** the card SHALL display a placeholder with the member's initials

### Requirement: TeamSection component

The `TeamSection` component SHALL receive `UserProfileDTO[]` and group members by profession-based category.

#### Scenario: Section groups by profession
- **WHEN** the `TeamSection` renders with users
- **THEN** it SHALL group users by `profession` into display categories (e.g., designer, redator -> "Criação", "Redação")
- **AND** each group SHALL display the category title with red bar

### Requirement: Team data source

The system SHALL use `UserProfileDTO` from `src/domain/entities.ts` instead of a separate `TeamMember` type. The team data SHALL be a `UserProfileDTO[]` array with the `profession` field replacing `role`, `bio` replacing the role description text.

#### Scenario: Data file exports UserProfileDTO array
- **WHEN** the data file is imported
- **THEN** it SHALL export a typed array of `UserProfileDTO` objects
- **AND** each object SHALL have fields: `id`, `name`, `avatarUrl` (string | null), `profession`, `bio` (string | null)
