## ADDED Requirements

### Requirement: Source directory structure
The project SHALL follow a standardized directory structure under `src/` with dedicated folders for components, pages, routes, and types.

#### Scenario: Directory structure exists
- **WHEN** the project is scaffolded
- **THEN** the directories `src/components/`, `src/pages/`, `src/routes/`, and `src/types/` exist

### Requirement: Entry point configuration
The application SHALL have a `main.tsx` entry point that renders the React app into the DOM.

#### Scenario: App mounts to DOM
- **WHEN** the application loads in the browser
- **THEN** `main.tsx` renders the `App` component into the `#root` element

### Requirement: Root App component
The project SHALL have an `App.tsx` component that sets up the router and renders route-based content.

#### Scenario: App component renders routes
- **WHEN** the `App` component mounts
- **THEN** it renders the router configuration with defined routes

### Requirement: TypeScript path aliases (optional)
The project SHOULD support absolute imports using path aliases (e.g., `@/components` mapping to `src/components`).

#### Scenario: Absolute import resolves
- **WHEN** a file imports from `@/components/Foo`
- **THEN** TypeScript and Vite resolve it to `src/components/Foo`
