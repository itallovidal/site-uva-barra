## 1. Spec and API alignment

- [x] 1.1 Define the pending-news moderation data shape and API contract for list, publish, and request-review actions
- [x] 1.2 Add or update mock handlers for the pending-news endpoints used by the admin page

## 2. Admin moderation UI

- [x] 2.1 Create the admin pending-news page with loading, error, and empty states
- [x] 2.2 Render each pending news item in a card-based list with publish and needs-review actions
- [x] 2.3 Show the pending item count in the page header
- [x] 2.4 Add a preview action that opens a markdown-rendered modal for the article body

## 3. Review comment modal

- [x] 3.1 Implement a modal form for entering the review comment
- [x] 3.2 Validate that the review comment is required before submission
- [x] 3.3 Submit the review action and remove the item from the list on success

## 4. Publish action behavior

- [x] 4.1 Wire the publish action to the approval endpoint
- [x] 4.2 Remove the item from the list after a successful publish action
- [x] 4.3 Display error feedback when publish or review submission fails

## 5. Verification

- [x] 5.1 Verify the change files are complete and the OpenSpec status marks tasks as ready for apply
- [x] 5.2 Verify the preview modal renders the article body with React Markdown and the required header
