## ADDED Requirements

### Requirement: Home Screen Component
O sistema SHALL criar tela inicial com conteúdo básico.

#### Scenario: Home Screen Render
- **WHEN** HomeScreen component mounts
- **THEN** displays "Olá Mundo" greeting
- **WHEN** greeting renders
- **THEN** text uses `h1` tag with appropriate size
- **WHEN** greeting has dark text
- **THEN** text color is theme dark
- **WHEN** greeting centered horizontally
- **THEN** text-align: center applied

#### Scenario: Layout Component
- **WHEN** Layout component mounts
- **THEN** renders centered content with flex
- **WHEN** flex direction column
- **THEN** content flows vertically
- **WHEN** margin auto applied
- **THEN** content centered in viewport

#### Scenario: Navigation Bar
- **WHEN** app navigates to Home
- **THEN** home screen displays in stack
- **WHEN** user presses home button
- **THEN** navigation stack returns to home

### Requirement: App Layout
O sistema SHALL criar layout de aplicativo.

#### Scenario: Main Stack
- **WHEN** main stack creates
- **THEN** stacks home, about, settings screens
- **WHEN** home screen defined first
- **THEN** home displays at initial load
- **WHEN** about screen defined
- **THEN** about screen accessible via link
- **WHEN** settings screen defined
- **THEN** settings screen accessible via link

#### Scenario: Settings Screen
- **WHEN** settings screen mounts
- **THEN** displays title as "Settings"
- **WHEN** about button exists
- **THEN** about button opens About modal
- **WHEN** about button pressed
- **THEN** modal appears with about content

#### Scenario: About Modal
- **WHEN** about modal opens
- **THEN** modal overlay blocks background
- **WHEN** modal renders content
- **THEN** modal contains title and description
- **WHEN** user presses outside
- **THEN** modal closes and background shows

### Requirement: Type Definitions
O sistema SHALL definir tipos TypeScript para navegação.

#### Scenario: Navigation Types
- **WHEN** user calls `useNavigation()`
- **THEN** returns `NativeNavigationProp`
- **WHEN** user calls `useRoute()`
- **THEN** returns `NativeRouteProp`
- **WHEN** user calls `useFocusState()`
- **THEN** returns `NativeFocusHandlerProp`

#### Scenario: Type Guards
- **WHEN** user checks `isFocused()`
- **THEN** returns boolean based on focus state
- **WHEN** stack navigator defined
- **THEN** type inference works for stack navigator
- **WHEN** tab navigator defined
- **THEN** type inference works for tab navigator

### Requirement: Error Handling
O sistema SHALL lidar com erros corretamente.

#### Scenario: Navigation Errors
- **WHEN** invalid screen defined
- **THEN** error dialog displays error message
- **WHEN** invalid route requested
- **THEN** app logs error and handles gracefully
- **WHEN** navigation state corrupted
- **THEN** app reinitializes navigation stack

#### Scenario: Type Errors
- **WHEN** incorrect type passed to props
- **THEN** TypeScript compiler reports error
- **WHEN** navigation called without context
- **THEN** TypeScript error indicates missing provider
- **WHEN** undefined used where navigation required
- **THEN** TypeScript error shows navigation prop type

### Requirement: Performance
O sistema SHALL manter performance adequada.

#### Scenario: Render Optimization
- **WHEN** screen renders once
- **THEN** screen re-renders on prop change
- **WHEN** screen mounts with empty state
- **THEN** screen shows loading state
- **WHEN** loading state resolves
- **THEN** screen shows actual data
- **WHEN** screen unmounts
- **THEN** component cleanup runs

#### Scenario: Memory Management
- **WHEN** navigation pushes screen
- **THEN** previous screens stay in memory
- **WHEN** `unmountOnBlur` option enabled
- **THEN** screens remove from DOM when out of view
- **WHEN** `unmountOnBlur` enabled
- **THEN** previous screens get garbage collected
