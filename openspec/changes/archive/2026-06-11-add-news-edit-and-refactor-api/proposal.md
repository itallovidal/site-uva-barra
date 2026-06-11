## Why

A listagem de notícias no admin não possui uma ação de editar, forçando o usuário a recriar conteúdo quando encontra erros. Além disso, a função de criação de notícia está diretamente no componente da página (`news-create-page.tsx`), violando o padrão do projeto onde chamadas de API devem ficar em `@src/api/` (ver `src/api/collaborators/create-user.ts`).

## What Changes

1. **Adicionar botão "Editar" no card de listagem admin**: O `AdminNewsCard` na página `news-listing-page.tsx` receberá uma nova ação que redireciona para `/admin/news/edit/:id`.
2. **Criar página de edição de notícia**: Nova rota `/admin/news/edit/:id` renderizando `NewsEditPage`, com layout idêntico ao `NewsCreatePage` mas usando `NewsForm` em modo `edit` e carregando os dados da notícia via `GET /news/:id`.
3. **Refatorar criação de notícia para API client**: Mover a lógica de `POST /news` do `news-create-page.tsx` para `src/api/news/create-news.ts`, seguindo o padrão de `src/api/collaborators/create-user.ts`.
4. **Criar API client para atualização de notícia**: Adicionar `src/api/news/update-news.ts` para `PUT /news/:id`, consumido pela página de edição.
5. **Atualizar specs**: Delta specs para `admin-articles-list` (nova ação de editar) e criação de specs para `news-edit-page` e `news-api-client`.

## Capabilities

### New Capabilities
- `news-edit-page`: Página de edição de notícia com rota `/admin/news/edit/:id`, reutilizando `NewsForm` em modo `edit` e pré-populando dados.
- `news-api-client`: Funções de API para notícias (`create-news`, `update-news`) em `src/api/news/`, seguindo o padrão de colaboradores.

### Modified Capabilities
- `admin-articles-list`: Adicionar ação de "Editar" no card de listagem, que redireciona para a página de edição.

## Impact

- `src/pages/admin/news-listing-page.tsx`: Adicionar ação de editar nos cards.
- `src/pages/admin/news-create-page.tsx`: Refatorar para usar `createNews` de `@src/api/news/create-news`.
- `src/pages/admin/news-edit-page.tsx`: Nova página de edição (nova rota em `src/routes/index.tsx`).
- `src/api/news/create-news.ts`: Nova função de API para criar notícia.
- `src/api/news/update-news.ts`: Nova função de API para atualizar notícia.
- `src/api/news/get-news-by-id.ts`: Possível ajuste para retornar dados compatíveis com `NewsFormData`.
- `src/routes/index.tsx`: Nova rota `/admin/news/edit/:id`.
- Mocks MSW: Adicionar/verificar handlers para `PUT /news/:id` e ajustar `POST /news` se necessário.
