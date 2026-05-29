## 1. Domain Foundation

- [x] 1.1 Create `src/domain/constants.ts` with `UserRole`, `UserProfession`, `NewsStatus`, `UserStatus` as const objects and their derived union types
- [x] 1.2 Create `src/domain/entities.ts` with `User`, `Category`, `News` entities and `RequestLoginDTO`, `UserRequestDTO`, `NewsRequestDTO`, `NewsPreviewDTO`, `UserProfileDTO` DTOs using the constant types from `constants.ts`

## 2. Zod Schemas

- [x] 2.1 Create `src/schemas/user-schemas.ts` with `loginSchema` and `signupSchema` — schemas validate the shape of domain DTOs without inferring types; forms use domain DTOs directly as `useForm` generics
- [x] 2.2 Create `src/schemas/news-schemas.ts` with `newsSchema` — Zod schema for `NewsRequestDTO` validation; forms use `NewsRequestDTO` directly

## 3. Mock Data Updates

- [x] 3.1 Update `src/mocks/news-highlight-mocks.ts` to export `NewsPreviewDTO[]` — rename `imageUrl` to `coverImageUrl`, `category` to `categoryName`, add `tags`, `featured`, `readingTime`, `publishedAt`, `authorName` fields
- [x] 3.2 Update `src/mocks/news-category-mocks.ts` to export `NewsPreviewDTO[]` — same field mapping as 3.1
- [x] 3.3 Update `src/mocks/team-members-mocks.ts` to export `UserProfileDTO[]` — map `role` to `profession`, add `bio`, `avatarUrl`; remove `category`
- [x] 3.4 Update `src/mocks/handlers.ts` — imports from new domain types; response types updated to match new DTOs

## 4. Form Updates

- [x] 4.1 Update `src/pages/login-page.tsx` — import `RequestLoginDTO` from `@/domain/entities` instead of `@/types/auth-types`; import `loginSchema` from `@/schemas/user-schemas`
- [x] 4.2 Update `src/pages/signup-page.tsx` — replace `RequestSignupDTO` with `UserRequestDTO`; replace `ROLES` constant and role dropdown with `UserProfession`-based profession dropdown; import schemas from `@/schemas/user-schemas`

## 5. Component Updates

- [x] 5.1 Update `src/components/home/news-highlight-card.tsx` — accept `NewsPreviewDTO` instead of `NewsHighlight`; map fields (`coverImageUrl`, `categoryName`, `authorName`, `publishedAt`)
- [x] 5.2 Update `src/components/home/news-highlight-grid.tsx` — accept `NewsPreviewDTO[]` instead of `NewsHighlight[]`
- [x] 5.3 Update `src/components/sobre/team-section.tsx` — accept `UserProfileDTO[]` instead of `TeamMember[]`; group by profession-mapped categories
- [x] 5.4 Update `src/components/sobre/team-member-card.tsx` — accept `UserProfileDTO` instead of `TeamMember`; display `profession`, `bio`, `avatarUrl`

## 6. Hook Updates

- [x] 6.1 Update `src/hooks/use-collaborators.ts` — import `UserProfileDTO` from domain types; fetch and return `UserProfileDTO[]`
- [x] 6.2 Update `src/hooks/use-news-by-category.ts` — import `NewsPreviewDTO` from domain types; fetch and return `NewsPreviewDTO[]`

## 7. Cleanup

- [x] 7.1 Remove `src/types/auth-types.ts`
- [x] 7.2 Remove `src/types/team-member-types.ts`
- [x] 7.3 Remove `src/types/news-highlight-types.ts`
- [x] 7.4 Remove `src/schemas/auth-schemas.ts`
- [x] 7.5 Run `npm run typecheck` and `npm run lint` to verify no type errors or broken imports
