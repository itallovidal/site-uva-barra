## ADDED Requirements

### Requirement: Slider renders children as slides

The system SHALL provide a `Slider` component that accepts arbitrary React children and renders each child as an individual slide in a keen-slider carousel.

#### Scenario: Children render as slides

- **WHEN** the Slider component receives 4 child elements
- **THEN** the component SHALL render a keen-slider container
- **AND** 4 slide items SHALL be rendered inside the container, one per child

#### Scenario: Single child renders as single slide

- **WHEN** the Slider component receives 1 child element
- **THEN** the component SHALL render a single slide

### Requirement: Slider supports navigation arrows

The Slider SHALL render previous and next arrow buttons positioned on the left and right sides of the slider.

#### Scenario: Navigate to next slide

- **WHEN** the user clicks the next arrow button
- **THEN** the slider SHALL animate to the next slide

#### Scenario: Navigate to previous slide

- **WHEN** the user clicks the previous arrow button
- **THEN** the slider SHALL animate to the previous slide

#### Scenario: Arrows hide at boundaries

- **WHEN** the slider is at the first slide
- **THEN** the previous arrow SHALL be hidden or disabled
- **WHEN** the slider is at the last slide
- **THEN** the next arrow SHALL be hidden or disabled

### Requirement: Slider supports dot indicators

The Slider SHALL render dot indicators below the slides showing the current position.

#### Scenario: Dots reflect current slide

- **WHEN** the slider moves to slide index 2
- **THEN** the third dot indicator SHALL be highlighted as active

#### Scenario: Click dot navigates to slide

- **WHEN** the user clicks the third dot indicator
- **THEN** the slider SHALL navigate to slide index 2
