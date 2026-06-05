## MODIFIED Requirements

### Requirement: POST /news/search mock handler

O sistema SHALL fornecer um handler MSW para `POST /news/search` que aceita os parâmetros `q`, `order`, `page` e `perPage` como query strings. O handler SHALL filtrar notícias por correspondência parcial case-insensitive em `title` OU `slug`, e ordenar os resultados por `publishedAt` conforme o parâmetro `order`.

#### Scenario: Retorna notícias filtradas por título

- **WHEN** `POST /news/search?q=<term>` é feito e `term` corresponde ao `title` de notícias
- **THEN** o handler SHALL responder com HTTP 200 e JSON `{ "status": 200, "data": [...], "meta": { page, perPage, total, totalPages } }`
- **AND** apenas notícias cujo `title` contém `term` (case-insensitive) SHALL aparecer em `data`

#### Scenario: Retorna notícias filtradas por slug

- **WHEN** `POST /news/search?q=<term>` é feito e `term` corresponde ao `slug` de notícias (mas não ao título)
- **THEN** o handler SHALL incluir essas notícias em `data`

#### Scenario: Ordena resultados por publishedAt desc (padrão)

- **WHEN** `POST /news/search?q=<term>` é feito sem `order` ou com `order=desc`
- **THEN** os itens em `data` SHALL estar ordenados por `publishedAt` decrescente (mais recente primeiro)
- **AND** itens com `publishedAt: null` SHALL aparecer ao final

#### Scenario: Ordena resultados por publishedAt asc

- **WHEN** `POST /news/search?q=<term>&order=asc` é feito
- **THEN** os itens em `data` SHALL estar ordenados por `publishedAt` crescente (mais antigo primeiro)
- **AND** itens com `publishedAt: null` SHALL aparecer ao final
