## ADDED Requirements

### Requirement: Router configuration
The application SHALL use react-router-dom v6 as the routing library with a centralized route configuration.

#### Scenario: Router wraps the application
- **WHEN** the application starts
- **THEN** a `BrowserRouter` wraps the root component tree

#### Scenario: Routes are defined centrally
- **WHEN** a new page is added to the application
- **THEN** it is registered in a dedicated route configuration file

### Requirement: Route definitions
The application SHALL define routes that map URL paths to page components.

#### Scenario: Home route renders
- **WHEN** the user navigates to `/`
- **THEN** the home page component is rendered

#### Scenario: Unknown route shows fallback
- **WHEN** the user navigates to an undefined route path
- **THEN** a 404/not-found page is displayed

### Requirement: Navigation API
The application SHALL provide programmatic navigation using React Router hooks.

#### Scenario: Programmatic navigation works
- **WHEN** a component calls `useNavigate()` and invokes the navigate function
- **THEN** the browser navigates to the specified route

#### Scenario: Link navigation works
- **WHEN** a user clicks a `Link` component
- **THEN** the browser navigates to the target route without a full page reload
