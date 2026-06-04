## MODIFIED Requirements

### Requirement: Mock Service Worker initialized

The application SHALL initialize the MSW service worker when `VITE_ENABLE_MSW` is `"true"`, before rendering the React tree. The worker MUST intercept HTTP requests made by the application.

#### Scenario: Worker starts when MSW is enabled
- **WHEN** the application starts and `VITE_ENABLE_MSW` is set to `"true"`
- **THEN** the MSW worker SHALL start and intercept HTTP requests before React renders

#### Scenario: Worker does not start when MSW is disabled
- **WHEN** the application starts and `VITE_ENABLE_MSW` is not set to `"true"`
- **THEN** the MSW worker SHALL NOT be started
