## MODIFIED Requirements

### Requirement: Login fixture credentials match API spec

The login mock fixture in `src/mocks/user/login.ts` SHALL use `admin@email.com` as the email and `admin123` as the password for successful authentication, matching the real backend API.

#### Scenario: Login with correct credentials

- **WHEN** `POST /user/login` is called with `{ "email": "admin@email.com", "password": "admin123" }`
- **THEN** the mock SHALL respond with HTTP 200 and include `accessToken` and `user` in the response data