## ADDED Requirements

### Requirement: CollaboratorForm component

The system SHALL provide a reusable `CollaboratorForm` component that renders a collaborator registration or edit form with fields for name, email, profession, role, bio, and (in create mode only) password and confirmPassword.

#### Scenario: Create mode renders all fields including password

- **WHEN** `CollaboratorForm` is rendered with `mode="create"`
- **THEN** it SHALL render name, email, password, confirmPassword, profession, role, and bio fields

#### Scenario: Edit mode omits password fields

- **WHEN** `CollaboratorForm` is rendered with `mode="edit"`
- **THEN** it SHALL render name, email, profession, role, and bio fields, and SHALL NOT render password or confirmPassword fields

#### Scenario: Edit mode pre-fills default values

- **WHEN** `CollaboratorForm` is rendered with `mode="edit"` and `defaultValues` containing collaborator data
- **THEN** the form fields SHALL be pre-filled with the provided default values

### Requirement: CollaboratorForm props

The system SHALL define `CollaboratorFormProps` with the following interface:
- `mode: 'create' | 'edit'` — controls which fields are shown and which schema is used
- `onSubmit: (data: CollaboratorFormData) => Promise<void>` — async callback receiving validated form data
- `defaultValues?: Partial<CollaboratorFormData>` — optional pre-fill values for edit mode

#### Scenario: onSubmit called with validated data on create

- **WHEN** the user fills all required fields and submits in create mode
- **THEN** `onSubmit` SHALL be called with a `CollaboratorFormData` object containing name, email, password, confirmPassword, profession, role, and bio (nullable)

#### Scenario: onSubmit called with validated data on edit

- **WHEN** the user modifies fields and submits in edit mode
- **THEN** `onSubmit` SHALL be called with a `CollaboratorFormData` object containing name, email, profession, role, and bio (nullable), without password fields

### Requirement: CollaboratorForm uses Zod validation

The system SHALL validate the form using `registerSchema` (create mode) or `editCollaboratorSchema` (edit mode) via `zodResolver`.

#### Scenario: Create mode validates with registerSchema

- **WHEN** `mode="create"` is set
- **THEN** the form SHALL use `registerSchema` which validates name, email, password (min 6), confirmPassword (must match), profession (enum), role (optional enum), bio (optional string)

#### Scenario: Edit mode validates with editCollaboratorSchema

- **WHEN** `mode="edit"` is set
- **THEN** the form SHALL use `editCollaboratorSchema` which validates name, email, profession (enum), role (optional enum), bio (optional string), without password fields

### Requirement: editCollaboratorSchema

The system SHALL define an `editCollaboratorSchema` in `src/schemas/user-schemas.ts` that validates: name (string, min 1), email (valid email), profession (enum from UserProfession), role (optional enum from UserRole), bio (optional string).

#### Scenario: Schema validates required fields on edit

- **WHEN** `editCollaboratorSchema` receives data missing the name field
- **THEN** it SHALL produce a validation error "Nome é obrigatório"

#### Scenario: Schema accepts valid edit data

- **WHEN** `editCollaboratorSchema` receives data with name, valid email, profession, and optional role and bio
- **THEN** it SHALL pass validation successfully

### Requirement: CollaboratorForm feedback

The system SHALL display success or error feedback messages after form submission, following the same pattern as `NewsForm`.

#### Scenario: Successful submission

- **WHEN** `onSubmit` resolves successfully
- **THEN** the form SHALL display a success feedback message

#### Scenario: Failed submission

- **WHEN** `onSubmit` throws an error
- **THEN** the form SHALL display an error feedback message describing the failure