## Why

The MSW mock handlers are out of sync with the real API endpoints. Several mocks use incorrect paths, methods, credentials, or response shapes compared to the actual backend specification. There is no centralized API documentation, making it hard for developers to know what endpoints exist and how they behave. Updating the mocks to match the real API and creating an endpoint reference document will eliminate confusion and prevent integration bugs.

## What Changes

- Fix login mock credentials to match the real API (`admin@email.com` / `admin123`)
- Remap registration mock paths from `/api/collaborators/*` to `/registration/*` to match the real API
- Add missing `POST /registration/:id/reject` handler (with `reason` body)
- Add `GET /registration/requests` with `status` query param support (currently missing pagination/filter)
- Add `POST /registration/` handler for requesting registration (public, no auth)
- Fix `search-news` mock: change `POST /news/search` to `GET /news/search?q=...` with `order` and pagination support
- Fix `get-categories` mock to return all categories from state instead of single fixture
- Add `status` query param support to news listing mock (`published` / `unpublished` / `review` / `draft`)
- Update user fixtures to use consistent data matching the API spec
- Create an `api-endpoints.md` reference document listing all endpoints, methods, auth requirements, request/response shapes, and examples

## Capabilities

### New Capabilities
- `api-endpoints-docs`: Centralized API endpoint reference document covering all routes (user, registration, news, categories), methods, auth requirements, request/response schemas, and example payloads

### Modified Capabilities
- `mock-service-worker`: Update mock handlers to match real API paths, methods, credentials, and response shapes
- `domain-types`: Align mock fixture data and response shapes with the documented endpoint schemas

## Impact

- `src/mocks/` - All handler files will be updated (paths, methods, response shapes, fixtures)
- `src/mocks/handlers.ts` - Registration handlers must be remapped and new ones registered
- `src/domain/entities.ts` - May need updated types for registration rejection reason
- `docs/api-endpoints.md` or similar - New API reference document
- Any hooks or API clients that reference `/api/collaborators/*` paths may need updating to `/registration/*`