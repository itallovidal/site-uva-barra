## Context

The project currently has 3 fragmented type files (`auth-types.ts`, `team-member-types.ts`, `news-highlight-types.ts`) and 1 Zod schema file (`auth-schemas.ts`). The types are ad-hoc and don't map to a consistent domain model. Mocks return shapes close to but not exactly matching any canonical type. The signup form references `ROLES` from `auth-types.ts` which doesn't align with the `UserProfession` constant from the new domain model.

This design establishes a `src/domain/` directory as the single source of truth, then rebuilds schemas, mocks, and UI on top of it.

## Goals / Non-Goals

**Goals:**
- Create canonical domain entities (`User`, `News`, `Category`) and constants (`UserRole`, `UserProfession`, `NewsStatus`, `UserStatus`) in `src/domain/`
- Create request/response DTOs that map to API contracts
- Zod schemas derive types from domain entities (not the reverse)
- Update all mocks to return proper domain DTOs
- Update form handlers to submit correct DTOs
- Remove all old type files and schemas

**Non-Goals:**
- No actual API integration or backend calls — mocks remain the data source
- No new pages or components beyond updating existing ones
- No state management changes
- No routing changes
- No changes to `nav-bar-types.ts`

## Decisions

1. **Domain types first, Zod derives from them** — The user explicitly wants domain entities as the truth; Zod schemas use `satisfies` or `z.custom()` / manual `z.object()` that maps to the interface, with the form using the domain type (not `z.infer`). This avoids duplication.
2. **Constants as `as const` objects** — Uses the exact pattern provided (e.g., `export const UserRole = { ... } as const`), with derived union types. No `enum` to keep bundle size small and align with existing codebase patterns.
3. **DTOs in the same file as entities** — `src/domain/entities.ts` will contain both entities and DTOs since they share the same constants. The file is <200 lines and splitting would add import complexity without benefit.
4. **Separate schemas by domain concern** — `user-schemas.ts` for auth forms, `news-schemas.ts` for news forms. This mirrors the two feature areas consuming them.
5. **Mock data updated inline** — Rather than creating a new mock factory, existing mock files get their data objects updated to match new DTO shapes. Minimal diff, same structure.
6. **`RequestSignupDTO` becomes `UserRequestDTO`** — The old DTO `RequestSignupDTO` is replaced by `UserRequestDTO` from the new domain, which includes the `profession` field instead of the old `role` field. The form's `role` combobox will be renamed to `profession` and use `UserProfession` values.

## Risks / Trade-offs

- [Risk] Renaming `role` to `profession` in the signup form is a visible change — the combobox label and placeholder must also update → Mitigation: update UI text at the same time
- [Risk] Existing `TeamMember` type uses `category` (Redação/Criação/Desenvolvimento) which doesn't map 1:1 to `UserProfession` → Mitigation: map `TeamMember.category` to `User.profession` with a reasonable mapping (e.g., "Desenvolvimento" → `desenvolvedor`) and keep `TeamMember.name/role` as `User.name` and `User.bio` respectively
- [Risk] `NewsHighlight` type currently has `imageUrl`, `category` (string) — the new `NewsPreviewDTO` has `coverImageUrl`, `categoryName`, `tags` array, etc. → Mitigation: `NewsPreviewDTO` is superset-compatible; add the missing fields at the component usage sites
