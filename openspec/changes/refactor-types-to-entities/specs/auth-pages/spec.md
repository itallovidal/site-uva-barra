## MODIFIED Requirements

### Requirement: Signup form

The system SHALL provide a collaborator signup page at `/cadastro` with a form that collects email, name, password, password confirmation, and profession.

#### Scenario: Successful form render
- **WHEN** user navigates to `/cadastro`
- **THEN** the system displays a signup form with email, name, password, confirm password, profession dropdown, and submit button

#### Scenario: Profession selection uses UserProfession values
- **WHEN** user opens the profession dropdown
- **THEN** the system SHALL display options: designer, redator, desenvolvedor, social_media, editor_chefe, outro

#### Scenario: Profession required
- **WHEN** user submits the form without selecting a profession
- **THEN** the system SHALL display a validation error message "Selecione uma função"

#### Scenario: Successful submit
- **WHEN** user fills all fields correctly and clicks "Solicitar Cadastro"
- **THEN** the system SHALL submit a `UserRequestDTO` with email, name, password, and profession

### Requirement: RequestLoginDTO

The system SHALL define a `RequestLoginDTO` type in `src/domain/entities.ts` with email and password fields.

#### Scenario: Type definition
- **WHEN** `RequestLoginDTO` is imported from domain entities
- **THEN** it SHALL contain `email: string` and `password: string`

### Requirement: UserRequestDTO replaces RequestSignupDTO

The system SHALL use `UserRequestDTO` from `src/domain/entities.ts` instead of the previous `RequestSignupDTO` for signup form submission.

#### Scenario: Type definition
- **WHEN** `UserRequestDTO` is imported from domain entities
- **THEN** it SHALL contain `name: string`, `email: string`, `password: string`, `profession: UserProfessionType`, `role?: UserRoleType`, `bio?: string | null`

## REMOVED Requirements

### Requirement: RequestSignupDTO

**Reason**: Replaced by `UserRequestDTO` in `src/domain/entities.ts` with updated field set (profession replaces role string).

**Migration**: Import `UserRequestDTO` from `@/domain/entities` instead of `RequestSignupDTO` from `@/types/auth-types`.

### Requirement: Role selection with ROLES constant

**Reason**: ROLES constant in `auth-types.ts` is removed. The profession dropdown now uses `UserProfession` from domain constants with values: designer, redator, desenvolvedor, social_media, editor_chefe, outro.

**Migration**: Replace `ROLES` import with `UserProfession` from `@/domain/constants`.
