## ADDED Requirements

### Requirement: Login form

The system SHALL provide a login page at `/entrar` with a form that collects email and password.

#### Scenario: Successful form render
- **WHEN** user navigates to `/entrar`
- **THEN** the system displays a login form with email input, password input, and submit button

#### Scenario: Email validation
- **WHEN** user submits the form with an invalid email
- **THEN** the system SHALL display a validation error message "Email inválido"

#### Scenario: Password required
- **WHEN** user submits the form with an empty password
- **THEN** the system SHALL display a validation error message "Senha é obrigatória"

#### Scenario: Successful submit
- **WHEN** user fills email and password correctly and clicks "Entrar"
- **THEN** the system SHALL submit a `RequestLoginDTO` with the provided email and password

### Requirement: Signup form

The system SHALL provide a collaborator signup page at `/cadastro` with a form that collects email, name, password, password confirmation, and role.

#### Scenario: Successful form render
- **WHEN** user navigates to `/cadastro`
- **THEN** the system displays a signup form with email, name, password, confirm password, role dropdown, and submit button

#### Scenario: Hero text display
- **WHEN** user navigates to `/cadastro`
- **THEN** the system SHALL display the heading "Ajude-nos a Crescer" with subtitle "Seja um colaborador e ajude o portal da UVA Barra crescer da forma que puder ajudar"

#### Scenario: Email validation
- **WHEN** user submits the form with an invalid email
- **THEN** the system SHALL display a validation error message "Email inválido"

#### Scenario: Name required
- **WHEN** user submits the form with an empty name
- **THEN** the system SHALL display a validation error message "Nome é obrigatório"

#### Scenario: Password matching
- **WHEN** user submits the form with non-matching password and confirmation
- **THEN** the system SHALL display a validation error message "Senhas não conferem"

#### Scenario: Password minimum length
- **WHEN** user submits the form with a password shorter than 6 characters
- **THEN** the system SHALL display a validation error message "Senha deve ter no mínimo 6 caracteres"

#### Scenario: Role selection
- **WHEN** user opens the role dropdown
- **THEN** the system SHALL display options: desenvolvedor, design, redator, pesquisador

#### Scenario: Role required
- **WHEN** user submits the form without selecting a role
- **THEN** the system SHALL display a validation error message "Selecione uma função"

#### Scenario: Successful submit
- **WHEN** user fills all fields correctly and clicks "Solicitar Cadastro"
- **THEN** the system SHALL submit a `RequestSignupDTO` with email, name, password, and role

### Requirement: Navigation between auth pages

The system SHALL provide navigation links between login and signup pages.

#### Scenario: Link from login to signup
- **WHEN** user is on `/entrar`
- **THEN** the system SHALL display a link "Não tem conta? Cadastre-se" pointing to `/cadastro`

#### Scenario: Link from signup to login
- **WHEN** user is on `/cadastro`
- **THEN** the system SHALL display a link "Já tem conta? Entre" pointing to `/entrar`

### Requirement: Nav-bar login button navigation

The login buttons in the nav-bar SHALL navigate to the login page.

#### Scenario: Desktop nav-bar login redirect
- **WHEN** user clicks "Login" button in the desktop nav-bar
- **THEN** the system SHALL navigate to `/entrar`

#### Scenario: Mobile nav-bar login redirect
- **WHEN** user clicks "Login" button in the mobile nav-bar
- **THEN** the system SHALL navigate to `/entrar`

### Requirement: RequestLoginDTO

The system SHALL define a `RequestLoginDTO` type with email and password fields.

#### Scenario: Type definition
- **WHEN** `RequestLoginDTO` is imported
- **THEN** it SHALL contain `email: string` and `password: string`

### Requirement: RequestSignupDTO

The system SHALL define a `RequestSignupDTO` type with email, name, password, and role fields.

#### Scenario: Type definition
- **WHEN** `RequestSignupDTO` is imported
- **THEN** it SHALL contain `email: string`, `name: string`, `password: string`, and `role: string`
