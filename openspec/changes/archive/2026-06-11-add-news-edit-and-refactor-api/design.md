## Context

Atualmente, a criação de notícias em `src/pages/admin/news-create-page.tsx` contém a lógica de chamada de API inline (`fetch POST /news`). No projeto, todas as funções de API seguem o padrão de centralização em `src/api/<dominio>/<acao>.ts` (ex: `src/api/collaborators/create-user.ts`).

A listagem de notícias no admin (`src/pages/admin/news-listing-page.tsx`) já possui ações de pré-visualizar, publicar/despublicar e deletar, mas não oferece uma forma de editar uma notícia existente. O componente `NewsForm` já suporta `mode="edit"` e `defaultValues`, então a página de edição pode reutilizá-lo integralmente.

## Goals / Non-Goals

**Goals:**
- Adicionar ação de "Editar" no card de listagem de notícias do admin, redirecionando para `/admin/news/edit/:id`.
- Criar a página `NewsEditPage` que reutiliza `NewsForm` em modo `edit`, pré-carregando dados via `GET /news/:id`.
- Extrair a lógica de criação de notícia de `news-create-page.tsx` para `src/api/news/create-news.ts`.
- Criar `src/api/news/update-news.ts` para a lógica de atualização consumida pela página de edição.
- Atualizar as rotas em `src/routes/index.tsx` para incluir `/admin/news/edit/:id`.

**Non-Goals:**
- Alterar o comportamento do `NewsForm` (o componente já suporta edição).
- Modificar o schema de validação `newsSchema`.
- Alterar o layout ou design do `AdminNewsCard` além de adicionar a nova ação.
- Criar endpoints de API reais (apenas ajustar mocks MSW se necessário).

## Decisions

1. **Padrão de API em `src/api/news/`**: Seguir exatamente o padrão de `src/api/collaborators/create-user.ts` — função named export, tipagem de DTO, leitura de token do `localStorage`, tratamento de erro com `throw new Error`. Isso mantém consistência e facilita testes.
2. **Rota de edição**: Usar `/admin/news/edit/:id` em vez de `/admin/news/:id/edit` para evitar conflito com possíveis rotas futuras de detalhe. Isso segue o padrão já usado em colaboradores (ex: `/admin/collaborators/register`).
3. **Reutilização do `NewsForm`**: A página de edição usará `NewsForm` com `mode="edit"` e `defaultValues` populados a partir do resultado de `getNewsById`. Isso evita duplicação de código de formulário.
4. **Redirecionamento pós-edição**: Após sucesso no update, redirecionar para `/admin/news?status=unpublished` — o mesmo padrão da criação, para o admin ver a notícia na lista de não publicadas.
5. **Não alterar o spec de `news-create-form`**: O spec já prevê `mode="edit"`. A página de edição é uma nova capability, não uma modificação do form em si.

## Risks / Trade-offs

- **[Risco] Dados de `getNewsById` podem não alinhar perfeitamente com `NewsFormData`** → Mitigação: mapear campos explicitamente na página de edição, convertindo `null` para `undefined` onde necessário e garantindo que `tags` seja um array.
- **[Risco] Ação de editar pode quebrar o layout do `AdminNewsCard` se houver muitas ações** → Mitigação: o componente já usa `flex-wrap` no container de botões, então a quebra de linha é automática.
- **[Risco] Mock MSW para `PUT /news/:id` pode não existir ou estar incompleto** → Mitigação: verificar e, se necessário, ajustar o handler em `src/mocks/news/update-news.ts` para refletir o payload esperado.
