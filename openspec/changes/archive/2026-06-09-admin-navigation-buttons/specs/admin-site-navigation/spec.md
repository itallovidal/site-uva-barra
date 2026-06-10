## ADDED Requirements

### Requirement: Navigation between admin and public site

The system SHALL provide bidirectional navigation between the public site and the admin area, allowing authenticated users to move between contexts without logging out.

#### Scenario: Navigating from admin to public site

- **WHEN** an authenticated user is in the admin area
- **THEN** the admin sidebar SHALL display a "Voltar ao site" link above the "Logout" link
- **AND** clicking "Voltar ao site" SHALL navigate the user to `/` (home) without affecting the authentication state

#### Scenario: Navigating from public site to admin while authenticated

- **WHEN** an authenticated user is browsing the public site
- **THEN** the navbar SHALL display an "Administração" button instead of the "Login" button
- **AND** clicking "Administração" SHALL navigate the user to `/admin` without requiring re-authentication

#### Scenario: Unauthenticated user sees Login button

- **WHEN** an unauthenticated user is browsing the public site
- **THEN** the navbar SHALL display the "Login" button as usual
- **AND** the admin sidebar SHALL NOT be accessible (enforced by ProtectedRoute)

### Requirement: Administration button replaces Login when authenticated

The NavBar SHALL conditionally render either a "Login" or "Administração" button based on the user's authentication state.

On desktop (viewport >= 1024px), the button SHALL appear in the right section of the navbar, replacing the "Login" button.

On mobile (viewport < 1024px), the button SHALL appear in the DrawerFooter of the mobile drawer, replacing the "Login" button.

The "Administração" button SHALL use a `GearIcon` (Phosphor) and link to `/admin`.

The "Login" button SHALL use a `SignInIcon` (Phosphor) and link to `/entrar`.

#### Scenario: Desktop shows Administração when authenticated

- **WHEN** the viewport is 1024px or wider and the user is authenticated
- **THEN** the navbar right section SHALL display an "Administração" button with `GearIcon` linking to `/admin`
- **AND** the "Login" button SHALL NOT be visible

#### Scenario: Desktop shows Login when unauthenticated

- **WHEN** the viewport is 1024px or wider and the user is not authenticated
- **THEN** the navbar right section SHALL display a "Login" button with `SignInIcon` linking to `/entrar`
- **AND** the "Administração" button SHALL NOT be visible

#### Scenario: Mobile shows Administração when authenticated

- **WHEN** the viewport is below 1024px and the user is authenticated and the drawer is open
- **THEN** the drawer footer SHALL display an "Administração" button with `GearIcon` linking to `/admin`
- **AND** the "Login" button SHALL NOT be visible

#### Scenario: Mobile shows Login when unauthenticated

- **WHEN** the viewport is below 1024px and the user is not authenticated and the drawer is open
- **THEN** the drawer footer SHALL display a "Login" button with `SignInIcon` linking to `/entrar`
- **AND** the "Administração" button SHALL NOT be visible