## Purpose

Highlighted news cards and grid layout for the home page.
## Requirements
### Requirement: NewsHighlightCard renders article teaser

The `NewsHighlightCard` component SHALL accept `NewsPreviewDTO` instead of `NewsHighlight`.

#### Scenario: Card renders with all fields
- **WHEN** the card receives a valid `NewsPreviewDTO` object
- **THEN** it SHALL display the article `coverImageUrl` (with `object-cover`), a category badge with `categoryName`, a title (max 2 lines via `line-clamp-2`), and summary text
- **AND** it SHALL render a `bg-gradient-to-t from-black/70 to-transparent` overlay over the image
- **AND** it SHALL display the `authorName` and `publishedAt` if available

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

The system SHALL use `NewsPreviewDTO` from `src/domain/entities.ts` as the canonical type for article previews displayed on the home page and category pages.

#### Scenario: Shape validation
- **WHEN** a `NewsPreviewDTO` object is used
- **THEN** it SHALL have fields: `id`, `title`, `summary`, `coverImageUrl` (string | null), `categoryName`, `tags` (array), `featured` (boolean), `readingTime` (number | null), `publishedAt` (Date | null), `authorName`

### Requirement: Mock data available for development

The mock data SHALL provide `NewsPreviewDTO` objects instead of `NewsHighlight` objects for development.

#### Scenario: Mock data returns NewsPreviewDTO array
- **WHEN** the news mock data fixture is imported
- **THEN** it SHALL return an array of `NewsPreviewDTO` objects
- **AND** each object SHALL have realistic placeholder values for all fields

