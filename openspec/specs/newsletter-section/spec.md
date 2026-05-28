## ADDED Requirements

### Requirement: NewsletterSection renders signup form

The system SHALL provide a `NewsletterSection` component that renders a signup form with gradient background, CTA heading, email input, and submit button.

#### Scenario: Section renders with all elements

- **WHEN** the NewsletterSection component renders
- **THEN** it SHALL display a CTA heading with text "A ética que move o Jornalismo"
- **AND** it SHALL display an email input field
- **AND** it SHALL display a submit button with text "Inscrever-se"

#### Scenario: Section has gradient background

- **WHEN** the NewsletterSection component renders
- **THEN** it SHALL have a CSS background with a 45-degree gradient from a bright red (`#EF4444` / red-500) to a darker red (`#991B1B` / red-800)
- **AND** the text SHALL be white for readability

### Requirement: Email input and form submission

The form SHALL capture an email address and submit it to the newsletter API.

#### Scenario: Successful submission

- **WHEN** the user enters a valid email
- **AND** clicks the submit button
- **THEN** a POST request SHALL be sent to `/newsletter/register` with JSON body `{ "email": "<entered email>" }`
- **AND** a success message SHALL be displayed
- **AND** the input SHALL be cleared

#### Scenario: API error feedback

- **WHEN** the POST request to `/newsletter/register` fails
- **THEN** an error message SHALL be displayed below the form
- **AND** the email input SHALL retain its value so the user can retry

#### Scenario: Loading state during submission

- **WHEN** the form is being submitted
- **THEN** the submit button SHALL show a loading indicator or be disabled
- **AND** the input SHALL be disabled to prevent double submission

### Requirement: NewsletterSection is responsive

The section SHALL adapt to different viewport sizes.

#### Scenario: Desktop layout

- **WHEN** the viewport is 768px or wider
- **THEN** the CTA heading and the input area SHALL be on the same row or centered
- **AND** the section SHALL have increased vertical padding (`py-16` or equivalent)

#### Scenario: Mobile layout

- **WHEN** the viewport is below 768px
- **THEN** the CTA heading SHALL be above the input
- **AND** the input SHALL be full width
- **AND** the section SHALL have `px-4` horizontal padding
