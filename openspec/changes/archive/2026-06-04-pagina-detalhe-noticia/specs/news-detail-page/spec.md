## ADDED Requirements

### Requirement: Rota de detalhe de notícia
O sistema SHALL expor a rota pública `/noticia/:id` que renderiza a página de detalhe de uma notícia identificada por UUID.

#### Scenario: Navegar para uma notícia existente
- **WHEN** o usuário clica em um card de notícia que linka para `/noticia/<uuid>`
- **THEN** o sistema renderiza a `NoticiaDetailPage` com o conteúdo da notícia correspondente

#### Scenario: Rota registrada no router público
- **WHEN** o router é inicializado
- **THEN** a rota `/noticia/:id` está disponível dentro do `RootLayout` (com NavBar e Footer)

---

### Requirement: Busca de notícia por ID
O sistema SHALL buscar a notícia via `GET /news/:id` e expor o resultado como `ResponsePayload<News>`.

#### Scenario: Busca bem-sucedida
- **WHEN** `getNewsById(id)` é chamado com um UUID válido
- **THEN** retorna `ResponsePayload<News>` com `status: 200` e `data` preenchido

#### Scenario: Notícia não encontrada
- **WHEN** `getNewsById(id)` é chamado com um UUID inexistente
- **THEN** lança um erro indicando que a notícia não foi encontrada

---

### Requirement: Hook de dados useNewsById
O sistema SHALL fornecer o hook `useNewsById(id)` que gerencia o ciclo de carregamento, sucesso e erro seguindo o padrão `useState + useEffect` do projeto.

#### Scenario: Carregamento inicial
- **WHEN** o hook é montado com um `id` válido
- **THEN** `isLoading` é `true` e `news` é `null` até a resposta chegar

#### Scenario: Dados carregados
- **WHEN** a requisição é concluída com sucesso
- **THEN** `isLoading` é `false`, `news` contém o objeto `News` e `error` é `null`

#### Scenario: Erro na requisição
- **WHEN** a requisição falha
- **THEN** `isLoading` é `false`, `news` é `null` e `error` contém a mensagem de erro

---

### Requirement: Layout da página de detalhe
O sistema SHALL exibir o conteúdo da notícia na seguinte ordem vertical: imagem de capa → tags → badge de categoria (vermelho) → resumo → corpo da notícia.

#### Scenario: Imagem de capa presente
- **WHEN** `news.coverImageUrl` está preenchido
- **THEN** uma `<img>` com a URL da capa é exibida no topo da página com `object-fit: cover`

#### Scenario: Imagem de capa ausente
- **WHEN** `news.coverImageUrl` está vazio ou nulo
- **THEN** a imagem fallback `/agencia-uva-fallback.jpg` é exibida

#### Scenario: Tags exibidas
- **WHEN** `news.tags` contém itens
- **THEN** cada tag é renderizada como um badge/chip abaixo da imagem de capa

#### Scenario: Badge de categoria
- **WHEN** a página é renderizada
- **THEN** `news.category` é exibido como badge com fundo vermelho (`bg-red-600`) e texto branco, igual ao padrão dos cards

#### Scenario: Resumo exibido
- **WHEN** a página é renderizada
- **THEN** `news.summary` é exibido em destaque (fonte maior ou itálico) entre o badge de categoria e o corpo

---

### Requirement: Renderização de conteúdo HTML
O sistema SHALL detectar conteúdo HTML pela presença de `<main id="materia">` em `news.content` e renderizá-lo diretamente com `dangerouslySetInnerHTML`.

#### Scenario: Conteúdo HTML detectado
- **WHEN** `news.content` contém a string `<main id="materia">`
- **THEN** o conteúdo é injetado via `dangerouslySetInnerHTML` dentro de um wrapper com classe `prose max-w-none`

#### Scenario: Conteúdo Markdown detectado
- **WHEN** `news.content` NÃO contém `<main id="materia">`
- **THEN** o conteúdo é renderizado com `<Markdown remarkPlugins={[remarkGfm]}>` dentro de um wrapper com classe `prose max-w-none`

---

### Requirement: Estado de carregamento da página
O sistema SHALL exibir feedback visual enquanto a notícia está sendo carregada.

#### Scenario: Carregando
- **WHEN** `isLoading` é `true`
- **THEN** um skeleton ou spinner é exibido no lugar do conteúdo

#### Scenario: Erro
- **WHEN** `error` não é nulo
- **THEN** uma mensagem de erro é exibida com opção de retornar à página inicial

---

### Requirement: Mock MSW para GET /news/:id
O sistema SHALL ter um handler MSW que responde a `GET /news/:id` com uma notícia genérica em Markdown usando a imagem fallback, para uso em desenvolvimento.

#### Scenario: ID conhecido retorna notícia
- **WHEN** MSW está ativo e `GET /news/3f6494ec-6366-43af-8572-440f07c4bf8f` é requisitado
- **THEN** retorna `ResponsePayload<News>` com uma notícia genérica em Markdown e `coverImageUrl: "/agencia-uva-fallback.jpg"`

#### Scenario: ID desconhecido retorna 404
- **WHEN** MSW está ativo e `GET /news/<uuid-desconhecido>` é requisitado
- **THEN** retorna `ResponsePayload` com `status: 404` e mensagem de erro
