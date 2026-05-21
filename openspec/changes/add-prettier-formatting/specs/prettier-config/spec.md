## ADDED Requirements

### Requirement: Prettier MUST be installed as dev dependency
The project SHALL have Prettier installed in `devDependencies` via npm.

#### Scenario: Prettier is available in project
- **WHEN** running `npm list prettier`
- **THEN** Prettier is listed as a dev dependency

### Requirement: Prettier configuration file MUST exist at project root
A `.prettierrc` file SHALL exist at the project root with formatting rules.

#### Scenario: Configuration file is present
- **WHEN** checking project root for `.prettierrc`
- **THEN** file exists and contains valid JSON configuration

### Requirement: Prettier MUST format with print width of 100
All formatted code SHALL use a maximum line width of 100 characters.

#### Scenario: Long lines are wrapped
- **WHEN** a line exceeds 100 characters
- **THEN** Prettier wraps the line at the appropriate break point

### Requirement: Prettier MUST use single quotes
String literals SHALL use single quotes instead of double quotes.

#### Scenario: Strings use single quotes
- **WHEN** code contains string literals
- **THEN** all strings use single quotes (`'`) not double quotes (`"`)

### Requirement: Prettier MUST use 2-space indentation
Code SHALL be indented with 2 spaces per level.

#### Scenario: Indentation is 2 spaces
- **WHEN** code is formatted
- **THEN** each indentation level uses exactly 2 spaces

### Requirement: Prettier MUST add trailing commas for ES5
Trailing commas SHALL be added in arrays and objects where valid in ES5.

#### Scenario: Trailing commas in multiline structures
- **WHEN** an array or object spans multiple lines
- **THEN** the last item has a trailing comma

### Requirement: Prettier MUST use semicolons
Statements SHALL end with semicolons.

#### Scenario: Semicolons are present
- **WHEN** code is formatted
- **THEN** all statements end with semicolons

### Requirement: Format script MUST exist in package.json
A `format` script SHALL exist in `package.json` that runs Prettier.

#### Scenario: Format script runs successfully
- **WHEN** running `npm run format`
- **THEN** Prettier formats all matching files in the project

### Requirement: Format script MUST target source files
The format script SHALL apply to `src/**/*.{ts,tsx,js,jsx,json,css,md}` files.

#### Scenario: Source files are formatted
- **WHEN** running `npm run format`
- **THEN** all TypeScript, JavaScript, JSON, CSS, and Markdown files in `src/` are formatted
