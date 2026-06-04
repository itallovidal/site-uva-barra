## 1. Domain Model Updates

- [x] 1.1 Remove `description` field from `Category` interface in `src/domain/entities.ts`
- [x] 1.2 Remove `description` from all entries in `src/mocks/news-categories-mocks.ts`

## 2. Validation Schema

- [x] 2.1 Create `src/schemas/category-schemas.ts` with `categorySchema` (Zod) requiring non-empty `name`

## 3. Data Fetching Hook

- [x] 3.1 Create `src/hooks/use-categories.ts` with loading/error/data pattern matching `use-collaborators.ts`

## 4. MSW Handlers

- [x] 4.1 Convert `categoriesMock` import to a mutable `categories` array in `src/mocks/handlers.ts`
- [x] 4.2 Add `handleCreateCategory` handler — validates body with `categorySchema`, generates UUID, appends to array, returns 201
- [x] 4.3 Add `handleDeleteCategory` handler — finds and splices by ID, returns 200 or 404
- [x] 4.4 Update `handleCategories` to return the mutable array (not the static import)
- [x] 4.5 Register `POST /api/categories` and `DELETE /api/categories/:id` routes in the handlers array
