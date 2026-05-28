## ADDED Requirements

### Requirement: Admin dashboard page

The system SHALL provide a dashboard page at `/admin` that shows an overview of recent activity.

- The dashboard SHALL display a welcome heading "Painel de Administração"
- The dashboard SHALL display three sections: "Últimos Artigos", "Últimos Colaboradores", "Última Newsletter"
- Each section SHALL display placeholder/mock data in card format
- The styling SHALL follow the same patterns as the home page (max-w-7xl, mx-auto, px-4, py-6, space-y-10)
- The dashboard SHALL use the same card/typography styling as the main site

#### Scenario: Dashboard shows overview sections
- **WHEN** user navigates to `/admin`
- **THEN** they see "Painel de Administração" heading and three info sections with mock data
