## ADDED Requirements

### Requirement: Shadcn UI Initialization
O sistema SHALL inicializar Shadcn UI para gerenciamento de componentes.

#### Scenario: Init Command
- **WHEN** user runs `npx shadcn-ui@latest init`
- **THEN** CLI prompts for configuration options
- **WHEN** user accepts defaults
- **THEN** `components.json` with defaults is created
- **WHEN** user accepts custom settings
- **THEN** `components.json` reflects user preferences

#### Scenario: Add Component
- **WHEN** user runs `npx shadcn-ui@latest add component-name`
- **THEN** CLI installs component dependencies
- **WHEN** component dependencies install
- **THEN** component appears in `src/components/ui/`
- **WHEN** component imports from `@/components/ui/*`
- **THEN** imports resolve to correct location

### Requirement: Component Structure
O sistema SHALL organizar componentes em estrutura padrão.

#### Scenario: UI Directory
- **WHEN** components directory exists
- **THEN** structure includes:
  - `ui/` folder with subcomponents
  - `primitives/` folder with Radix primitives
  - `index.ts` barrel imports
- **WHEN** component added
- **THEN** file created in `ui/` with default props

#### Scenario: Default Props
- **WHEN** component defined
- **THEN** default props match Shadcn specifications
- **WHEN** component rendered without props
- **THEN** defaults apply correctly
- **WHEN** `required` prop missing
- **THEN** component shows visual indicator or alternative

### Requirement: Radix Primitives Import
O sistema SHALL importar primitivos Radix UI corretamente.

#### Scenario: Button Primitive
- **WHEN** `Button` component renders
- **THEN** Radix `Button` component wraps content
- **WHEN** variants defined in components
- **THEN** Button shows correct styling
- **WHEN** disabled prop true
- **THEN** Button is disabled with visual indicator

#### Scenario: Card Component
- **WHEN** `Card` component renders
- **THEN** Radix `Card` primitive wraps content
- **WHEN** CardHeader, CardContent, CardFooter render
- **THEN** each renders correctly inside Card primitive
- **WHEN** CardHeader renders
- **THEN** CardHeader uses CardPrimitive.Header

#### Scenario: Input Component
- **WHEN** `Input` component renders
- **THEN** Radix `Input` component with proper types
- **WHEN** disabled prop true
- **THEN** Input is disabled with gray background
- **WHEN** validation errors present
- **THEN** Input shows error styling

### Requirement: Theme Configuration
O sistema SHALL configurar tema corretamente.

#### Scenario: Theme Config
- **WHEN** theme config exists
- **THEN** extends `./theme.config.ts`
- **WHEN** theme config defines colors
- **THEN** colors extend or override default theme
- **WHEN** theme config defines typography
- **THEN** typography uses system fonts

#### Scenario: Dark Mode
- **WHEN** dark mode enabled
- **THEN** dark color scheme applies to components
- **WHEN** dark mode disabled
- **THEN** light color scheme applies
- **WHEN** system prefers dark mode
- **THEN** dark mode applies automatically

### Requirement: Dependency Management
O sistema SHALL gerenciar dependências de componentes.

#### Scenario: Component Dependencies
- **WHEN** component added
- **THEN** all dependencies install in packages.json
- **WHEN** @radix-ui/react-dialog needed
- **THEN** install @radix-ui/react-dialog and deps
- **WHEN** component uses @react-native-community
- **THEN** install required React Native packages

#### Scenario: Peer Dependencies
- **WHEN** component specifies peer deps
- **THEN** host application must install them
- **WHEN** @react-native-async-storage
- **THEN** install @react-native-async-storage/sync AsyncStorage

#### Scenario: Bundle Size Control
- **WHEN** component added
- **THEN** no automatic installation of unused deps
- **WHEN** component imported first time
- **THEN** unused code tree-shaken from bundle
- **WHEN** component uses multiple features
- **THEN** only used features included in build
