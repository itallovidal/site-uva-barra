## Context

Currently, categories are defined as an interface with `id`, `name`, `description`, and `createdAt`. They are served via a single read-only MSW handler that returns a static mock array. There is no Zod schema, no mutation handlers, and no dedicated hook. Other domains (collaborators, news) follow a consistent pattern: entity → schema → mock data → MSW handlers → custom hook (when needed) → component/page. Categories are the last domain not aligned with this pattern.

The project uses MSW with in-mutable mutable arrays for "database" operations (see collaborator and news domains). Categories will follow the same approach.

## Goals / Non-Goals

**Goals:**
- Simplify `Category` entity to `id`, `name`, `createdAt` only
- Create a Zod schema for category creation validation
- Add CRUD operations: `POST /api/categories`, `GET /api/categories`, `DELETE /api/categories/:id`
- Use a mutable in-memory array (matching collaborator pattern) for mock data
- Follow the same project conventions as other domains (named exports, kebab-case, etc.)

**Non-Goals:**
- Do NOT change how categories are consumed by news-related components (`CategorySection`, `useNewsByCategory`, `news-category-page`)
- Do NOT introduce a backend API — MSW remains the data layer
- Do NOT create a category admin page or form (only API-level handlers)

## Decisions

| Decision | Rationale |
|----------|-----------|
| Mutable in-memory array for "database" | Matches existing collaborator pattern (`pendingRequests`). Simple, consistent, no new patterns. |
| Zod schema with `categorySchema` | Matches existing pattern (`news-schemas.ts`, `user-schemas.ts`). Provides validation on creation. |
| Separate `category-schemas.ts` file | Keeps schemas organized per domain. Follows existing convention. |
| `useCategories` hook | Provides consistent data-fetching interface (loading/error/data pattern). Other domains use hooks for GET data. |
| DELETE by `id` param (`/api/categories/:id`) | Matches `DELETE /api/collaborators/:id` pattern. REST conventions. |
| Category entity keeps `id: string` (generated via `crypto.randomUUID()`) | Matches how collaborator/news entities generate IDs in MSW handlers. |

## Risks / Trade-offs

- **[Low risk]** Removing `description` from `Category` entity is a **BREAKING** change for any code referencing `Category.description`. The proposal confirmed only `categoriesMock` references it — no runtime impact.
- **[Low risk]** MSW handlers are dev-only. Tests that hit real endpoints will need their own setup.
