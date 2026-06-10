## ADDED Requirements

### Requirement: NewsArticleRenderer component renders article content

The system SHALL provide a `NewsArticleRenderer` component that displays the visual content of a news article (tags, category badge, summary, author line, cover image, and body), reusable across the detail page and preview contexts.

#### Scenario: Article with all fields
- **WHEN** `NewsArticleRenderer` receives an article with tags, category, summary, author, cover image URL, and content
- **THEN** it SHALL render tags as chips/badges, a red category badge, the summary in italic, an "Escrito por: {author}" line (only if author is truthy), the cover image with fallback, and the article body

#### Scenario: Article without author
- **WHEN** `NewsArticleRenderer` receives an article with a falsy `author` field
- **THEN** it SHALL omit the "Escrito por" line entirely

#### Scenario: Article without cover image
- **WHEN** `NewsArticleRenderer` receives an article with a null or empty `coverImageUrl`
- **THEN** it SHALL display the fallback image `/agencia-uva-fallback.jpg`

#### Scenario: HTML content detected
- **WHEN** the `content` field contains `<main id="materia">`
- **THEN** `NewsArticleRenderer` SHALL render it via `NewsHtmlContent` component with `dangerouslySetInnerHTML`

#### Scenario: Markdown content detected
- **WHEN** the `content` field does NOT contain `<main id="materia">`
- **THEN** `NewsArticleRenderer` SHALL render it using `<Markdown remarkPlugins={[remarkGfm]}>` within a `prose` wrapper