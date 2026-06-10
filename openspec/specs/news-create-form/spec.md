## ADDED Requirements

### Requirement: NewsForm component (create + edit)

The system SHALL provide a reusable `NewsForm` component in `src/components/news-form/` that collects all fields from `CreateNewsDTO`: title, summary, content (rich text via MDXEditor), category, tags, coverImageUrl, status (draft or review), featured, and author. The component SHALL NOT calculate readingTime — that is backend responsibility.

The form SHALL accept `mode: 'create' | 'edit'` and `defaultValues?: Partial<NewsFormData>` and `onSubmit: (data: NewsFormData) => Promise<void>`.

#### Scenario: Form renders in loading state while fetching categories/tags

- **WHEN** the form mounts
- **THEN** the system fetches `GET /api/categories` and `GET /api/tags` internally
- **THEN** the form displays a skeleton/loading state until both requests resolve

#### Scenario: Title is required

- **WHEN** user submits the form without a title
- **THEN** the system SHALL display a validation error "Título é obrigatório"

#### Scenario: Summary is required

- **WHEN** user submits the form without a summary
- **THEN** the system SHALL display a validation error "Resumo é obrigatório"

#### Scenario: Content is required

- **WHEN** user submits the form without content
- **THEN** the system SHALL display a validation error "Conteúdo é obrigatório"

#### Scenario: Category is required

- **WHEN** user submits the form without selecting a category
- **THEN** the system SHALL display a validation error "Categoria é obrigatória"

#### Scenario: Cover image URL shows preview

- **WHEN** user types a valid image URL in the cover image input
- **THEN** the system SHALL display a thumbnail preview of the image below the input

#### Scenario: Featured defaults to false

- **WHEN** user opens the form
- **THEN** the featured checkbox SHALL be unchecked by default

#### Scenario: Status defaults to draft

- **WHEN** user opens the form
- **THEN** the status SHALL default to "draft"

#### Scenario: Tags are optional

- **WHEN** user submits the form without selecting any tags
- **THEN** the system SHALL submit the DTO with an empty tagIds array

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

#### Scenario: Successful submission shows feedback

- **WHEN** `onSubmit` resolves successfully
- **THEN** the system SHALL display a success toast/message

#### Scenario: API error shows error feedback

- **WHEN** `onSubmit` throws or rejects
- **THEN** the system SHALL display an error message and keep the form data intact

#### Scenario: Default values populate the form

- **WHEN** the form receives `defaultValues` with title, summary, content, categoryId, etc.
- **THEN** the form SHALL display those values prefilled in their respective fields

### Requirement: Rich text editing with MDXEditor

The system SHALL use `@mdxeditor/editor` for the news article content body, configured with a markdown editing toolbar.

#### Scenario: MDXEditor is rendered

- **WHEN** the form loads
- **THEN** the system SHALL render an MDXEditor instance in place of a plain textarea for the content field

#### Scenario: Toolbar has basic formatting options

- **WHEN** user focuses the MDXEditor
- **THEN** the toolbar SHALL display formatting options including bold, italic, headings, lists, and link insertion

#### Scenario: Content syncs with form state

- **WHEN** user types in the MDXEditor
- **THEN** the content SHALL be synchronized with the form's `content` field via react-hook-form's Controller

### Requirement: Categories and tags fetched internally

The NewsForm SHALL fetch categories and tags on mount via `GET /api/categories` and `GET /api/tags`.

#### Scenario: Categories populate combobox

- **WHEN** `GET /api/categories` resolves
- **THEN** the category combobox SHALL display the returned categories as options

#### Scenario: Tags populate checkbox group

- **WHEN** `GET /api/tags` resolves
- **THEN** the tag picker SHALL display the returned tags as selectable options

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
