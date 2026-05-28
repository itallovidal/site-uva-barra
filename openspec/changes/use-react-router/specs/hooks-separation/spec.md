## ADDED Requirements

### Requirement: Custom hooks must be in dedicated hooks folder
Custom hooks SHALL be defined in `src/hooks/` folder.

#### Scenario: Creating new custom hook
- **WHEN** developer needs to create a custom hook
- **THEN** hook must be created in `src/hooks/` with file name kebab-case
- **WHEN** hook extracts component logic that can be reused
- **THEN** hook is moved to `src/hooks/` instead of staying in component

#### Scenario: Hook scope
- **WHEN** hook is shared across multiple components or pages
- **THEN** hook file is created in `src/hooks/`
- **WHEN** hook is specific to one component and not reusable
- **THEN** hook can stay in component's `src/components/[component-name]/`

#### Scenario: Hook organization
- **WHEN** there are multiple hooks
- **THEN** hooks are organized by domain/concern:
  - Forms: `useForm.ts`, `useFormState.ts`
  - Auth: `useAuth.ts`, `useSession.ts`
  - Data: `useData.ts`, `useCache.ts`
  - Navigation: `useNav.ts`
  - Effects: `useEffect.ts`, `useDebounce.ts`