## MODIFIED Requirements

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
