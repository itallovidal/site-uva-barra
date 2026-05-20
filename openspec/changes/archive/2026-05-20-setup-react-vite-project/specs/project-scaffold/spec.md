## ADDED Requirements

### Requirement: Vite project initialization
The project SHALL be initialized with Vite as the build tool using the React template with TypeScript.

#### Scenario: Dev server starts
- **WHEN** the `dev` script is executed
- **THEN** Vite starts a development server with HMR enabled on a local port

#### Scenario: Production build succeeds
- **WHEN** the `build` script is executed
- **THEN** Vite produces an optimized production bundle in the `dist/` directory

### Requirement: TypeScript configuration
The project SHALL use TypeScript with strict mode enabled for all source files.

#### Scenario: Type checking passes
- **WHEN** the `tsc --noEmit` command is run
- **THEN** no type errors are reported for the source code

#### Scenario: Strict null checks enforced
- **WHEN** a variable is declared without initialization
- **THEN** TypeScript reports an error unless the type explicitly allows undefined

### Requirement: React with JSX support
The project SHALL support React components written in TSX (TypeScript + JSX).

#### Scenario: TSX files compile
- **WHEN** a `.tsx` file contains valid React component code
- **THEN** Vite compiles it without errors

### Requirement: NPM scripts
The project SHALL provide standard npm scripts for development, building, and preview.

#### Scenario: All scripts are available
- **WHEN** `npm run` is executed
- **THEN** the scripts `dev`, `build`, `preview`, and `lint` are listed and functional
