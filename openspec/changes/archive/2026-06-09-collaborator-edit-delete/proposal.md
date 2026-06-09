## Why

Colaboradores aprovados só podem ser listados no painel admin — não é possível editar seus dados nem excluí-los pela interface. Isso força qualquer ajuste a passar pela API diretamente, sem confirmação visual, e impede que o próprio colaborador corrija seu perfil ou que um admin gerencie a equipe de forma ágil.

## What Changes

- Extrair o formulário de colaborador de `CollaboratorRegisterPage` para um componente reutilizável `CollaboratorForm` (seguindo o padrão de `NewsForm`/`NewsFormProps`), com suporte a `mode="create" | "edit"` e `defaultValues`
- Adicionar botões de **edição** (ícone de lápis) e **exclusão** (ícone de lixeira) ao `AdminColaboratorCard`, visíveis apenas para admins ou para o próprio colaborador vendo seu card
- Implementar modal de confirmação de exclusão usando o componente `Dialog` existente
- Implementar modal de edição que renderiza o `CollaboratorForm` extraído com `mode="edit"` e `defaultValues` preenchidos
- Impedir que qualquer usuário (inclusive admin) exclua a própria conta — o botão de lixeira deve ser ocultado para o card do usuário logado
- Adaptar a página de criação (`/admin/collaborators/register`) para usar o novo `CollaboratorForm` com `mode="create"`
- Criar API client function para atualizar colaborador (`updateCollaborator`)
- Criar API client function para excluir colaborador (`deleteCollaborator`)
- Adicionar mock handlers para PUT/PATCH e DELETE de colaboradores

## Capabilities

### New Capabilities
- `collaborator-form`: Componente de formulário reutilizável para criar e editar colaboradores, com validação via Zod, suporte a `mode` (`create` | `edit`) e `defaultValues`
- `collaborator-delete`: Fluxo de exclusão de colaborador com modal de confirmação e chamada à API
- `collaborator-edit`: Fluxo de edição de colaborador via modal com formulário preenchido e chamada à API de atualização

### Modified Capabilities
- `admin-colaborator-card`: Adicionar botões de edição e exclusão condicionais (visíveis apenas para admin ou para o próprio colaborador), com ocultação do botão de exclusão para o card do próprio usuário logado
- `collaborator-register`: Refatorar para usar o `CollaboratorForm` extraído em vez do formulário inline

## Impact

- **Componentes afetados**: `AdminColaboratorCard`, `CollaboratorRegisterPage`, `CollaboratorsListPage`
- **Novos componentes**: `CollaboratorForm`, `CollaboratorFormProps` (types)
- **Novas APIs**: `updateCollaborator`, `deleteCollaborator` em `src/api/collaborators/`
- **Novos mocks**: handlers para `PUT /api/user/:id` e `DELETE /api/user/:id`
- **Hooks**: `useCollaborators` precisa suportar `refetch` (ou `mutate`) para atualizar a lista após edição/exclusão
- **Auth**: `useAuth` já fornece `user.id` e `isAdmin`, necessários para a lógica de permissão