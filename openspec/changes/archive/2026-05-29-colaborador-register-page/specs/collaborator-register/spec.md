## ADDED Requirements

### Requirement: Collaborator register form

The system SHALL provide a register page at `/admin/collaborators/register` with a form that collects all fields from `UserRequestDTO`: name, email, password, profession, role, bio, plus a password confirmation field.

#### Scenario: Successful form render
- **WHEN** admin navigates to `/admin/collaborators/register`
- **THEN** the system displays a register form with name, email, password, confirm password, profession dropdown, role dropdown, bio textarea, and submit button

#### Scenario: Form is centered on screen
- **WHEN** admin navigates to `/admin/collaborators/register`
- **THEN** the form SHALL be centered both vertically and horizontally within the admin layout content area

#### Scenario: Name required
- **WHEN** admin submits the form without a name
- **THEN** the system SHALL display a validation error "Nome é obrigatório"

#### Scenario: Email validation
- **WHEN** admin submits the form with an invalid email
- **THEN** the system SHALL display a validation error "Email inválido"

#### Scenario: Password minimum length
- **WHEN** admin submits the form with a password shorter than 6 characters
- **THEN** the system SHALL display a validation error "Senha deve ter no mínimo 6 caracteres"

#### Scenario: Password confirmation mismatch
- **WHEN** admin submits the form with different password and confirm password values
- **THEN** the system SHALL display a validation error "Senhas não conferem"

#### Scenario: Profession selection uses UserProfession values
- **WHEN** admin opens the profession dropdown
- **THEN** the system SHALL display options: designer, redator, desenvolvedor, social_media, editor_chefe, outro

#### Scenario: Profession required
- **WHEN** admin submits the form without selecting a profession
- **THEN** the system SHALL display a validation error "Selecione uma função"

#### Scenario: Role defaults to collaborator
- **WHEN** admin opens the role dropdown
- **THEN** the system SHALL display options: collaborator, admin

#### Scenario: Bio is optional
- **WHEN** admin submits the form without filling bio
- **THEN** the system SHALL submit the DTO with bio as null

#### Scenario: Successful submit
- **WHEN** admin fills all required fields correctly and clicks "Registrar Colaborador"
- **THEN** the system SHALL submit a `UserRequestDTO` with all filled fields and bio as null if empty

### Requirement: Input validation with Zod

The system SHALL use a Zod schema (`registerSchema`) for form validation, resolving via `zodResolver` from `@hookform/resolvers/zod`.

#### Scenario: Zod schema covers all form fields
- **WHEN** `registerSchema` is defined
- **THEN** it SHALL validate name (string, min 1), email (valid email), password (min 6), confirmPassword (min 1, must match password), profession (enum from UserProfession), role (optional enum from UserRole), bio (optional string)
