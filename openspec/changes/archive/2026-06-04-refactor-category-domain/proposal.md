## Why

Category controllers and services are implemented inline without following the domain patterns used across the rest of the codebase. Categories need to be simplified to just a name field, with minimal CRUD operations (create, list all, delete), matching the lightweight document-oriented storage approach.

## What Changes

- Create a dedicated category entity simplified to only `id`, `name`, and `createdAt`
- Remove `description` field from the Category entity
- Add Zod validation schema for category input
- Create MSW handlers for `POST /api/categories`, `GET /api/categories`, `DELETE /api/categories/:id`
- Refactor `handleCategories` to use a mutable in-memory array (matching collaborator pattern)
- Update `categoriesMock` to remove `description` field
- Keep existing `CategorySection`, `useNewsByCategory`, and `news-category-page` unchanged — they consume category-based data, not the category entity itself

## Capabilities

### New Capabilities
- `category-schemas`: Zod validation schema for category creation (name required)

### Modified Capabilities
- `domain-types`: Update `Category` entity — remove `description` field
- `mock-service-worker`: Add POST and DELETE handlers for `/api/categories`; update `handleCategories` to mutable array

## Impact

- `src/domain/entities.ts` — `Category` interface: remove `description`
- `src/mocks/news-categories-mocks.ts` — remove `description` from entries
- `src/mocks/handlers.ts` — replace read-only `handleCategories` with mutable array + CRUD handlers; register new routes
- `src/schemas/` — new file `category-schemas.ts`
