## MODIFIED Requirements

### Requirement: Redirect after successful creation

The system SHALL redirect to the admin news listing page with the unpublished filter active after successfully creating a news article.

#### Scenario: Successful creation redirects to unpublished list

- **WHEN** the create news form submits successfully and receives a response with a valid `data.id`
- **THEN** the system SHALL navigate to `/admin/news?status=unpublished`
- **AND** the news listing page SHALL initialize the status filter based on the `status` query parameter

### Requirement: Successful submission shows feedback

The system SHALL display a success toast/message and redirect to the unpublished listing after a news article is created.

#### Scenario: Success message shown before redirect

- **WHEN** `onSubmit` resolves successfully
- **THEN** the system SHALL display a success toast/message
- **AND** redirect to `/admin/news?status=unpublished`
