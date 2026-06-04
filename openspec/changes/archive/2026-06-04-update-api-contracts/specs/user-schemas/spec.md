## MODIFIED Requirements

### Requirement: Signup Zod schema

The system SHALL provide a Zod schema `signupSchema` in `src/schemas/user-schemas.ts` for validating signup form data. The inferred type SHALL NOT be used; the `useForm` generic SHALL use `CreateUserDTO` from domain entities directly.

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

### Requirement: Register Zod schema

The system SHALL provide a Zod schema `registerSchema` in `src/schemas/user-schemas.ts` for admin registration of collaborators. The inferred type SHALL NOT be used; the `useForm` generic SHALL use `CreateUserDTO` from domain entities directly.

#### Scenario: Validates email format

- **WHEN** the register schema validates an invalid email
- **THEN** it SHALL produce a validation error with message "Email inválido"

#### Scenario: Validates name required

- **WHEN** the register schema validates an empty name
- **THEN** it SHALL produce a validation error with message "Nome é obrigatório"

#### Scenario: Validates password minimum length

- **WHEN** the register schema validates a password shorter than 6 characters
- **THEN** it SHALL produce a validation error with message "Senha deve ter no mínimo 6 caracteres"

#### Scenario: Validates profession selection

- **WHEN** the register schema validates without a profession
- **THEN** it SHALL produce a validation error with message "Selecione uma função"

#### Scenario: Bio is optional

- **WHEN** the register schema validates without a bio
- **THEN** it SHALL accept the value with no errors

### Requirement: Form uses domain DTO as generic type

The login form SHALL use `useForm<RequestLoginDTO>` and the signup form SHALL use `useForm<CreateUserDTO & { confirmPassword: string }>`, not `z.infer`.

#### Scenario: Login form typed with RequestLoginDTO

- **WHEN** the login form calls `handleSubmit(onSubmit)`
- **THEN** the `data` parameter SHALL be typed as `RequestLoginDTO`

#### Scenario: Signup form typed with CreateUserDTO

- **WHEN** the signup form calls `handleSubmit(onSubmit)`
- **THEN** the `data` parameter SHALL be typed as `CreateUserDTO` (with additional `confirmPassword`)

## REMOVED Requirements

### Requirement: Signup Zod schema references UserRequestDTO

**Reason**: UserRequestDTO renamed to CreateUserDTO per backend contract.

**Migration**: Replace all `UserRequestDTO` references with `CreateUserDTO`.
