## MODIFIED Requirements

### Requirement: Layout da página de detalhe

The system SHALL display the news article content using the `NewsArticleRenderer` component inside an `<article>` wrapper with `mx-auto max-w-3xl px-4 py-8`.

#### Scenario: Article rendered by NewsArticleRenderer
- **WHEN** the detail page loads successfully
- **THEN** it SHALL render the `NewsArticleRenderer` component with the article data
- **AND** the page title (`<h1>`) SHALL remain displayed directly in the detail page above the renderer

#### Scenario: Imagem de capa presente
- **WHEN** `news.coverImageUrl` is filled
- **THEN** the `NewsArticleRenderer` SHALL render the cover image with `object-fit: cover` and fallback

#### Scenario: Tags exibidas
- **WHEN** `news.tags` contains items
- **THEN** the `NewsArticleRenderer` SHALL render each tag as a chip/badge

#### Scenario: Badge de categoria
- **WHEN** the page is rendered
- **THEN** `news.category` SHALL be displayed as a badge with `bg-red-600` background and white text

#### Scenario: Autor condicional
- **WHEN** `news.author` is truthy
- **THEN** the renderer SHALL display "Escrito por: {author}"
- **WHEN** `news.author` is falsy
- **THEN** the renderer SHALL omit the author line entirely

#### Scenario: Resumo exibido
- **WHEN** the page is rendered
- **THEN** `news.summary` SHALL be displayed in italic between the category badge and the content body