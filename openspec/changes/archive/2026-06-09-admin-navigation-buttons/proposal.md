## Why

Usuários autenticados não conseguem navegar entre o site público e a área de administração sem fluxos quebrados: na área admin não há como voltar ao site público sem deslogar, e no site público o botão de login sempre direciona para `/entrar` mesmo quando o usuário já está autenticado. Isso força o usuário a passar pelo fluxo de login novamente ou a deslogar involuntariamente, prejudicando a experiência de navegação.

## What Changes

- Adicionar botão "Voltar ao site" na sidebar do admin, posicionado acima do botão de logout, que navega para a home (`/`) sem deslogar o usuário
- Substituir o botão "Login" na NavBar (desktop e mobile) por um botão "Administração" quando o usuário estiver autenticado, direcionando para `/admin` sem passar pela tela de login

## Capabilities

### New Capabilities

- `admin-site-navigation`: Navegação bidirecional entre o site público e a área de administração — botão "Voltar ao site" na sidebar do admin e botão "Administração" na NavBar pública quando autenticado

### Modified Capabilities

- `admin-layout`: Adição de link de navegação para o site público na sidebar
- `nav-bar`: Renderização condicional do botão de ação (Login vs Administração) baseada no estado de autenticação

## Impact

- `src/pages/admin/admin-sidebar.tsx` — adição de link "Voltar ao site" acima do logout
- `src/components/nav-bar/desktop-nav-bar.tsx` — renderização condicional do botão Login/Administração
- `src/components/nav-bar/mobile-nav-bar.tsx` — renderização condicional do botão Login/Administração no drawer mobile
- `src/hooks/use-auth.tsx` — já expõe `isAuthenticated` e `user`, será consumido pelos componentes de navegação