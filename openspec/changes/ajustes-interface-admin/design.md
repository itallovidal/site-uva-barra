## Context

O admin do site tem 4 problemas de interface/fluxo: (1) layout quebrado na home page (cards sem wrap), (2) redirect pós-criação não leva para não publicadas, (3) falta ação de deletar notícia, (4) home do admin é dashboard em vez da listagem. Nenhuma dessas mudanças envolve nova arquitetura ou dependências externas.

## Goals / Non-Goals

**Goals:**
- Corrigir layout da listagem de cards na home page (flex-wrap ou grid)
- Redirecionar para listagem de não publicadas após criar notícia
- Adicionar ação de deletar notícia com confirmação
- Tornar listagem de notícias a página inicial do admin

**Non-Goals:**
- Não alterar o design visual dos componentes existentes
- Não criar novas páginas ou rotas além do `/admin/dashboard`
- Não implementar soft delete ou lixeira
- Não modificar a listagem pública de notícias

## Decisions

1. **Layout home page**: Substituir `flex flex-col gap-4 md:flex-row` por `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`. Grid é mais previsível que flex-wrap para cards de tamanho variável. Alternativa considerada: `flex flex-wrap` - rejeitada porque não garante alinhamento consistente entre linhas.

2. **Redirect pós-criação**: Alterar `navigate('/admin/news')` para `navigate('/admin/news?status=unpublished')`. A listagem admin já lê `statusFilter` do estado local - será necessário inicializar o filtro a partir da query string. Alternativa: manter estado e só mudar o filtro - rejeitada porque perderia o estado ao recarregar.

3. **Deletar notícia**: Adicionar action no array `actions` do `AdminNewsCard`. Usar `window.confirm()` para confirmação (evita adicionar dependência de dialog). Chamar `DELETE /news/:id` e remover o item da lista local. O mock MSW já existe (`src/mocks/news/delete-news.ts`).

4. **Admin home**: Trocar elemento da rota `/admin` de `AdminDashboard` para `AdminNewsListingPage`. Mover `AdminDashboard` para `/admin/dashboard`. Adicionar entrada no sidebar para o dashboard.

## Risks / Trade-offs

- [Home page grid] Ao mudar para grid fixo de 3 colunas, telas muito estreitas podem mostrar cards muito comprimidos ↔ Mitigação: usar `grid-cols-1` em mobile, `md:grid-cols-2` em tablet, `lg:grid-cols-3` em desktop
- [Query string status] Se o usuário digitar manualmente `/admin/news` sem query string, o filtro padrão será "published" (comportamento atual) - isso é aceitável, o redirect pós-criação é que leva com o filtro
- [Deletar] `window.confirm()` é funcional mas não segue o design system do Radix UI ↔ Mitigação: usar o componente `Dialog` já existente no projeto (mesmo usado no preview). Custo baixo de implementação.
