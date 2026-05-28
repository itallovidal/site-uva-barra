## ADDED Requirements

### Requirement: TeamMemberCard component

The system SHALL provide a `TeamMemberCard` component that displays a single team member with a circular photo, name, and role description.

#### Scenario: Card renders with all fields

- **WHEN** the card receives a team member with photo, name, and role
- **THEN** the card SHALL display a circular photo (`rounded-full`)
- **AND** the card SHALL display the member's full name in bold
- **AND** the card SHALL display the member's role description text

#### Scenario: Card handles missing photo

- **WHEN** the photo URL is empty or null
- **THEN** the card SHALL display a placeholder with the member's initials

### Requirement: TeamSection component

The system SHALL provide a `TeamSection` component that receives a category name and a list of team members, rendering a category title with red vertical bar accent followed by `TeamMemberCard` components.

#### Scenario: Section renders with category title and red bar

- **WHEN** the `TeamSection` renders with category "Redação"
- **THEN** the section SHALL display a red vertical bar (`bg-red-600`, `rounded-full`, `h-8`, `w-1.5`) next to the "Redação" heading
- **AND** the section SHALL render one `TeamMemberCard` per team member in the list

#### Scenario: Section with empty list

- **WHEN** the `TeamSection` receives an empty team member list
- **THEN** the section SHALL render the category title with red bar
- **AND** the section SHALL display a "Nenhum membro nesta categoria" message

### Requirement: Team data source

The system SHALL store team member data in a TypeScript file (`src/data/team-members.ts`) as a typed array, grouped by category.

#### Scenario: Data file exports typed array

- **WHEN** the data file is imported
- **THEN** it SHALL export a typed array of team members
- **AND** each member SHALL have: id, name, role, photoUrl (optional), category
- **AND** categories SHALL include at least: "Redação", "Criação", "Desenvolvimento"
