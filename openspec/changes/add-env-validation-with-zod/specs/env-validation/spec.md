## ADDED Requirements

### Requirement: Environment variables validated on startup

The application SHALL validate all environment variables against a Zod schema at startup, before rendering the React tree. If validation fails, the app SHALL throw an error with a message listing each invalid variable and its reason.

#### Scenario: Valid env vars pass validation
- **WHEN** all required environment variables are set with valid values
- **THEN** the application SHALL start normally without any validation errors

#### Scenario: Missing required env var throws
- **WHEN** a required environment variable is missing or empty
- **THEN** the application SHALL throw an error listing the missing variable and its expected format

#### Scenario: Invalid env var type throws
- **WHEN** an environment variable has an invalid type (e.g., non-numeric PORT)
- **THEN** the application SHALL throw an error describing the type mismatch

### Requirement: Typed env object exported

The system SHALL export a typed `env` object inferred from the Zod schema, providing autocomplete and type safety when accessing environment variables across the application.

#### Scenario: Env object has correct types
- **WHEN** an import accesses the `env` object
- **THEN** each property SHALL have the correct TypeScript type (string, number, enum value, etc.)

#### Scenario: Env object used instead of import.meta.env
- **WHEN** any module needs an environment variable
- **THEN** it SHALL import and use the typed `env` object instead of accessing `import.meta.env` directly

### Requirement: VITE_API_BASE_URL configures API endpoint

The system SHALL use `VITE_API_BASE_URL` as the base URL for all API calls. When not set, API calls SHALL fall back to same-origin (empty string prefix).

#### Scenario: Base URL set
- **WHEN** `VITE_API_BASE_URL` is set to a URL like `http://localhost:4000`
- **THEN** all API requests SHALL be prefixed with that URL

#### Scenario: Base URL not set
- **WHEN** `VITE_API_BASE_URL` is not set
- **THEN** API requests SHALL use relative paths (same-origin behavior)

### Requirement: VITE_ENABLE_MSW controls mock activation

The system SHALL check `VITE_ENABLE_MSW` to decide whether to start the MSW service worker before rendering the React tree.

#### Scenario: MSW enabled
- **WHEN** `VITE_ENABLE_MSW` is set to `"true"`
- **THEN** the MSW worker SHALL start and intercept HTTP requests before React renders

#### Scenario: MSW disabled
- **WHEN** `VITE_ENABLE_MSW` is not set to `"true"` (e.g., missing, `"false"`)
- **THEN** the MSW worker SHALL NOT start

### Requirement: .env.example documents all variables

The project SHALL include a `.env.example` file listing every environment variable, its expected type, and whether it is required or optional.

#### Scenario: Example file present
- **WHEN** a developer clones the repository
- **THEN** the `.env.example` file SHALL be present at the project root with documentation for each variable
