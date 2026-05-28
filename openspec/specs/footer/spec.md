## ADDED Requirements

### Requirement: Footer renders in root layout

The system SHALL render a `Footer` component at the bottom of every page, below the `<Outlet />` in the `RootLayout` component.

#### Scenario: Footer is visible on all pages

- **WHEN** any page is loaded
- **THEN** the Footer SHALL be visible at the bottom of the page, below the page content

### Requirement: Footer layout structure

The footer SHALL have three visual sections stacked vertically: a top information area with two columns, a thin horizontal divider, and a bottom bar.

#### Scenario: Desktop two-column layout

- **WHEN** the viewport is 640px or wider
- **THEN** the top section SHALL render as a two-column CSS Grid layout
- **THEN** the left column SHALL contain the institutional text
- **THEN** the right column SHALL contain the navigation links

#### Scenario: Mobile single-column layout

- **WHEN** the viewport is below 640px
- **THEN** the top section SHALL render as a single-column layout
- **THEN** the footer content SHALL have `px-4` horizontal padding

### Requirement: Desktop max-width constraint

On desktop viewports, the footer content SHALL be constrained to `max-w-7xl` and centered horizontally.

#### Scenario: Desktop centered container

- **WHEN** the viewport is 640px or wider
- **THEN** the footer content SHALL be inside a container with `max-w-7xl` and `mx-auto`

### Requirement: Institutional text content

The left column SHALL display the institutional text exactly as specified.

#### Scenario: Left column renders institutional text

- **WHEN** the footer renders
- **THEN** the left column SHALL display:
  - "Agência UVA" as a heading
  - "Laboratório de Jornalismo e Publicidade da Universidade Veiga de Almeida - Unidade Barra da Tijuca." as a paragraph

### Requirement: Navigation links in right column

The right column SHALL display a list of quick navigation links.

#### Scenario: Right column renders nav links

- **WHEN** the footer renders
- **THEN** the right column SHALL display a "Sobre" heading with the following links below it:
  - "Sobre a UVA"
  - "Equipe Editorial"
  - "Fale Conosco"
  - "Notícias"

#### Scenario: Nav links are clickable

- **WHEN** a user clicks on any navigation link
- **THEN** the browser SHALL navigate to the corresponding route

### Requirement: Bottom bar with divider

The footer SHALL have a bottom section separated from the top by a thin horizontal line.

#### Scenario: Divider separates sections

- **WHEN** the footer renders
- **THEN** a thin horizontal line SHALL separate the top content from the bottom bar

### Requirement: Copyright text

The bottom bar SHALL display copyright text on the left side.

#### Scenario: Copyright renders on the left

- **WHEN** the footer renders
- **THEN** the bottom bar SHALL display "© 2024 Universidade Veiga de Almeida - Campus Barra. Laboratório de Jornalismo." on the left

### Requirement: Social media icons

The bottom bar SHALL display social media icons on the right side, spaced with `space-x-4` or equivalent spacing.

#### Scenario: Social icons render on the right

- **WHEN** the footer renders
- **THEN** the right side of the bottom bar SHALL display clickable icons for Instagram and LinkedIn
- **THEN** the icons SHALL use `InstagramLogo` and `LinkedinLogo` from `@phosphor-icons/react`

#### Scenario: Social icons link to external URLs

- **WHEN** a user clicks on a social media icon
- **THEN** the browser SHALL open the corresponding external URL in a new tab
