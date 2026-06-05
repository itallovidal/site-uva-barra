## ADDED Requirements

### Requirement: News listing page route

The system SHALL provide a route at `/noticias` that renders a full listing page for all published news articles, with support for search, category filtering, sort order, and pagination.

#### Scenario: Navigate to general listing page

- **WHEN** the user navigates to `/noticias`
- **THEN** the system SHALL render the news listing page
- **AND** the page SHALL display published articles without any pre-applied category filter
- **AND** the page title SHALL display "Notícias" with a red vertical bar decoration

#### Scenario: Navigate with category pre-filter via URL

- **WHEN** the user navigates to `/noticias?categoria=tecnologia`
- **THEN** the page SHALL pre-select "tecnologia" in the category dropdown
- **AND** only articles belonging to the "tecnologia" category SHALL be displayed
- **AND** the page title SHALL display "Tecnologia" with a red vertical bar decoration

#### Scenario: Invalid or unknown category in URL

- **WHEN** the user navigates to `/noticias?categoria=inexistente`
- **THEN** the page SHALL show an empty state message indicating no articles were found

---

### Requirement: News listing header

The system SHALL render a page header with the category name (or "Notícias" when no category is selected) as a large heading, accompanied by a red vertical bar decoration to its left.

#### Scenario: Header shows category name

- **WHEN** the listing page is rendered with `?categoria=esportes`
- **THEN** the header SHALL display "Esportes" as the heading text
- **AND** a red vertical bar (`bg-red-600`) SHALL appear to the left of the heading

#### Scenario: Header shows default title without category

- **WHEN** the listing page is rendered without a category query param
- **THEN** the header SHALL display "Notícias" as the heading text

---

### Requirement: News listing filters

The system SHALL render a filter toolbar below the header containing a search input, a sort dropdown, and a category dropdown.

#### Scenario: Search bar is rendered

- **WHEN** the listing page renders
- **THEN** a text input for searching articles SHALL be visible
- **AND** submitting the search SHALL trigger a POST request to `/news/search?q=<term>`

#### Scenario: Sort dropdown options

- **WHEN** the user opens the sort dropdown
- **THEN** it SHALL display two options: "Mais recente" and "Mais antigo"
- **AND** "Mais recente" SHALL be the default selection

#### Scenario: Category dropdown options

- **WHEN** the user opens the category dropdown
- **THEN** it SHALL list all available categories fetched from the API
- **AND** a "Todas as categorias" option SHALL appear as the first item (deselects filter)

#### Scenario: Changing sort order updates results

- **WHEN** the user selects "Mais antigo" in the sort dropdown
- **THEN** the article list SHALL reload with the updated sort order
- **AND** the URL SHALL reflect the change via search params

#### Scenario: Changing category filter updates results

- **WHEN** the user selects a category in the category dropdown
- **THEN** the article list SHALL reload showing only articles of that category
- **AND** the URL SHALL update `?categoria=<slug>`

---

### Requirement: News listing grid

The system SHALL render the filtered articles as a vertical list of `NewsCard` components.

#### Scenario: Articles are rendered as NewsCards

- **WHEN** the listing page fetches articles successfully
- **THEN** each article SHALL be rendered using the existing `NewsCard` component
- **AND** cards SHALL be displayed in a single-column list layout

#### Scenario: Loading state

- **WHEN** the listing is fetching data
- **THEN** skeleton placeholder cards SHALL be displayed in place of actual articles

#### Scenario: Empty state

- **WHEN** the API returns zero articles for the current filters
- **THEN** the listing grid SHALL display a message "Nenhuma notícia encontrada"

#### Scenario: Error state

- **WHEN** the API request fails
- **THEN** the listing grid SHALL display an error message

---

### Requirement: News search

The system SHALL support full-text article search via a POST request.

#### Scenario: Search results replace listing

- **WHEN** the user submits a search term
- **THEN** the system SHALL POST to `/news/search?q=<term>`
- **AND** the article grid SHALL be replaced with the search results
- **AND** a "Resultados para: <term>" label SHALL be shown above the results

#### Scenario: Clear search returns to listing

- **WHEN** search results are displayed and the user clears the search input and resubmits (or clicks a "Limpar" button)
- **THEN** the listing SHALL return to the normal browsing mode with the previous filters

#### Scenario: Search with empty results

- **WHEN** the search API returns no articles for the term
- **THEN** the grid SHALL display "Nenhum resultado encontrado para: <term>"

---

### Requirement: News listing pagination

The system SHALL display pagination controls when the total number of articles exceeds the items-per-page threshold.

#### Scenario: Pagination controls are shown

- **WHEN** the API response `meta.totalPages` is greater than 1
- **THEN** pagination controls SHALL be displayed below the article grid
- **AND** the current page SHALL be highlighted

#### Scenario: Navigate to next page

- **WHEN** the user clicks the "Próxima" page button
- **THEN** the listing SHALL fetch and display the next page of articles
- **AND** the URL SHALL update with `?pagina=<n>`

#### Scenario: Navigate to specific page

- **WHEN** the user clicks a specific page number button
- **THEN** the listing SHALL fetch and display that page's articles

#### Scenario: No pagination on single page

- **WHEN** the total number of articles fits on one page (`meta.totalPages === 1`)
- **THEN** pagination controls SHALL NOT be rendered

---

### Requirement: `useNewsListing` hook

The system SHALL provide a `useNewsListing` hook in `src/hooks/use-news-listing.ts` that fetches paginated news articles with optional category and sort filters.

#### Scenario: Hook fetches with filters

- **WHEN** `useNewsListing` is called with `{ category: 'esportes', sort: 'asc', page: 1, perPage: 10 }`
- **THEN** it SHALL fetch from the news API with those query params
- **AND** it SHALL return `{ articles, meta, isLoading, error }`

#### Scenario: Hook fetches without category filter

- **WHEN** `useNewsListing` is called without a `category` param
- **THEN** it SHALL fetch all categories without a category filter

---

### Requirement: `useNewsSearch` hook

The system SHALL provide a `useNewsSearch` hook in `src/hooks/use-news-search.ts` that POSTs to the search endpoint and returns results.

#### Scenario: Hook sends POST request

- **WHEN** `useNewsSearch` is called with a non-empty search term
- **THEN** it SHALL POST to `${VITE_API_BASE_URL}/news/search?q=<term>`
- **AND** it SHALL return `{ articles, meta, isLoading, error }`

#### Scenario: Hook ignores empty term

- **WHEN** `useNewsSearch` is called with an empty string
- **THEN** it SHALL NOT make any API request

---

### Requirement: `searchNews` API function

The system SHALL provide a `searchNews` function in `src/api/news/search-news.ts` that POSTs to the search endpoint.

#### Scenario: Function sends correct request

- **WHEN** `searchNews('javascript')` is called
- **THEN** it SHALL send a POST to `${VITE_API_BASE_URL}/news/search?q=javascript`
- **AND** it SHALL return `ResponsePayload<NewsPreviewDTO[]>` with pagination metadata

---

### Requirement: MSW mock handler for search endpoint

The system SHALL provide a MSW handler for `POST /api/news/search` that returns filtered mock data.

#### Scenario: Mock handler matches on search term

- **WHEN** MSW intercepts `POST /api/news/search?q=<term>`
- **THEN** it SHALL return a `ResponsePayload<NewsPreviewDTO[]>` filtered by the term (case-insensitive title match)
- **AND** the response SHALL include `meta` with pagination fields
