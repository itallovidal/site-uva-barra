## ADDED Requirements

### Requirement: Vite Build Setup
O sistema SHALL criar um projeto React SPA utilizando Vite como build tool.

#### Scenario: Create Vite Projeto
- **WHEN** user runs `npm create vite@latest <project-name>`
- **THEN** system generates a React + TypeScript template with:
  - `package.json` with Vite dependencies
  - `vite.config.ts` with ES modules configuration
  - `tsconfig.json`, `tsconfig.node.json` for TypeScript
  - ESLint config with React and TypeScript rules
  - `index.html` entry point
- **WHEN** user runs `npm install`
- **THEN** system installs all dependencies without errors
- **WHEN** user runs `npm run dev`
- **THEN** system starts development server with HMR in `/` directory

#### Scenario: Build Success
- **WHEN** user runs `npm run build`
- **THEN** system creates optimized `dist/` folder with:
  - Minified and bundled JavaScript
  - Minified and bundled CSS
  - Asset files copied to `assets/`
- **WHEN** folder `dist/` exists
- **THEN** files are HTML5 compliant with proper meta tags

#### Scenario: TypeScript Compilation
- **WHEN** user writes `.tsx` files
- **THEN** TypeScript compiler processes them to JS
- **WHEN** type errors exist in code
- **THEN** compiler reports errors in terminal and IDE

### Requirement: React Setup
O sistema SHALL criar uma aplicação React com funcionalidades básicas.

#### Scenario: React Mounting
- **WHEN** application loads
- **THEN** root component mounts in `index.html` root element
- **WHEN** component tree renders
- **THEN** DOM elements appear in browser

#### Scenario: Component Lifecycle
- **WHEN** component mounts
- **THEN** React renders component to DOM
- **WHEN** props change
- **THEN** component re-renders with updated values

### Requirement: Project Structure
O sistema SHALL organizar arquivos em estrutura padrão.

#### Scenario: File Organization
- **WHEN** project initializes
- **THEN** created file structure includes:
  - `src/` folder with:
    - `main.tsx` entry point
    - `App.tsx` root component
    - `index.css` global styles
    - `vite-env.d.ts` type declarations
  - `public/` folder with:
    - `favicon.ico` icon
    - `robots.txt` for SEO
  - `package.json` with metadata
  - `tsconfig.json` TypeScript config
- **WHEN** user adds files to `src/`
- **THEN** Vite recognizes and serves them
