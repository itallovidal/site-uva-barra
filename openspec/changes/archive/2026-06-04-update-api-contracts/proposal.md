## Why

The frontend DTOs and entities are out of sync with the backend API contracts. The backend now uses standardized response wrappers (`ResponsePayload<T>`), typed error codes, and revised entity shapes. The frontend must be updated to match, ensuring type safety and alignment with the API.

## What Changes

- Add `TokenPayloadDTO`, `CreateCategoryRequestDTO`, `UpdateCategoryRequestDTO`, `CreateNewsDTO`, `CreateUserDTO` interfaces
- Update `Category` entity — add `tags: string[]`, remove `description`
- Update `News` entity — `category` replaces `categoryId`, `author` replaces `authorId`, `readingTime` non-nullable
- Update `NewsPreviewDTO` — `category` replaces `categoryName`, `tags: string[]` replaces nested tag objects, `readingTime` non-nullable
- Replace `NewsRequestDTO` with `CreateNewsDTO`
- Replace `UserRequestDTO` with `CreateUserDTO`
- Remove `description` from mock data
- Add `ResponsePayload<T>`, `ErrorPayload`, `MetaApiPayload`, `ErrorCode` types
- Wrap all MSW handler responses in `ResponsePayload` envelope
- Update all hooks to unwrap `ResponsePayload.data`
- Update Zod schemas to match new DTO shapes
- Keep `NewsModerationItemDTO`, `AdminNewsCardDTO`, `NewsReviewRequestDTO`, `RequestLoginDTO` unchanged for admin UI purposes

## Capabilities

### New Capabilities
- `api-response-types`: `ResponsePayload<T>`, `ErrorPayload`, `MetaApiPayload`, `ErrorCode` types

### Modified Capabilities
- `domain-types`: Update `Category`, `News`, `NewsPreviewDTO` shapes; add new DTOs; remove `description`
- `news-schemas`: Replace `newsSchema` with `CreateNewsDTO` shape (`category`, `tags` instead of `categoryId`, `tagIds`)
- `user-schemas`: Replace `registerSchema` with `CreateUserDTO` shape
- `category-schemas`: Add schemas for `CreateCategoryRequestDTO` / `UpdateCategoryRequestDTO`
- `mock-service-worker`: Wrap all responses in `ResponsePayload`; update mock data shapes

## Impact

- `src/domain/entities.ts` — major update: new DTOs, changed entities, removed fields
- `src/domain/constants.ts` — `UserProfessionType` unchanged (already matches backend)
- `src/schemas/news-schemas.ts` — update field names and types
- `src/schemas/user-schemas.ts` — remove `confirmPassword` from schema (backend handles it)
- `src/schemas/category-schemas.ts` — new file
- `src/types/` — new `api-response-types.ts` for `ResponsePayload` family
- `src/mocks/handlers.ts` — all handlers return `ResponsePayload`
- `src/mocks/*.ts` — update mock data shapes
- `src/hooks/*.ts` — unwrap `ResponsePayload.data`
- `src/components/news-form/news-form.tsx` — `Category` type change, schema update
- `src/pages/*.ts` — minor type adjustments
