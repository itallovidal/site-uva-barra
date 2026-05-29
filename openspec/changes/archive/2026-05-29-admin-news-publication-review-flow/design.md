## Context

The admin area already has a news creation flow and a shared news preview model, but there is no dedicated moderation surface for items waiting to be published. The existing collaborator requests page provides a useful interaction pattern for listing pending items with per-item actions.

## Goals / Non-Goals

**Goals:**
- Provide a dedicated admin view for pending news moderation.
- Support two moderation outcomes: approve for publication and send back for review.
- Require a comment when sending an item back for review.
- Keep the workflow lightweight and consistent with current admin pages.

**Non-Goals:**
- Redesign the full news editor.
- Add multi-step approval chains or role-based assignment.
- Implement a full audit history UI for moderation decisions.

## Decisions

- Use a dedicated admin page rather than extending the creation screen.
  - Rationale: moderation is a separate operational task and should not be hidden inside content creation.
  - Alternative considered: add actions to the news create/edit flow. Rejected because it mixes authoring and moderation concerns.
- Use a modal for the review comment form.
  - Rationale: the comment is a secondary action and modal keeps the list visible while collecting the note.
  - Alternative considered: inline expansion per row. Rejected because it adds visual noise and makes the list harder to scan.
- Model moderation as explicit API actions for publish and request-review.
  - Rationale: distinct endpoints keep intent clear and make the UI states predictable.
  - Alternative considered: a single generic status update endpoint with optional comment. Rejected because the review-comment requirement would be less explicit.
- Reuse the existing admin card/list patterns where possible.
  - Rationale: minimizes new UI complexity and keeps the admin experience consistent.

## Risks / Trade-offs

- [Risk] Pending news data shape may be unclear until backend contracts are finalized → Mitigation: define the expected fields in the new spec and keep the page tolerant of missing optional display data.
- [Risk] Comment validation could block quick moderation if over-constrained → Mitigation: keep validation minimal and require only a non-empty comment for review requests.
- [Risk] Separate publish/review endpoints may diverge from backend implementation details → Mitigation: align mocks and route handlers to the same action names used in the UI.
