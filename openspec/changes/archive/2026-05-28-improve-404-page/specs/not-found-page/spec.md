## ADDED Requirements

### Requirement: Page displays a centered 404 error layout
The system SHALL render the 404 page with all content centered both vertically and horizontally within the main content area.

#### Scenario: 404 page loads on unknown route
- **WHEN** a user navigates to a route that does not match any defined path
- **THEN** the system displays the 404 error page with content centered in the viewport

### Requirement: Page shows a descriptive error icon
The system SHALL display a large icon representing a missing file or broken page.

#### Scenario: Error icon is visible
- **WHEN** the 404 page renders
- **THEN** a Phosphor FileX icon (or equivalent) is displayed at the top of the content area

### Requirement: Page shows a primary heading "Página não encontrada"
The system SHALL display a clear heading indicating the page was not found.

#### Scenario: Heading is visible
- **WHEN** the 404 page renders
- **THEN** the heading "Página não encontrada" is displayed below the icon in a large font size using the brand red color

### Requirement: Page shows a descriptive message
The system SHALL display a secondary message explaining what happened and offering reassurance.

#### Scenario: Descriptive message is visible
- **WHEN** the 404 page renders
- **THEN** a message such as "A página que você está procurando pode ter sido removida ou o endereço está incorreto." is displayed below the heading

### Requirement: Page provides a "Voltar para Home" button
The system SHALL provide a prominent button that navigates the user to the home page (`/`).

#### Scenario: User clicks "Voltar para Home"
- **WHEN** the user clicks the "Voltar para Home" button
- **THEN** the browser navigates to the `/` route

### Requirement: Page provides a secondary "Voltar" navigation link
The system SHALL provide a secondary option to go back to the previous page.

#### Scenario: User clicks "Voltar"
- **WHEN** the user clicks the "Voltar" link
- **THEN** the browser navigates to the previous page in history

### Requirement: Page uses the site's brand red color scheme
The system SHALL apply the site's characteristic red color to key visual elements (heading, icon, button).

#### Scenario: Brand colors are applied
- **WHEN** the 404 page renders
- **THEN** the heading text and icon use a shade of red matching the site's brand palette (e.g., `text-red-600`)

### Requirement: Page includes a subtle entrance animation
The system SHALL apply a fade-in animation to the page content for a polished feel.

#### Scenario: Page content animates on load
- **WHEN** the 404 page renders
- **THEN** the content fades in smoothly over approximately 0.5 seconds

#### Scenario: Animation respects reduced motion
- **WHEN** the user has `prefers-reduced-motion` enabled
- **THEN** the fade-in animation is disabled
