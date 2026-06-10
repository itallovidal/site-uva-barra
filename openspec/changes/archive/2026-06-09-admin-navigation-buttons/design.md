## Context

O site público e a área de administração (`/admin`) operam em layouts completamente separados. A sidebar do admin contém apenas links internos do admin e um botão de logout — não há como voltar ao site público sem sair. Na NavBar pública, o botão "Login" é sempre exibido independentemente do estado de autenticação. O contexto de autenticação (`useAuth`) já expõe `isAuthenticated` e `user`, mas nenhum componente de navegação pública o consome.

## Goals / Non-Goals

**Goals:**
- Permitir que usuários autenticados naveguem do admin para o site público sem deslogar
- Permitir que usuários autenticados acessem o admin diretamente pela NavBar do site público, sem passar pelo login
- Manter a consistência visual com os padrões existentes (Phosphor icons, shadcn/ui components)

**Non-Goals:**
- Alterar o fluxo de logout (continuará via `/admin/logout`)
- Adicionar controle de acesso baseado em papéis (role-based access) — qualquer usuário autenticado pode acessar o admin
- Modificar a estrutura de rotas existente
- Adicionar funcionalidade de "perfil do usuário" ou menu dropdown no site público

## Decisions

### 1. Botão "Voltar ao site" na sidebar do admin

**Decisão:** Adicionar um link "Voltar ao site" posicionado imediatamente acima do link "Logout" na sidebar, usando `<Link to="/">` do React Router.

**Racional:** A sidebar já usa `<Link>` para todos os itens de navegação. Manter a consistência é preferível a usar `<a>` ou `window.location`. O link aponta para `/` (home), que é a entrada natural do site público.

**Alternativa considerada:** Adicionar o botão no header mobile do admin em vez da sidebar — rejeitada porque a sidebar já é o hub de navegação e o link deve estar acessível em ambos os contextos (desktop e mobile).

### 2. Ícone do botão "Voltar ao site"

**Decisão:** Usar `ArrowLeftIcon` do Phosphor (exportação com sufixo `Icon`).

**Racional:** `ArrowLeft` comunica claramente a ação de "voltar/navegar para trás", alinhado com os padrões de ícones da sidebar existente.

### 3. Botão "Administração" condicional na NavBar

**Decisão:** Consumir `useAuth()` nos componentes `DesktopNavBar` e `MobileNavBar`. Quando `isAuthenticated` for `true`, renderizar um botão "Administração" com `<Link to="/admin">` em vez do botão "Login" com `<Link to="/entrar">`.

**Racional:** Como o usuário já está autenticado, não faz sentido oferecer "Login". O botão "Administração" dá acesso direto ao painel admin. O `ProtectedRoute` já garante que apenas usuários autenticados acessem `/admin`.

**Alternativa considerada:** Exibir ambos "Login" e "Administração" — rejeitada por poluir a interface. Preferida a abordagem condicional limpa.

### 4. Ícone do botão "Administração"

**Decisão:** Usar `GearIcon` do Phosphor (icon de engrenagem) para desktop e mobile.

**Racional:** O ícone de engrenagem é universalmente reconhecido como "administração/configurações" e difere visualmente do `SignInIcon` usado no botão de login, evitando confusão.

### 5. Responsividade mobile

**Decisão:** No `MobileNavBar`, o botão "Administração" substituirá o "Login" no `DrawerFooter`, mantendo o mesmo posicionamento e estilo do botão original.

**Racional:** Consistência com o padrão mobile existente — o drawer footer é o local natural para ações de conta.

## Risks / Trade-offs

- [Usuário não-admin vê "Administração"] → Qualquer usuário autenticado (colaborador ou admin) verá o botão. Como `ProtectedRoute` não faz verificação de role, isso é consistente com o comportamento atual. Se controle de role for adicionado futuramente, o botão deverá ser condicional a `isAdmin`.
- [Botão "Administração" não fecha drawer mobile] → O drawer fecha automaticamente ao clicar em links de navegação internos, mas link para `/admin` sai do site público. Pode ser necessário fechar o drawer explicitamente após navegar.