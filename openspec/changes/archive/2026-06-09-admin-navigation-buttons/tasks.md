## 1. Admin Sidebar — Botão "Voltar ao site"

- [x] 1.1 Adicionar link "Voltar ao site" na sidebar do admin (`src/pages/admin/admin-sidebar.tsx`), posicionado imediatamente acima do link "Logout", usando `<Link to="/">` com ícone `ArrowLeftIcon` (Phosphor) e texto "Voltar ao site"
- [x] 1.2 Adicionar o mesmo link "Voltar ao site" na versão mobile do drawer no admin layout (`src/pages/admin/admin-layout.tsx`), caso o mobile drawer use a sidebar separadamente
- [x] 1.3 Verificar que o link "Voltar ao site" navega para `/` sem alterar o estado de autenticação (não chama `logout()`)

## 2. NavBar Pública — Botão "Administração" condicional

- [x] 2.1 Importar `useAuth` no componente `DesktopNavBar` (`src/components/nav-bar/desktop-nav-bar.tsx`) e ler `isAuthenticated`
- [x] 2.2 Substituir condicionalmente o botão "Login" (`SignInIcon` + link `/entrar`) pelo botão "Administração" (`GearIcon` + link `/admin`) quando `isAuthenticated` for `true`
- [x] 2.3 Importar `useAuth` no componente `MobileNavBar` (`src/components/nav-bar/mobile-nav-bar.tsx`) e ler `isAuthenticated`
- [x] 2.4 Substituir condicionalmente o botão "Login" no drawer footer pelo botão "Administração" quando `isAuthenticated` for `true`
- [x] 2.5 Garantir que o drawer mobile fecha ao clicar em "Administração" (verificar se o comportamento de fechamento automático precisa ser adicionado)

## 3. Testes e Verificação

- [x] 3.1 Verificar visualmente que o botão "Voltar ao site" aparece no sidebar desktop e no drawer mobile, acima do "Logout"
- [x] 3.2 Verificar que ao clicar "Voltar ao site" a navegação vai para `/` e o usuário permanece logado
- [x] 3.3 Verificar que o botão "Administração" aparece na NavBar (desktop e mobile) quando o usuário está logado
- [x] 3.4 Verificar que o botão "Login" aparece na NavBar (desktop e mobile) quando o usuário NÃO está logado
- [x] 3.5 Executar lint e typecheck para garantir que o código está sem erros