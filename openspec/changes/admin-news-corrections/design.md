## Context

O projeto já possui uma base de admin, formulários e hooks de dados, mas alguns fluxos ainda assumem contratos antigos do backend ou nomenclatura genérica de conteúdo. O backend agora expõe endpoints autenticados para usuários e notícias, além de categorias com tags embutidas em cada item.

## Goals / Non-Goals

**Goals:**

- Centralizar os novos contratos de API do admin em uma experiência consistente
- Fazer o cadastro de colaborador depender apenas de opções válidas de profissão
- Exibir tags vinculadas à categoria escolhida no formulário de notícias
- Atualizar a listagem de notícias com busca e filtro por status
- Padronizar a linguagem do admin para "notícias"

**Non-Goals:**

- Não redesenhar todo o admin visualmente
- Não alterar regras de negócio fora dos fluxos descritos
- Não adicionar novos papéis ou categorias além do que o backend já fornece
- Não introduzir edição em massa ou novas ações administrativas além do escopo pedido

## Decisions

**1. Endpoints autenticados no admin**

- As requisições de usuários e notícias devem incluir `Authorization: Bearer <token>`
- O token deve vir do estado de autenticação existente, sem duplicar lógica de sessão em cada tela
- O fluxo de criação de colaborador deve usar o endpoint `POST /user/`
- A listagem de colaboradores deve usar `GET /user/list`

**2. Profissão em uppercase e sem entrada livre**

- O campo de profissão deve ser restrito a um conjunto fixo de valores
- O valor enviado ao backend deve ser normalizado para uppercase antes de submeter o formulário
- Isso evita payloads inválidos e reduz divergência entre UI e backend

**3. Categorias com tags embutidas**

- O fetch de categorias passa a considerar que a resposta é uma lista de objetos com `id`, `name` e `tags`
- Ao selecionar uma categoria no formulário de notícia, as tags daquela categoria devem ser exibidas como referência para a criação/edição do conteúdo
- A UI deve tratar a ausência de tags como estado vazio, não como erro

**4. Listagem de notícias com status e busca**

- A listagem deve oferecer um campo de busca textual e um seletor de status
- Os estados suportados pelo filtro devem refletir os contratos do backend: publicado e não publicado
- A página deve compor query params com paginação, busca e status sem misturar responsabilidades com o hook de autenticação

**5. Revisão de nomenclatura no admin**

- Todos os textos visíveis no admin que mencionam "artigos" devem ser ajustados para "notícias"
- A mudança deve ser aplicada nos rótulos, títulos, descrições, mensagens vazias e CTAs afetados

## Risks / Trade-offs

- A troca de contrato de categorias pode exigir ajustes em hooks e tipos existentes
- A filtragem por status depende do backend aceitar e respeitar os parâmetros de query
- A atualização de nomenclatura pode tocar vários componentes, aumentando o risco de inconsistência parcial se a revisão não for completa
