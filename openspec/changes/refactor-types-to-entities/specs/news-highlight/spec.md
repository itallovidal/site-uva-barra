## MODIFIED Requirements

### Requirement: NewsHighlightCard uses NewsPreviewDTO

The `NewsHighlightCard` component SHALL accept `NewsPreviewDTO` instead of `NewsHighlight`.

#### Scenario: Card renders with all fields
- **WHEN** the card receives a valid `NewsPreviewDTO` object
- **THEN** it SHALL display the article `coverImageUrl` (with `object-cover`), a category badge with `categoryName`, a title (max 2 lines via `line-clamp-2`), and summary text
- **AND** it SHALL render a `bg-gradient-to-t from-black/70 to-transparent` overlay over the image
- **AND** it SHALL display the `authorName` and `publishedAt` if available

### Requirement: NewsPreviewDTO type replaces NewsHighlight

The system SHALL use `NewsPreviewDTO` from `src/domain/entities.ts` as the canonical type for article previews displayed on the home page and category pages.

#### Scenario: Shape validation
- **WHEN** a `NewsPreviewDTO` object is used
- **THEN** it SHALL have fields: `id`, `title`, `summary`, `coverImageUrl` (string | null), `categoryName`, `tags` (array), `featured` (boolean), `readingTime` (number | null), `publishedAt` (Date | null), `authorName`

### Requirement: Mock data uses NewsPreviewDTO

The mock data SHALL provide `NewsPreviewDTO` objects instead of `NewsHighlight` objects for development.

#### Scenario: Mock data returns NewsPreviewDTO array
- **WHEN** the news mock data fixture is imported
- **THEN** it SHALL return an array of `NewsPreviewDTO` objects
- **AND** each object SHALL have realistic placeholder values for all fields

## REMOVED Requirements

### Requirement: NewsHighlight type definition

**Reason**: Replaced by `NewsPreviewDTO` in `src/domain/entities.ts` with more complete article preview fields (tags, featured, readingTime, authorName, etc.).

**Migration**: Replace `NewsHighlight` imports with `NewsPreviewDTO` from `@/domain/entities` and update field references (`imageUrl` → `coverImageUrl`, `category` → `categoryName`).
