## ADDED Requirements

### Requirement: Use current Phosphor icon names
The system SHALL treat the current Phosphor icon exports as the required icon API for the application.

#### Scenario: New icon usage follows current naming
- **WHEN** a developer adds a new Phosphor icon import
- **THEN** the code SHALL use the current export name, including the `Icon` suffix when applicable

### Requirement: Avoid deprecated Phosphor icon names
The system SHALL prevent introduction of deprecated Phosphor icon names in application code and documentation.

#### Scenario: Deprecated icon is replaced
- **WHEN** an existing icon reference uses a deprecated Phosphor name
- **THEN** the implementation SHALL replace it with the correct current icon export

#### Scenario: Guidance warns about deprecated names
- **WHEN** a developer consults the project guidance
- **THEN** the guidance SHALL explicitly warn that deprecated Phosphor icon names should not be used
