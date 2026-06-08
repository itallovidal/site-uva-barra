## Why

O admin do site está com inconsistências de domínio e de integração com o backend. A criação de colaboradores não envia os dados para o endpoint correto, a listagem de usuários usa um endpoint diferente do esperado, o formulário de notícias não mostra as tags da categoria selecionada, e parte da interface ainda usa o termo "artigos" em um contexto que deve ser tratado como "notícias".

## What Changes

- Ajustar a página de criação de colaborador para enviar o payload autenticado para `POST /user/`
- Garantir que `profession` seja sempre enviada em uppercase
- Ajustar a listagem de colaboradores para consumir `GET /user/list` com bearer token
- Impedir texto livre no dropdown de profissão do cadastro de colaborador, mantendo apenas opções predefinidas
- Atualizar o formulário de criação de notícias para exibir as tags da categoria selecionada, considerando que categorias agora retornam um vetor de objetos com `id`, `name` e `tags`
- Alterar os endpoints de listagem de notícias publicadas, não publicadas e por categoria para os novos contratos autenticados
- Adicionar busca e filtro por status publicado/não publicado na página de listagem de notícias
- Revisar a UI do admin para trocar todas as referências textuais de "artigos" para "notícias"

## Capabilities

### New Capabilities

- `admin-user-create`: criação de usuários autenticados no backend
- `admin-user-list`: listagem autenticada de colaboradores/usuários
- `news-category-tags`: exibição de tags associadas à categoria selecionada no formulário de notícias
- `news-listing-filtering`: listagem de notícias com busca e filtro por status

### Modified Capabilities

- `admin-layout`: ajustes de nomenclatura e textos do admin para "notícias"
- `news-create-form`: integração com o novo formato de categorias e tags
- `admin-colaboradores-list`: atualização do endpoint de listagem
- `admin-colaborator-card`: adequação dos campos e textos do cadastro de colaborador
- `news-listing-page`: novos endpoints, busca e filtro por status

## Impact

- O cadastro de colaboradores passa a persistir no backend real
- A listagem de colaboradores passa a refletir os dados do endpoint autenticado
- O formulário de notícias passa a orientar melhor a seleção de tags por categoria
- A listagem de notícias fica mais útil para operação editorial com pesquisa e filtro por status
- O admin fica consistente com o domínio do produto, usando "notícias" em vez de "artigos"
