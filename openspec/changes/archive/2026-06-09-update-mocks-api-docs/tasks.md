## 1. Fix Login Mock

- [x] 1.1 Update `src/mocks/user/login.ts` to accept `admin@email.com` / `admin123` credentials instead of `admin@gmail.com` / `senha123`
- [x] 1.2 Update `src/mocks/user/user-fixtures.ts` to set `email: 'admin@email.com'` for `userExample`

## 2. Remap Registration Handlers to /registration/* Paths

- [x] 2.1 Rename `src/mocks/collaborators/get-collaborator-requests.ts` to handle `GET /registration/requests` with `status`, `page`, `perPage` query params and pagination meta in response
- [x] 2.2 Rename `src/mocks/collaborators/approve-collaborator.ts` to handle `POST /registration/:id/approve`
- [x] 2.3 Add new handler `src/mocks/registration/reject-registration.ts` for `POST /registration/:id/reject` with optional `{ reason }` body and authentication check
- [x] 2.4 Add new handler `src/mocks/registration/create-registration.ts` for `POST /registration/` (public, no auth) with email duplicate check and 409 response
- [x] 2.5 Move registration state (`pendingRequests`) from `src/mocks/collaborators/collaborators-state.ts` into a new `src/mocks/registration/registration-state.ts` file, shared between approve/reject/create handlers
- [x] 2.6 Update `src/mocks/handlers.ts` to import from new paths and remove old `/api/collaborators/*` handler imports

## 3. Fix News Search Handler

- [x] 3.1 Update `src/mocks/news/search-news.ts` to change from `POST /news/search` to `GET /news/search` with query params (`q`, `order`, `page`, `perPage`)
- [x] 3.2 Add validation: return 400 with `VALIDATION_ERROR` when `q` param is missing
- [x] 3.3 Add `order=oldest` sorting support (default is newest first)

## 4. Add Status Filter to News Listing

- [x] 4.1 Update `src/mocks/news/get-news-listing.ts` to support `status` query param: `published`, `unpublished` (returns draft+review), `draft`, `review`
- [x] 4.2 Ensure `status=unpublished` requires authentication check (return 401 if missing token)

## 5. Fix Categories Mock to Use State Array

- [x] 5.1 Update `src/mocks/categories/get-categories.ts` to import and return the `categories` array from `categories-state.ts` instead of the single `categoryExample` fixture

## 6. Create API Endpoints Documentation

- [x] 6.1 Create `docs/api-endpoints.md` with all documented endpoints grouped by resource (User, Registration, News, Categories)
- [x] 6.2 Document each endpoint with: method, path, auth requirement, request body schema, response shape, and example payloads
- [x] 6.3 Include error response shapes (400, 401, 404, 409) for each endpoint group

## 7. Update Existing Specs

- [x] 7.1 Update `openspec/specs/mock-service-worker/spec.md` with the modified requirements from this change (registration paths, news search method, status filters, new handlers)
- [x] 7.2 Update `openspec/specs/domain-types/spec.md` if any type changes are needed for registration rejection reason

## 8. Verification

- [x] 8.1 Run `npm run lint` or `npx eslint src/mocks/` to ensure no lint errors
- [x] 8.2 Run `npx tsc --noEmit` to check TypeScript compilation
- [x] 8.3 Manually verify mock handlers work by starting dev server and testing key flows
