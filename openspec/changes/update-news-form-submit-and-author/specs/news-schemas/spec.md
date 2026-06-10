## ADDED Requirements

### Requirement: Author field in Zod schema

The `newsSchema` SHALL include a required `author` string field.

#### Scenario: Validates author required

- **WHEN** the news schema validates without an author
- **THEN** it SHALL produce a validation error

#### Scenario: Accepts valid author string

- **WHEN** the news schema validates with a non-empty author string
- **THEN** it SHALL pass validation
