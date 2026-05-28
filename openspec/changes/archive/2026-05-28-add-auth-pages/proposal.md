## Why

O portal da UVA Barra precisa de telas de autenticação para permitir que colaboradores se registrem e acessem áreas restritas do projeto. Atualmente não há qualquer mecanismo de login ou cadastro, impedindo a gestão de colaboradores e o acesso a funcionalidades protegidas.

## What Changes

- Nova rota `/entrar` com formulário de login (email + senha) usando `RequestLoginDTO`
- Nova rota `/cadastro` com formulário de solicitação de colaborador (email, nome, senha, confirmação de senha, role)
- Criação do `RequestLoginDTO` e `RequestSignupDTO`
- Criação de schemas de validação com Zod para ambos os formulários
- Integração com `react-hook-form` para gerenciamento de estado dos formulários
- Adição das dependências `zod`, `react-hook-form` e `@hookform/resolvers`
- Atualização dos botões "Login" na nav-bar para navegarem até `/entrar`
- Adição de link de navegação entre as páginas de login e cadastro

## Capabilities

### New Capabilities
- `auth-pages`: Telas de autenticação — login e cadastro de colaboradores — com validação de formulários, integração com react-hook-form + zod, e uso dos componentes shadcn/ui existentes

### Modified Capabilities
- *(nenhuma — requisitos de capabilities existentes não são alterados)*

## Impact

- **Novas dependências**: `zod`, `react-hook-form`, `@hookform/resolvers` no `package.json`
- **Novos arquivos**:
  - `src/pages/login-page.tsx` — página de login
  - `src/pages/signup-page.tsx` — página de cadastro
  - `src/types/auth-types.ts` — tipos e DTOs de autenticação
  - `src/schemas/auth-schemas.ts` — schemas Zod de validação
- **Arquivos modificados**:
  - `src/routes/index.tsx` — adicionar rotas `/entrar` e `/cadastro`
  - `src/components/nav-bar/desktop-nav-bar.tsx` — adicionar navegação ao botão Login
  - `src/components/nav-bar/mobile-nav-bar.tsx` — adicionar navegação ao botão Login
