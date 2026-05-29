## Context

O admin já possui a rota `/admin/collaborators/register` configurada em `src/routes/index.tsx:55`, atualmente usando `PlaceholderPage` como placeholder. O formulário de auto-cadastro público (`SignupPage`) existe em `/cadastro` mas não inclui campos como `role` e `bio` do `UserRequestDTO`.

## Goals / Non-Goals

**Goals:**
- Criar `RegisterPage` para cadastro de colaboradores por administradores
- Formulário completo com todos os campos de `UserRequestDTO` (name, email, password, profession, role, bio)
- Validação com Zod + react-hook-form (padrão existente)
- Layout centralizado com `Card`, `Input`, `Button`, `Combobox`
- Substituir `PlaceholderPage` na rota `/admin/collaborators/register`

**Non-Goals:**
- Integração com API real (apenas `console.log` inicial)
- CRUD completo de colaboradores (apenas registro)
- Autenticação/autorização (será feita em camada separada)

## Decisions

| Decisão | Opção Escolhida | Alternativa | Motivo |
|---|---|---|---|
| Schema Zod | `registerSchema` novo | Reaproveitar `signupSchema` | `UserRequestDTO` inclui `role` e `bio` que não estão no `signupSchema` |
| Localização | `src/pages/admin/collaborator-register-page.tsx` | `src/pages/register-page.tsx` | Rota está sob `/admin`, faz sentido colocar junto ao `AdminLayout` |
| Tipo do form | `UserRequestDTO` estendido com `confirmPassword` | Usar `UserRequestDTO` direto | Confirmação de senha é necessária no formulário, mas não faz parte do DTO |

## Risks / Trade-offs

- [Esquecer de tipar o `confirmPassword`] → Usar `Omit` + intersecção de tipos, similar ao `SignupPage`
- [Schema não sincronizado com `UserRequestDTO`] → Tipar os dados do schema com `z.infer` e mapear para DTO no `onSubmit`
