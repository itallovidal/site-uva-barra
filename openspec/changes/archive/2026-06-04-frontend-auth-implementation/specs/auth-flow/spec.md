## ADDED Requirements

### Requirement: Login API integration

The system SHALL call `POST /api/auth/login` with `RequestLoginDTO` on form submission and handle the response.

#### Scenario: Successful login
- **WHEN** user submits the login form with valid email and password
- **THEN** the system SHALL send a POST request to `/api/auth/login` with `{ email, password }`
- **AND** the system SHALL extract `accessToken` and `user` from the response payload
- **AND** the system SHALL store the token in `localStorage` under key `auth-token`
- **AND** the system SHALL redirect the user to `/admin`

#### Scenario: Invalid credentials
- **WHEN** user submits the login form with incorrect email or password
- **THEN** the system SHALL display an error message "Email ou senha inválidos"
- **AND** the system SHALL NOT redirect or store any token

#### Scenario: Network error
- **WHEN** the login request fails due to network error
- **THEN** the system SHALL display a generic error message "Erro ao conectar ao servidor"

### Requirement: Auth context with user state

The system SHALL provide a React context (`AuthContext`) that exposes authentication state to the entire application.

#### Scenario: Context provides user and auth status
- **WHEN** any component consumes `AuthContext`
- **THEN** it SHALL receive `user: User | null`, `token: string | null`, `isAuthenticated: boolean`, `isAdmin: boolean`, `login(data: RequestLoginDTO) => Promise<void>`, and `logout() => void`

#### Scenario: Auth state persists across page reload
- **WHEN** the application loads
- **THEN** the `AuthProvider` SHALL read the stored token from `localStorage`
- **AND** if a token exists, decode it to extract user info and set `isAuthenticated` to `true`

#### Scenario: Logout clears state
- **WHEN** user calls `logout()`
- **THEN** the system SHALL remove `auth-token` from `localStorage`
- **AND** set `user` to `null`
- **AND** set `token` to `null`
- **AND** navigate to `/entrar`

### Requirement: Auth provider wrapping

The system SHALL wrap the application with `AuthProvider` at the root level so all routes can access auth state.

#### Scenario: App root wraps AuthProvider
- **WHEN** the application renders
- **THEN** `AuthProvider` SHALL wrap the `RouterProvider` in `src/app.tsx`
