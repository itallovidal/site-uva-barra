## ADDED Requirements

### Requirement: Named functions over arrow functions
All functions and components in the application SHALL be declared as named functions using the `function` keyword. Arrow functions (`=>`) SHALL NOT be used for function declarations, component definitions, or method implementations.

#### Scenario: Component declaration
- **WHEN** a developer creates a new React component
- **THEN** the component SHALL be declared as `function ComponentName(props) { ... }` and NOT as `const ComponentName = () => { ... }`

#### Scenario: Utility function declaration
- **WHEN** a developer creates a utility or helper function
- **THEN** the function SHALL be declared as `function functionName(params) { ... }` and NOT as `const functionName = (params) => { ... }`

#### Scenario: Callback functions
- **WHEN** a developer writes a callback function passed as an argument
- **THEN** the callback SHALL be a named function declared with the `function` keyword, not an inline arrow function

### Requirement: kebab-case file naming
All source code files SHALL be named using kebab-case (lowercase words separated by hyphens). File extensions SHALL be lowercase.

#### Scenario: Component file naming
- **WHEN** a developer creates a new component file
- **THEN** the file name SHALL use kebab-case (e.g., `user-profile.tsx`, `auth-service.ts`, `nav-bar.tsx`)

#### Scenario: Utility file naming
- **WHEN** a developer creates a utility or configuration file
- **THEN** the file name SHALL use kebab-case (e.g., `string-utils.ts`, `api-client.ts`)

#### Scenario: Invalid file name rejection
- **WHEN** a file name contains uppercase letters, uses snake_case, or uses PascalCase
- **THEN** the file name SHALL be considered non-compliant and must be renamed before merge

### Requirement: Named exports only, no default exports
All modules SHALL use named exports exclusively. The `export default` syntax SHALL NOT be used for any module export.

#### Scenario: Component export
- **WHEN** a developer exports a React component
- **THEN** the component SHALL use `export function ComponentName()` or `export const ComponentName = ...` and NOT `export default ComponentName`

#### Scenario: Function export
- **WHEN** a developer exports a utility function
- **THEN** the function SHALL use `export function functionName()` and NOT `export default functionName`

#### Scenario: Import usage
- **WHEN** a developer imports from a module
- **THEN** the import SHALL use named import syntax `import { ComponentName } from './componentFile'` and NOT `import ComponentName from './componentFile'`
