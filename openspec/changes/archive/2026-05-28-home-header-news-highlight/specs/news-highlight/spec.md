# news-highlight

## ADDED Requirements

### Requirement: NewsHighlightCard renders article teaser
The system SHALL provide a `NewsHighlightCard` component that displays a single highlighted article with image, gradient overlay, category badge, title, and summary.

#### Scenario: Card renders with all fields
- **WHEN** the card receives a valid `NewsHighlight` object
- **THEN** it SHALL display the article image (with `object-cover`), a category badge, a title (max 2 lines via `line-clamp-2`), and a summary text
- **AND** it SHALL render a `bg-gradient-to-t from-black/70 to-transparent` overlay over the image so text is readable

#### Scenario: Card handles missing image
- **WHEN** the image URL is empty or null
- **AND** the card renders
- **THEN** it SHALL show a placeholder background instead of a broken image

#### Scenario: Category badge shows label
- **WHEN** the article has a category
- **THEN** the badge SHALL display the category name as text

### Requirement: Grid layout for highlight section
The system SHALL provide a `NewsHighlightGrid` component that arranges 3 news cards in a responsive grid.

#### Scenario: Desktop grid layout (3 cards)
- **WHEN** the viewport is `lg` (1024px+) 
- **THEN** the grid SHALL display the first card spanning 2 rows on the left
- **AND** the second and third cards SHALL stack vertically on the right

#### Scenario: Mobile layout (single column)
- **WHEN** the viewport is below `lg` (1024px)
- **THEN** all 3 cards SHALL stack in a single column, one below the other
- **AND** each card SHALL be full width

### Requirement: NewsHighlight type definition
The system SHALL define a `NewsHighlight` TypeScript type for article data.

#### Scenario: Shape validation
- **WHEN** a `NewsHighlight` object is created
- **THEN** it SHALL have fields: `id`, `imageUrl`, `category`, `title`, `summary`
- **AND** all fields SHALL be strings

### Requirement: Mock data available for development
The system SHALL provide mock data for 3 highlight articles during development.

#### Scenario: Mock data returns 3 articles
- **WHEN** the mock data fixture is imported
- **THEN** it SHALL return an array of 3 `NewsHighlight` objects
- **AND** each object SHALL have realistic placeholder values for all fields
