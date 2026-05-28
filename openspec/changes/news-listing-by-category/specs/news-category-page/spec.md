## ADDED Requirements

### Requirement: News category page route
The system SHALL provide a route at `/news/category/:category` that renders a page listing news articles for the specified category.

#### Scenario: Navigate to category page
- **WHEN** the user navigates to `/news/category/tecnologia`
- **THEN** the system SHALL render the news category page
- **AND** the page SHALL display news articles filtered by the "tecnologia" category

#### Scenario: Invalid category shows empty state
- **WHEN** the user navigates to `/news/category/inexistente`
- **THEN** the page SHALL display an empty state message indicating no news was found

### Requirement: CategorySection component
The system SHALL provide a `CategorySection` component that receives a category name, fetches news articles from the API, and renders up to N results using `NewsCard` components.

#### Scenario: Section renders with category title
- **WHEN** the `CategorySection` renders with category "Tecnologia" and limit 3
- **THEN** it SHALL display "Tecnologia" as the section heading
- **AND** it SHALL fetch from `/api/news?category=Tecnologia&limit=3`
- **AND** it SHALL render up to 3 `NewsCard` components

#### Scenario: Section shows loading state
- **WHEN** the `CategorySection` is fetching data
- **THEN** it SHALL display skeleton placeholders while loading

#### Scenario: Section shows error state
- **WHEN** the API request fails
- **THEN** the `CategorySection` SHALL display an error message

#### Scenario: Section shows empty state
- **WHEN** the API returns no articles for the category
- **THEN** the `CategorySection` SHALL display a "Nenhuma notícia encontrada" message
