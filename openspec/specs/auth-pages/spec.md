## Purpose

Authentication pages for user login and signup.
## Requirements
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

#### Scenario: Successful submit calls login API
- **WHEN** user fills email and password correctly and clicks "Entrar"
- **THEN** the system SHALL call `AuthContext.login()` with the form data
- **AND** display a loading state on the submit button while the request is in flight
- **AND** redirect to `/admin` (or the redirect query param) on success
- **AND** display "Email ou senha inválidos" on 401 response
- **AND** display "Erro ao conectar ao servidor" on network error

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

The system SHALL define a `RequestLoginDTO` type in `src/domain/entities.ts` with email and password fields.

#### Scenario: Type definition
- **WHEN** `RequestLoginDTO` is imported from domain entities
- **THEN** it SHALL contain `email: string` and `password: string`

### Requirement: UserRequestDTO

The system SHALL define a `UserRequestDTO` type in `src/domain/entities.ts` for signup form submission with name, email, password, profession, and optional role and bio fields.

#### Scenario: Type definition
- **WHEN** `UserRequestDTO` is imported from domain entities
- **THEN** it SHALL contain `name: string`, `email: string`, `password: string`, `profession: UserProfessionType`, `role?: UserRoleType`, `bio?: string | null`

