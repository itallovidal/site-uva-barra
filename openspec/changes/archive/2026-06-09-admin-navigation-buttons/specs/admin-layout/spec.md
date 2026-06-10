## MODIFIED Requirements

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