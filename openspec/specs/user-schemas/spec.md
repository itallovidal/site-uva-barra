# user-schemas Specification

## Purpose
TBD - created by archiving change refactor-types-to-entities. Update Purpose after archive.
## Requirements
### Requirement: Login Zod schema

The system SHALL provide a Zod schema `loginSchema` in `src/schemas/user-schemas.ts` for validating login form data. The inferred type SHALL NOT be used; the `useForm` generic SHALL use `RequestLoginDTO` from domain entities directly.

#### Scenario: Validates email format
- **WHEN** the login schema validates an invalid email
- **THEN** it SHALL produce a validation error with message "Email inválido"

#### Scenario: Validates password required
- **WHEN** the login schema validates an empty password
- **THEN** it SHALL produce a validation error with message "Senha é obrigatória"

#### Scenario: Valid data passes
- **WHEN** the login schema validates a valid email and non-empty password
- **THEN** it SHALL return the parsed data with no errors

### Requirement: Signup Zod schema

The system SHALL provide a Zod schema `signupSchema` in `src/schemas/user-schemas.ts` for validating signup form data. The inferred type SHALL NOT be used; the `useForm` generic SHALL use `UserRequestDTO` from domain entities directly.

#### Scenario: Validates email format
- **WHEN** the signup schema validates an invalid email
- **THEN** it SHALL produce a validation error with message "Email inválido"

#### Scenario: Validates name required
- **WHEN** the signup schema validates an empty name
- **THEN** it SHALL produce a validation error with message "Nome é obrigatório"

#### Scenario: Validates password minimum length
- **WHEN** the signup schema validates a password shorter than 6 characters
- **THEN** it SHALL produce a validation error with message "Senha deve ter no mínimo 6 caracteres"

#### Scenario: Validates password confirmation match
- **WHEN** the signup schema validates non-matching password and confirmPassword
- **THEN** it SHALL produce a validation error with message "Senhas não conferem"

#### Scenario: Validates profession selection
- **WHEN** the signup schema validates without a profession
- **THEN** it SHALL produce a validation error with message "Selecione uma função"

#### Scenario: Valid profession value passes
- **WHEN** the signup schema validates with a valid UserProfession value
- **THEN** it SHALL accept the value with no errors

### Requirement: Form uses domain DTO as generic type

The login form SHALL use `useForm<RequestLoginDTO>` and the signup form SHALL use `useForm<UserRequestDTO & { confirmPassword: string }>`, not `z.infer`.

#### Scenario: Login form typed with RequestLoginDTO
- **WHEN** the login form calls `handleSubmit(onSubmit)`
- **THEN** the `data` parameter SHALL be typed as `RequestLoginDTO`

#### Scenario: Signup form typed with UserRequestDTO
- **WHEN** the signup form calls `handleSubmit(onSubmit)`
- **THEN** the `data` parameter SHALL be typed as `UserRequestDTO` (with additional `confirmPassword`)

