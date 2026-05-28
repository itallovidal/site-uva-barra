## ADDED Requirements

### Requirement: Sobre page route

The system SHALL provide a route at `/sobre` that renders the about page for Agência UVA Barra.

#### Scenario: Navigate to sobre page

- **WHEN** the user navigates to `/sobre`
- **THEN** the system SHALL render the sobre page
- **AND** the page SHALL display the institutional banner, history text, and team members list

#### Scenario: Navigate via NavBar link

- **WHEN** the user clicks "Sobre" in the navigation bar
- **THEN** the system SHALL navigate to `/sobre` using React Router without full page reload

### Requirement: Full-width banner

The page SHALL display a full-width banner at the top with approximately 20vh height, featuring a background image and centered overlay text "Agência UVA Barra".

#### Scenario: Banner renders correctly

- **WHEN** the sobre page loads
- **THEN** the banner SHALL span the full viewport width
- **AND** the banner SHALL have a height of approximately 20vh
- **AND** the banner SHALL display "Agência UVA Barra" centered vertically and horizontally
- **AND** the banner SHALL have a background image with a dark overlay for text legibility

#### Scenario: Banner image fails to load

- **WHEN** the background image URL fails to load
- **THEN** the banner SHALL display a solid color fallback background

### Requirement: Institutional text section

The page SHALL display the institutional text describing the history, mission, and team of Agência UVA Barra.

#### Scenario: Text section renders

- **WHEN** the sobre page loads
- **THEN** the page SHALL display the institutional text with proper paragraph formatting
- **AND** the text SHALL include: founding date, courses served, description of activities, and current supervision team

### Requirement: Team members section with categories

The page SHALL display team members grouped by category (e.g., "Redação", "Criação", "Desenvolvimento"), each with a section title preceded by a red vertical bar.

#### Scenario: Categories render with red bar accent

- **WHEN** the team section renders
- **THEN** each category title SHALL be preceded by a red vertical bar (`bg-red-600`, `rounded-full`, `h-8`, `w-1.5`)
- **AND** team members SHALL be grouped under their respective category
