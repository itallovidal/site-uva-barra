## ADDED Requirements

### Requirement: Admin news moderation list displays pending news items

The system SHALL provide an admin page that lists news items pending publication or review in a card-based layout.

#### Scenario: Pending items are shown
- **WHEN** the admin opens the moderation page
- **THEN** the system SHALL fetch and display the pending news items
- **AND** the page SHALL show the total number of pending items

#### Scenario: Empty state is shown
- **WHEN** there are no pending news items
- **THEN** the system SHALL display an empty state message indicating there is nothing to moderate

### Requirement: Admin can approve a pending news item for publication

The system SHALL allow an admin to mark a pending news item as approved for publication from the moderation list.

#### Scenario: Approve action succeeds
- **WHEN** the admin clicks the approve/publish action on a pending news item
- **THEN** the system SHALL submit the approval action for that item
- **AND** remove the item from the pending list after success

#### Scenario: Approve action fails
- **WHEN** the approval request fails
- **THEN** the system SHALL display an error message and keep the item in the list

### Requirement: Admin can request review with a comment

The system SHALL allow an admin to mark a pending news item as needing review again and SHALL require a comment for that action.

#### Scenario: Review comment modal opens
- **WHEN** the admin clicks the needs-review action on a pending news item
- **THEN** the system SHALL open a modal for entering a comment

#### Scenario: Review comment is required
- **WHEN** the admin submits the review action without a comment
- **THEN** the system SHALL block submission and display a validation error

#### Scenario: Review request succeeds
- **WHEN** the admin submits a comment in the modal
- **THEN** the system SHALL submit the review action with the comment
- **AND** remove the item from the pending list after success

#### Scenario: Review request fails
- **WHEN** the review request fails
- **THEN** the system SHALL display an error message and keep the modal state available for correction
