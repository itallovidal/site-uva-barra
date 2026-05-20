## ADDED Requirements

### Requirement: Tailwind Config Setup
O sistema SHALL configurar Tailwind CSS como motor de estilização.

#### Scenario: Install Dependencies
- **WHEN** user installs Tailwind
- **THEN** system installs and configures:
  - `tailwindcss` CLI and core packages
  - `postcss` CSS processor
  - `autoprefixer` for vendor prefixes
- **WHEN** user runs setup script
- **THEN** system creates:
  - `tailwind.config.js` with plugin imports
  - `postcss.config.js` with plugin definitions
  - `tsconfig.json` path aliases

#### Scenario: Content Paths
- **WHEN** tailwind config defines `content` array
- **THEN** paths include: `./src/**/*.{js,jsx,ts,tsx,html}`
- **WHEN** paths include Shadcn components
- **THEN** config includes `../../node_modules/@radix-ui/**/*` for Radix primitives
- **WHEN** paths include custom files
- **THEN** any `.css`, `.scss`, `.sass` files are scanned

#### Scenario: Directives
- **WHEN** CSS processes with Tailwind
- **THEN** `@tailwind base` directive injects base styles
- **WHEN** CSS processes with Tailwind
- **THEN** `@tailwind components` directive injects component styles
- **WHEN** CSS processes with Tailwind
- **THEN** `@tailwind utilities` directive injects utility classes
- **WHEN** directives appear in order
- **THEN** Tailwind processes them correctly

#### Scenario: Custom Config
- **WHEN** developer customizes Tailwind config
- **THEN** theme extends with custom colors/typography
- **WHEN** plugin is added
- **THEN** plugin functions register additional utilities

### Requirement: Plugin Configuration
O sistema SHALL configurar plugins recomendados.

#### Scenario: Shadcn Integration
- **WHEN** Shadcn components rendered
- **THEN** Tailwind generates CSS based on utility classes used
- **WHEN** `radix-ui` theme configures
- **THEN** tailwind config imports from `./src/theme.config.js`
- **WHEN** `extend` directive customizes
- **THEN** existing CSS customizes without overriding

#### Scenario: Import Map
- **WHEN** Tailwind imports from `@tailwindcss`
- **THEN** CSS directives inject into output
- **WHEN** CSS minifier runs
- **THEN** injected CSS inlines utility classes

### Requirement: CSS Purge
O sistema SHALL eliminar CSS não utilizado.

#### Scenario: Unused Classes Removal
- **WHEN** build runs with PurgeCSS
- **THEN** classes not used in content paths get removed
- **WHEN** class used in component
- **THEN** corresponding utility appears in output
- **WHEN** class never used
- **THEN** generated CSS omits related utilities

### Requirement: Asset Processing
O sistema SHALL processar e otimizar assets.

#### Scenario: Image Optimization
- **WHEN** image imports in JSX
- **THEN** Vite optimizes and hashes filename
- **WHEN** asset imported
- **THEN** Tailwind generates responsive image classes
- **WHEN** `fill` and `mask` properties exist
- **THEN** SVG/emoji render correctly

#### Scenario: Font Handling
- **WHEN** font-family defined in config
- **THEN** CSS imports font with `url()`
- **WHEN** font subsetting enabled
- **THEN** bundle includes only used glyphs
- **WHEN** font preloading configured
- **THEN** font loads as soon as possible

### Requirement: JIT Mode Configuration
O sistema SHALL configurar just-in-time compilation.

#### Scenario: Custom Utilities Definition
- **WHEN** developer defines custom utilities
- **THEN** Tailwind generates them upon use
- **WHEN** `@apply` directive exists
- **THEN** Tailwind compiles to simplified CSS
- **WHEN** custom function exists
- **THEN** function name becomes utility name

#### Scenario: Arbitrary Values
- **WHEN** arbitrary value exists in selector
- **THEN** Tailwind generates custom utility
- **WHEN** `[]` brackets exist
- **THEN** system generates utility for exact value
- **WHEN** `[]` brackets with calc exist
- **THEN** system generates utility for calculated value
