## ADDED Requirements

### Requirement: Protected route component

The system SHALL provide a `ProtectedRoute` component that restricts access to authenticated users.

#### Scenario: Authenticated user can access admin
- **WHEN** an authenticated user navigates to any `/admin/*` route
- **THEN** the system SHALL render the requested admin page

#### Scenario: Unauthenticated user is redirected to login
- **WHEN** an unauthenticated user navigates to any `/admin/*` route
- **THEN** the system SHALL redirect to `/entrar`
- **AND** the system SHALL preserve the attempted URL as a query parameter `?redirect=/admin/...`

#### Scenario: Redirect back after login
- **WHEN** user logs in successfully after being redirected from a protected route
- **THEN** the system SHALL navigate to the original URL stored in the `redirect` parameter instead of `/admin`

### Requirement: Admin layout uses ProtectedRoute

The admin layout SHALL be wrapped with `ProtectedRoute` to prevent unauthenticated access.

#### Scenario: Admin routes are guarded
- **WHEN** the router renders the admin layout element
- **THEN** the admin layout SHALL be wrapped by `ProtectedRoute`
