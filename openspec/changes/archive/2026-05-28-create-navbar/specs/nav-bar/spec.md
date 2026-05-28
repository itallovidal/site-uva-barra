## ADDED Requirements

### Requirement: Desktop navigation bar

The system SHALL render a horizontal navigation bar on viewports 1024px and wider.

The desktop navbar SHALL display:
- Brand name "agência uva barra" on the left
- Navigation links in the center: "novidades", "contato", "sobre"
- A search input bar and a "Login" button on the right

#### Scenario: Desktop navbar shows all sections

- **WHEN** the viewport is 1024px or wider
- **THEN** the navbar SHALL display the brand, nav links, search bar, and login button in a horizontal layout

### Requirement: Mobile navigation menu

The system SHALL render a hamburger button (Phosphor `List`) and a search input inline on viewports below 1024px.

When the hamburger button is clicked, it SHALL open a Vaul Drawer from the left with nav items, the brand name, and a login button rendered as a vertical list.

The mobile drawer SHALL include a close button.

The drawer SHALL display:
- Brand name "agência uva barra" at the top (links to `/`)
- Navigation links: "novidades", "contato", "sobre"
- A "Login" button at the bottom

#### Scenario: Mobile hamburger opens and closes

- **WHEN** the viewport is below 1024px
- **THEN** a hamburger icon (`List` from Phosphor) and a search input SHALL be visible instead of the horizontal nav
- **WHEN** the hamburger icon is clicked
- **THEN** a drawer SHALL slide in from the left with brand, nav items, and login in a vertical list
- **WHEN** the close button or a nav item is clicked
- **THEN** the drawer SHALL close

### Requirement: Config-driven nav items

The NavBar component SHALL accept a `navItems` prop as an array of objects with `link`, `text`, and `icon` fields. The brand "agência uva barra" SHALL be a separate `brand` prop (string), not part of the nav items array.

#### Scenario: Custom nav items render correctly

- **WHEN** a `navItems` array is passed to NavBar
- **THEN** each item's `text` SHALL be displayed as a link pointing to `link`
- **THEN** each item's `icon` SHALL be rendered alongside the text

#### Scenario: Brand is a separate prop

- **WHEN** a `brand` prop is passed to NavBar
- **THEN** the brand SHALL be displayed in the desktop navbar as a standalone element
- **THEN** the brand SHALL be displayed inside the mobile drawer, linking to `/`

### Requirement: Search bar

The navbar SHALL render a search input field on both desktop and mobile viewports.

On desktop, the search input SHALL be in the right section of the navbar.

On mobile, the search input SHALL be inline in the top bar, next to the hamburger button.

#### Scenario: Desktop search renders

- **WHEN** the viewport is 1024px or wider
- **THEN** a search input with a `MagnifyingGlass` icon SHALL be visible in the right section

#### Scenario: Mobile search renders

- **WHEN** the viewport is below 1024px
- **THEN** a search input SHALL be visible inline next to the hamburger button

### Requirement: Login button

The navbar SHALL render a "Login" button on both desktop and mobile viewports.

On desktop, the login button SHALL be visible in the right section of the navbar.

On mobile, the login button SHALL be rendered at the bottom of the drawer.

#### Scenario: Desktop login renders

- **WHEN** the viewport is 1024px or wider
- **THEN** a "Login" button SHALL be visible in the right section

#### Scenario: Mobile login renders

- **WHEN** the viewport is below 1024px and the drawer is open
- **THEN** a "Login" button SHALL be visible at the bottom of the drawer
