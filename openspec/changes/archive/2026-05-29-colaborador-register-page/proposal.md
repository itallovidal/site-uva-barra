## Why

Atualmente o cadastro de colaboradores é feito pelo formulário de auto-cadastro em `/cadastro` (SignupPage). Não há uma página dedicada para registro de novos colaboradores por parte de administradores, que possa incluir campos como `role` e `bio` além dos campos básicos.

## What Changes

- Criar uma página de registro de colaborador (`collaborator-register-page.tsx`) acessível via rota `/admin/collaborators/register`
- Reutilizar os schemas Zod existentes ou criar um schema específico (`registerSchema`) que inclua todos os campos de `UserRequestDTO` (name, email, password, profession, role, bio)
- Usar `react-hook-form` com `zodResolver` para validação do formulário, seguindo o padrão de `login-page.tsx`
- Formulário centralizado na tela, utilizando os componentes `Card`, `Input`, `Button` e `Combobox` já existentes
- Adicionar a rota no roteador da aplicação

## Capabilities

### New Capabilities
- `collaborator-register`: Página de registro de colaboradores com formulário completo baseado em `UserRequestDTO`, incluindo campos de nome, email, senha, profissão, função (role) e biografia

### Modified Capabilities

- *(none)*

## Impact

- `src/pages/admin/collaborator-register-page.tsx` — novo arquivo de página
- `src/App.tsx` — adição da rota `/colaboradores/registrar`
- `src/schemas/user-schemas.ts` — novo schema `registerSchema` com os campos de `UserRequestDTO`
