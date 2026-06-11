## MODIFIED Requirements

### Requirement: Admin dashboard page

The system SHALL provide a dashboard page at `/admin/dashboard` that shows an overview of recent activity. The default admin route `/admin` SHALL redirect to the news listing page.

#### Scenario: /admin now shows news listing

- **WHEN** user navigates to `/admin`
- **THEN** they are directed to the admin news listing page (`/admin/news`)
- **AND** the sidebar still provides navigation to other admin sections

#### Scenario: Dashboard available at /admin/dashboard

- **WHEN** user navigates to `/admin/dashboard`
- **THEN** they see "Painel de Administração" heading and three info sections with mock data
