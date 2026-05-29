## Context

The admin area already has a moderation page with article cards, preview, publish, and request-review actions. Published articles need a separate semantic listing route so editors can manage live content without mixing it into the moderation queue.

## Goals / Non-Goals

**Goals:**
- Add a semantic route for published articles
- Keep the UI consistent with the existing moderation flow
- Add an explicit unpublish action for published articles
- Limit the list to already published articles and show only valid controls for that state

**Non-Goals:**
- Full article editing or deletion
- Bulk operations across multiple articles
- A redesign of the admin shell or navigation

## Decisions

- Build a dedicated `/admin/articles/published` page instead of reusing the approval route. The published view is narrower than moderation and should read as a separate admin task.
- Reuse the existing article card pattern with optional actions instead of duplicating markup. That keeps preview, loading, and status presentation aligned across admin screens.
- Add a dedicated unpublish action path rather than overloading the publish flow. The semantics stay clear and the UI can show the correct control for published items.
- Keep the same loading, empty, and error state patterns used by other admin pages so the area feels uniform.
- Preserve the moderation page separately for publish and request-review actions.

## Risks / Trade-offs

- [Status/action mismatch] Wrong actions could appear for a given article state -> Restrict the route to published articles and hide irrelevant actions at the page boundary.
- [API alignment] The backend or mock layer may not expose unpublish yet -> Introduce the action contract first and wire the UI after the endpoint is available.
- [Shared component coupling] Reusing the moderation card could affect the approval page -> Keep actions optional and page-specific so each route chooses its own controls.

## Migration Plan

1. Add the article list spec.
2. Add the unpublish API or MSW contract.
3. Implement the shared card/action behavior and the `/admin/articles/published` page.
4. Wire the new route without changing the existing moderation route.
5. Verify preview and unpublish flows for published articles in the admin UI.

Rollback: remove the new route and unpublish wiring if the new flow needs to be disabled.

## Open Questions

- What is the final backend path for unpublish if the current API naming differs?
