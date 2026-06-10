## ADDED Requirements

### Requirement: Admin layout with sidebar navigation

The system SHALL provide a dedicated admin layout accessible under `/admin` that replaces the main site layout.

- The admin layout SHALL NOT render the main site `NavBar` or `Footer` components
- The admin layout SHALL render a vertical sidebar on the left side for navigation
- The sidebar SHALL be fixed on desktop (lg breakpoint and above) and take full viewport height
- The sidebar SHALL contain the brand name "Agência UVA Barra" at the top
- The sidebar SHALL group menu items by topic with section headers
- On mobile (below lg breakpoint), the sidebar SHALL be hidden by default and accessible via a hamburger icon using a Drawer component
- The sidebar SHALL include a "Logout" option at the bottom
- The admin layout SHALL be wrapped with `ProtectedRoute` to require authentication
- The admin layout SHALL display the logged-in user name in the sidebar header area

#### Scenario: Admin route renders admin layout
- **WHEN** user navigates to `/admin`
- **THEN** the admin layout is rendered with sidebar instead of the main site layout

#### Scenario: Unauthenticated user is redirected
- **WHEN** an unauthenticated user navigates to `/admin`
- **THEN** the user is redirected to `/entrar`

#### Scenario: Sidebar navigation items are grouped
- **WHEN** user opens the admin sidebar
- **THEN** they see grouped sections: "Colaboradores", "Artigos", "Newsletter", and "Logout" at the bottom

#### Scenario: Mobile sidebar uses hamburger drawer
- **WHEN** user views admin on a mobile device
- **THEN** the sidebar is hidden behind a hamburger button that opens a drawer

#### Scenario: Desktop sidebar is always visible
- **WHEN** user views admin on a desktop device
- **THEN** the sidebar is always visible on the left side

#### Scenario: No admin layout on main site
- **WHEN** user navigates to `/` (home)
- **THEN** the main site layout with NavBar and Footer is rendered, not the admin layout

### Requirement: Sidebar menu items

The sidebar SHALL contain the following navigation items grouped by section:

**Colaboradores:**
- Registro de Colaborador → `/admin/collaborators/register`
- Solicitações → `/admin/collaborators/requests`
- Lista de Colaboradores → `/admin/collaborators`

**Artigos:**
- Criação de Artigos → `/admin/articles/create`
- Listagem de Artigos → `/admin/articles`
- Aprovação de Artigos → `/admin/articles/approve`

**Newsletter:**
- Criação de Newsletter → `/admin/newsletter/create`
- Listagem de Newsletter → `/admin/newsletter`

**Navegação:**
- Voltar ao site → `/` (uses `ArrowLeftIcon`)

**Logout:**
- Logout → `/admin/logout`

#### Scenario: All sidebar links navigate correctly
- **WHEN** user clicks any sidebar menu item
- **THEN** the browser navigates to the corresponding route

#### Scenario: Back to site link navigates without logout
- **WHEN** user clicks "Voltar ao site" in the sidebar
- **THEN** the browser navigates to `/`
- **AND** the user's authentication state SHALL remain unchanged
