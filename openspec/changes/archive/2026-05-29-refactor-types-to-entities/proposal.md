## Why

The current type system is fragmented and inconsistent — `auth-types.ts`, `team-member-types.ts`, and `news-highlight-types.ts` define overlapping concepts with ad-hoc shapes disconnected from real domain entities. Zod schemas in `auth-schemas.ts` duplicate validation logic without being grounded in canonical types. As the app grows (admin dashboard, news CRUD, user management), this gap between types and domain model will compound into bugs and rework. This change introduces a single source of truth for domain entities and DTOs, then derives Zod schemas and updates all consumers to use them.

## What Changes

- Replace `src/types/auth-types.ts` with new domain entities/constants at `src/domain/constants.ts` and `src/domain/entities.ts`
- Remove `src/types/team-member-types.ts` and `src/types/news-highlight-types.ts` (folded into domain entities)
- Remove `src/schemas/auth-schemas.ts` and replace with `src/schemas/user-schemas.ts` and `src/schemas/news-schemas.ts` using Zod schemas derived from domain types
- Update `src/mocks/handlers.ts` to use the new DTOs for responses
- Update `src/mocks/*.ts` mock data to conform to new entity/DTO shapes
- Update login/signup forms to use new DTOs (`RequestLoginDTO`, `UserRequestDTO`)
- Update `src/hooks/use-collaborators.ts` to use the new `User` entity
- Update `src/components/sobre/team-section.tsx` and related UI to use `User` entity

## Capabilities

### New Capabilities
- `domain-types`: Core domain entities (`User`, `News`, `Category`), constants (`UserRole`, `UserProfession`, `NewsStatus`, `UserStatus`), and request/response DTOs — the single source of truth for all type definitions
- `user-schemas`: Zod schemas for user operations (login, signup) derived from domain types
- `news-schemas`: Zod schemas for news creation/update derived from domain types

### Modified Capabilities
- `auth-pages`: Forms and types updated to use `RequestLoginDTO` and `UserRequestDTO` from domain types
- `mock-service-worker`: Handlers and mock data updated to return domain DTOs (NewsPreviewDTO, UserProfileDTO)
- `team-list` / `sobre-page`: Team member display updated from `TeamMember` to `User` entity
- `news-highlight`: News data display updated from `NewsHighlight` to `NewsPreviewDTO`

## Impact

- `src/types/` — `auth-types.ts`, `team-member-types.ts`, `news-highlight-types.ts` removed; `nav-bar-types.ts` untouched
- `src/schemas/` — `auth-schemas.ts` replaced by `user-schemas.ts` and `news-schemas.ts`
- `src/domain/` — new directory with `constants.ts` and `entities.ts`
- All mock files, forms, and hooks that reference old types must be updated
- No runtime breaking changes — all changes are type-system and mock-data refactoring
