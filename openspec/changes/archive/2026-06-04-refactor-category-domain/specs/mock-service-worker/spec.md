## ADDED Requirements

### Requirement: POST /api/categories mock handler

The system SHALL provide a mock handler for `POST /api/categories` that validates the request body using the `categorySchema` Zod schema, creates a new category with a generated UUID, and appends it to the mutable categories array.

#### Scenario: Creates category successfully

- **WHEN** a `POST /api/categories` request is made with a valid JSON body `{ "name": "Esportes" }`
- **THEN** the system SHALL respond with HTTP 201 and JSON body `{ "success": true, "id": "<uuid>" }`
- **AND** the new category SHALL be added to the in-memory categories array

#### Scenario: Returns 400 for empty name

- **WHEN** a `POST /api/categories` request is made with an empty name
- **THEN** the system SHALL respond with HTTP 400 and JSON body `{ "error": "Nome é obrigatório" }`

### Requirement: DELETE /api/categories/:id mock handler

The system SHALL provide a mock handler for `DELETE /api/categories/:id` that removes a category by its ID from the mutable categories array.

#### Scenario: Deletes existing category

- **WHEN** a `DELETE /api/categories/cat_tec` request is made
- **THEN** the system SHALL respond with HTTP 200 and JSON body `{ "success": true }`
- **AND** the category SHALL be removed from the in-memory categories array

#### Scenario: Returns 404 for non-existent category

- **WHEN** a `DELETE /api/categories/nonexistent` request is made
- **THEN** the system SHALL respond with HTTP 404 and JSON body `{ "error": "Categoria não encontrada" }`

### Requirement: GET /api/categories uses mutable array

The system SHALL change the `GET /api/categories` handler to return categories from a mutable in-memory array (instead of the static imported mock array), consistent with the collaborator mock pattern.

#### Scenario: Returns all categories

- **WHEN** a `GET /api/categories` request is made
- **THEN** the system SHALL respond with HTTP 200 and a JSON array of `Category` objects
- **AND** the array SHALL reflect any categories added or removed during the session
