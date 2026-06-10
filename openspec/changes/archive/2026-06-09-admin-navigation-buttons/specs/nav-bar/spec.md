## MODIFIED Requirements

### Requirement: Login button

The navbar SHALL render a conditional button on both desktop and mobile viewports based on the user's authentication state.

When the user is NOT authenticated, the navbar SHALL render a "Login" button that links to `/entrar` with a `SignInIcon`.

When the user IS authenticated, the navbar SHALL render an "Administração" button that links to `/admin` with a `GearIcon`.

On desktop, the button SHALL be visible in the right section of the navbar.

On mobile, the button SHALL be rendered at the bottom of the drawer.

#### Scenario: Desktop login renders when unauthenticated
- **WHEN** the viewport is 1024px or wider and the user is NOT authenticated
- **THEN** a "Login" button with `SignInIcon` SHALL be visible in the right section, linking to `/entrar`

#### Scenario: Desktop administration button renders when authenticated
- **WHEN** the viewport is 1024px or wider and the user IS authenticated
- **THEN** an "Administração" button with `GearIcon` SHALL be visible in the right section, linking to `/admin`

#### Scenario: Mobile login renders when unauthenticated
- **WHEN** the viewport is below 1024px and the user is NOT authenticated and the drawer is open
- **THEN** a "Login" button with `SignInIcon` SHALL be visible at the bottom of the drawer, linking to `/entrar`

#### Scenario: Mobile administration button renders when authenticated
- **WHEN** the viewport is below 1024px and the user IS authenticated and the drawer is open
- **THEN** an "Administração" button with `GearIcon` SHALL be visible at the bottom of the drawer, linking to `/admin`