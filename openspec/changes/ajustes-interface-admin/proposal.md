## Why

A interface de administração do site precisa de ajustes para melhorar o fluxo de trabalho: a listagem de notícias na home page está com layout quebrado, o redirect após criar notícia não leva para a listagem correta, não há opção de deletar notícias, e a página inicial do admin deveria ser a listagem de notícias (mais útil que o dashboard atual).

## What Changes

1. **Home page - layout de listagem**: A seção de cards após o grid principal (`home-page.tsx` linha 37-45) está usando `flex-row` sem wrap, fazendo os cards ficarem todos na mesma linha. Trocar para `flex-wrap` ou usar grid responsivo para quebrar linhas.
2. **Redirect pós-criação de notícia**: Ao criar notícia, redirecionar para `/admin/news` com filtro de não publicadas (`status=unpublished`), para que o admin veja imediatamente a notícia criada.
3. **Ação de deletar notícia**: Adicionar botão "Deletar" no card de listagem admin (`AdminNewsCard`), que chama `DELETE /news/:id`, com confirmação antes de executar.
4. **Admin home = listagem**: Alterar a rota `/admin` para renderizar `AdminNewsListingPage` em vez de `AdminDashboard`. Manter o dashboard acessível por outra rota (ex: `/admin/dashboard`).

## Capabilities

### New Capabilities
Nenhuma nova capability. Todas as mudanças são modificações em capabilities existentes.

### Modified Capabilities
- `admin-articles-list`: Adicionar ação de deletar notícia no card de listagem admin
- `news-create-form`: Alterar redirect pós-criação para listagem de não publicadas
- `admin-dashboard`: Alterar rota padrão do admin para listagem de notícias (dashboard movido para `/admin/dashboard`)
- `news-card`: Corrigir layout de listagem na home page para usar flex-wrap/grid

## Impact

- **src/pages/home-page.tsx**: Alterar classe CSS da section de listagem restante
- **src/pages/admin/news-create-page.tsx**: Alterar rota de redirect (`navigate('/admin/news')` para incluir query param `?status=unpublished`)
- **src/pages/admin/news-listing-page.tsx**: Adicionar ação de deletar com confirmação e chamada API
- **src/components/admin-news-card/admin-news-card.tsx**: Nenhuma alteração necessária (já aceita ações dinâmicas)
- **src/routes/index.tsx**: Alterar elemento da rota `/admin` para `AdminNewsListingPage` e criar rota `/admin/dashboard` para `AdminDashboard`
- **src/mocks/news/delete-news.ts**: Já existe, verificar se cobre o caso de uso
