## ADDED Requirements

### Requirement: Category Zod schemas

The system SHALL provide Zod schemas in `src/schemas/category-schemas.ts` for validating category creation and update input.

#### Scenario: Validates create name required

- **WHEN** the create category schema validates an empty name
- **THEN** it SHALL produce a validation error with message "Nome é obrigatório"

#### Scenario: Valid create name passes

- **WHEN** the create category schema validates a non-empty name
- **THEN** it SHALL return the parsed data with no errors

#### Scenario: Create accepts optional tags

- **WHEN** the create category schema is used without tags
- **THEN** tags SHALL default to an empty array

#### Scenario: Update validates name required

- **WHEN** the update category schema validates an empty name
- **THEN** it SHALL produce a validation error with message "Nome é obrigatório"
