## ADDED Requirements

### Requirement: Component directory structure

The system SHALL organize components under `src/components/` into three categories: library primitives, page-scoped components, and global components. This structure SHALL be documented in the project's `CODING-RULES.md` under the File Structure section.

#### Scenario: Developer consults CODING-RULES.md

- **WHEN** a developer reads the File Structure section of `CODING-RULES.md`
- **THEN** the section SHALL describe the three-category component structure with examples for each category

#### Scenario: Structure matches spec

- **WHEN** the File Structure section in `CODING-RULES.md` is written
- **THEN** its rules SHALL not contradict the `component-structure` spec requirements
