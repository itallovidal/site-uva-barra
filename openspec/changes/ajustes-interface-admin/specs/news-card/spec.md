## ADDED Requirements

### Requirement: Home page secondary articles display in responsive grid

The system SHALL display secondary articles (after the main highlight grid) in a responsive CSS grid layout that wraps cards across multiple rows.

#### Scenario: Secondary articles render in grid layout

- **WHEN** the home page has more than 7 articles
- **THEN** the remaining articles SHALL be displayed in a CSS grid with `grid-cols-1` on mobile, `md:grid-cols-2` on tablet, and `lg:grid-cols-3` on desktop
- **AND** each grid cell SHALL contain a `NewsCard` with `isVertical` set to true
