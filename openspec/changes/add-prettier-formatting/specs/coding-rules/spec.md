## ADDED Requirements

### Requirement: General coding rules MUST be documented in CODING-RULES.md
A `CODING-RULES.md` file SHALL exist at the project root with consolidated development rules.

#### Scenario: Coding rules file is accessible
- **WHEN** checking project root for `CODING-RULES.md`
- **THEN** file exists and contains development rules

### Requirement: CODING-RULES MUST cover naming conventions
The document SHALL define naming conventions for files, functions, components, and variables.

#### Scenario: Naming conventions are documented
- **WHEN** reading `CODING-RULES.md`
- **THEN** file naming, function naming, and variable naming rules are present

### Requirement: CODING-RULES MUST cover export patterns
The document SHALL define export patterns (named exports, no default exports).

#### Scenario: Export patterns are documented
- **WHEN** reading `CODING-RULES.md`
- **THEN** export conventions (named exports, no `export default`) are specified

### Requirement: CODING-RULES MUST cover formatting standards
The document SHALL reference Prettier as the formatting tool and link to its configuration.

#### Scenario: Formatting standards reference Prettier
- **WHEN** reading `CODING-RULES.md`
- **THEN** Prettier is mentioned as the formatting tool with reference to `.prettierrc`

### Requirement: CODING-RULES MUST cover file structure
The document SHALL define expected file structure and organization patterns.

#### Scenario: File structure guidelines are present
- **WHEN** reading `CODING-RULES.md`
- **THEN** file organization and folder structure rules are documented

### Requirement: openspec/config.yaml MUST contain project context
The `openspec/config.yaml` file SHALL contain general project configuration and context.

#### Scenario: Project context is configured
- **WHEN** reading `openspec/config.yaml`
- **THEN` file contains tech stack, conventions, and project context information

### Requirement: openspec/config.yaml MUST include coding conventions reference
The configuration SHALL reference the coding conventions spec and coding rules document.

#### Scenario: Coding conventions are referenced
- **WHEN** reading `openspec/config.yaml`
- **THEN` coding conventions and rules are mentioned in the context section
