## Why

Hoje não existe um fluxo dedicado para administrar notícias pendentes antes da publicação. Isso força a equipe a tratar revisão e publicação fora da interface admin, reduzindo rastreabilidade e atrasando a aprovação.

## What Changes

- Add an admin page to list news items pending publication/review.
- Allow admins to mark a pending news item as ready to publish.
- Allow admins to mark a news item as needing review again.
- When marking as needing review, require a comment and submit it through a modal.
- Update the admin moderation flow to keep pending items actionable from a single screen.

## Capabilities

### New Capabilities
- `admin-news-publication-review-flow`: Admin workflow for viewing pending news items, approving publication, and sending items back for review with a required comment.

### Modified Capabilities
- None

## Impact

- New admin route/page for pending news moderation.
- News moderation API endpoints and mock handlers.
- News domain/status handling for publication review actions.
- New modal UI for review comments.
