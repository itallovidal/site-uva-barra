## MODIFIED Requirements

### Requirement: NewsHighlight type definition
The system SHALL define a `NewsHighlight` TypeScript type for article data.

#### Scenario: Shape validation
- **WHEN** a `NewsHighlight` object is created
- **THEN** it SHALL have fields: `id`, `imageUrl`, `category`, `title`, `summary`, and optionally `author` and `publishedAt`
- **AND** all fields SHALL be strings
