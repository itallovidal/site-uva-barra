## Context

The frontend currently defines its own DTOs and entities independently from the backend. The backend now exposes a standardized API contract: all endpoints return a `ResponsePayload<T>` wrapper (`{ status, data?, error?, meta? }`) with typed error codes. Additionally, several entity shapes changed (Category gains `tags`, News replaces `categoryId`/`authorId` with `category`/`author`, etc.). The frontend must align to remain compatible.

## Goals / Non-Goals

**Goals:**
- Mirror all backend DTOs and entities exactly as provided
- Introduce `ResponsePayload<T>` generic wrapper type
- Wrap all MSW handler responses in `ResponsePayload`
- Update all data-fetching hooks to unwrap `ResponsePayload.data`
- Update Zod schemas to match new DTO shapes
- Update mock data to match new shapes

**Non-Goals:**
- Do NOT change the UI layout or component structure
- Do NOT introduce a real backend client (MSW remains the mock layer)
- Do NOT remove admin-only DTOs (`NewsModerationItemDTO`, `AdminNewsCardDTO`, `NewsReviewRequestDTO`) — they remain for internal admin display
- Do NOT touch auth/login flow beyond aligning `CreateUserDTO`

## Decisions

| Decision | Rationale |
|----------|-----------|
| New file `src/types/api-response-types.ts` for `ResponsePayload` family | Keeps `entities.ts` focused on domain models. Follows separation of concerns. |
| Keep `NewsModerationItemDTO` / `AdminNewsCardDTO` as-is | They are admin display DTOs, not API contracts. Avoids unnecessary churn. |
| Remove `confirmPassword` from `registerSchema` | Backend `CreateUserDTO` has no `confirmPassword`. The frontend form will handle confirmation locally before submitting. |
| `CreateUserDTO` replaces `UserRequestDTO` | Backend uses `CreateUserDTO` name. Inline with REST conventions. |
| All MSW handlers wrap response in `ResponsePayload` | Matches backend exactly. Hooks unwrap `data` field. |

## Risks / Trade-offs

- **[Medium]** Every hook must be updated to unwrap `ResponsePayload.data`. If any hook is missed, runtime `undefined` errors occur. → Mitigation: systematic grep of `/api/` in hooks, verify each one.
- **[Low]** `refactor-category-domain` change independently modifies `Category` entity. This change also touches `Category`. → Mitigation: coordinate order — apply `update-api-contracts` second, or merge the Category changes from both.
