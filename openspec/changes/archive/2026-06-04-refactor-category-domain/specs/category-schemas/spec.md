## ADDED Requirements

### Requirement: Category Zod schema

The system SHALL provide a Zod schema `categorySchema` in `src/schemas/category-schemas.ts` for validating category creation input. The schema SHALL require a `name` field as a non-empty string.

#### Scenario: Validates name required

- **WHEN** the category schema validates an empty name
- **THEN** it SHALL produce a validation error with message "Nome é obrigatório"

#### Scenario: Valid name passes

- **WHEN** the category schema validates a non-empty name
- **THEN** it SHALL return the parsed data with no errors
