## ADDED Requirements

### Requirement: Secondary news row renders below featured grid
The system SHALL render a horizontal row of 3 compact news cards below the featured news grid when at least 6 highlights are provided.

#### Scenario: Sufficient highlights available
- **WHEN** the `highlights` array contains 6 or more items
- **THEN** items at indices 3, 4, and 5 are rendered in a secondary row below the featured grid
- **THEN** each secondary card uses the compact visual variant

#### Scenario: Insufficient highlights (< 6)
- **WHEN** the `highlights` array contains fewer than 6 items
- **THEN** no secondary row is rendered
- **THEN** the component returns null (as before for < 3)

#### Scenario: Responsive layout
- **WHEN** the viewport is medium (md) or larger
- **THEN** the 3 secondary cards are displayed side by side in a single horizontal row
- **WHEN** the viewport is smaller than md
- **THEN** the 3 secondary cards stack vertically (one per row)

### Requirement: Secondary card uses compact styling
The system SHALL display secondary news cards with a smaller visual footprint than the featured cards.

#### Scenario: Compact card appearance
- **WHEN** a card is rendered with `isCompact`
- **THEN** its aspect ratio is smaller than the featured variant
- **THEN** text sizes and padding are reduced proportionally
- **THEN** no featured-specific styling (row-span, full-height image) is applied

### Requirement: Mock data returns 6 items
The mock data source SHALL contain at least 6 items so the full grid + secondary row can be demonstrated.

#### Scenario: Mock endpoint returns 6
- **WHEN** the `/api/news/latest` endpoint is called
- **THEN** the response contains exactly 6 news items
