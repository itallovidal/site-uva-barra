## MODIFIED Requirements

### Requirement: NewsForm component (create + edit)

The system SHALL provide a reusable `NewsForm` component in `src/components/news-form/` that collects all fields from `CreateNewsDTO`: title, summary, content (rich text via MDXEditor), category, tags, coverImageUrl, status (draft or review), featured, and author. The component SHALL NOT calculate readingTime — that is backend responsibility.

The form SHALL accept `mode: 'create' | 'edit'` and `defaultValues?: Partial<NewsFormData>` and `onSubmit: (data: NewsFormData) => Promise<void>`.

#### Scenario: Submit as draft (create mode)

- **WHEN** user fills all required fields and clicks "Salvar Rascunho" in create mode
- **THEN** the system SHALL call `onSubmit` with status set to "draft"

#### Scenario: Submit primary action (create mode)

- **WHEN** user fills all required fields and clicks "Criar notícia" in create mode
- **THEN** the system SHALL call `onSubmit` with status set to "review"

#### Scenario: Submit primary action (edit mode)

- **WHEN** user fills all required fields and clicks "Editar notícia" in edit mode
- **THEN** the system SHALL call `onSubmit` with status set to "review"

#### Scenario: Primary submit button labels differ by mode

- **WHEN** the form is rendered with `mode="create"`
- **THEN** the primary submit button SHALL display "Criar notícia"
- **WHEN** the form is rendered with `mode="edit"`
- **THEN** the primary submit button SHALL display "Editar notícia"

## ADDED Requirements

### Requirement: Author field in form

The system SHALL include a required text input for "author" in the news form.

#### Scenario: Author input is rendered

- **WHEN** the form loads
- **THEN** the system SHALL render an author text input labeled "Autor"

#### Scenario: Author is required

- **WHEN** user submits the form without entering an author
- **THEN** the system SHALL display a validation error "Autor é obrigatório"

#### Scenario: Author value is submitted

- **WHEN** user fills all required fields including author and submits
- **THEN** the `author` field SHALL be included in the `CreateNewsDTO` payload
