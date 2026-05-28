## Context

O portal da UVA Barra não possui telas de autenticação. Os botões "Login" na nav-bar são decorativos (sem navegação). Não há dependências de formulário (zod, react-hook-form) instaladas. O projeto usa React 19 + shadcn/ui + Tailwind CSS 4 + React Router DOM v7.

## Goals / Non-Goals

**Goals:**
- Criar rota `/entrar` com formulário de login (email + senha + submit)
- Criar rota `/cadastro` com formulário de solicitação de colaborador
- Validar formulários com Zod + react-hook-form
- Usar componentes shadcn/ui existentes (Card, Input, Button, Combobox)
- Adicionar navegação nos botões "Login" da nav-bar
- Adicionar link "Não tem conta? Cadastre-se" na página de login e "Já tem conta? Entre" na página de cadastro

**Non-Goals:**
- Implementar lógica real de autenticação (API calls, tokens, sessão) — os formulários apenas fazem submit, sem integração com backend real
- Proteger rotas (guard/redirect) — escopo futuro
- Gerenciamento de estado global de usuário/auth
- Página de recuperação de senha

## Decisions

- **react-hook-form + @hookform/resolvers/zod**: Escolha padrão para formulários complexos com validação declarativa. O projeto já segue boas práticas modernas de React, e essa dupla é o padrão da comunidade React + shadcn/ui.
- **Combobox para role**: O projeto já possui o componente Combobox do @base-ui/react em `src/components/lib/combobox.tsx`. Usaremos ele para o campo "role" no cadastro, com opções fixas: desenvolvedor, design, redator, pesquisador.
- **DTOs em `src/types/auth-types.ts`**: Alinhado com a estrutura existente de tipos em `src/types/`. `RequestLoginDTO` e `RequestSignupDTO` definem o contrato dos formulários.
- **Schemas Zod em `src/schemas/auth-schemas.ts`**: Separação clara entre schema de validação e tipos DTO. Os schemas geram os tipos inferidos.
- **Rotas filhas do RootLayout**: As páginas de login e cadastro seguem o mesmo padrão das demais (dentro do layout padrão com header/footer).
- **Sem `export default`**: Seguindo a convenção do projeto (named exports only).

## Risks / Trade-offs

- **[Combobox complexidade]** O Combobox do @base-ui/react é mais verboso que um `<select>` nativo. → Mantemos o uso padrão com lista simples sem busca/filtro para reduzir complexidade.
- **[Mocking]** Sem integração real de API, o submit dos formulários será um placeholder. → As tasks incluirão a estrutura de handler MSW para facilitar integração futura.
