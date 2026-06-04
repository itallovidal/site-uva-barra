## MODIFIED Requirements

### Requirement: News creation Zod schema

The system SHALL provide a Zod schema `newsSchema` in `src/schemas/news-schemas.ts` for validating news creation/editing form data. The inferred type SHALL NOT be used; the `useForm` generic SHALL use `CreateNewsDTO` from domain entities directly.

#### Scenario: Validates title required

- **WHEN** the news schema validates an empty title
- **THEN** it SHALL produce a validation error

#### Scenario: Validates summary required

- **WHEN** the news schema validates an empty summary
- **THEN** it SHALL produce a validation error

#### Scenario: Validates content required

- **WHEN** the news schema validates empty content
- **THEN** it SHALL produce a validation error

#### Scenario: Validates category required

- **WHEN** the news schema validates without a category
- **THEN** it SHALL produce a validation error with message "Categoria é obrigatória"

#### Scenario: Valid tags as string array

- **WHEN** the news schema validates tags
- **THEN** it SHALL accept an array of strings (not nested objects)

#### Scenario: Status defaults to DRAFT

- **WHEN** the news schema validates without a status
- **THEN** status SHALL default to `NewsStatus.DRAFT`

#### Scenario: Featured defaults to false

- **WHEN** the news schema validates without featured
- **THEN** featured SHALL default to `false`

#### Scenario: Cover image URL is optional

- **WHEN** the news schema validates without coverImageUrl
- **THEN** it SHALL not produce an error for the missing field
