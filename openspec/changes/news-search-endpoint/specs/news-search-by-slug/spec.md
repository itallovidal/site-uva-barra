## ADDED Requirements

### Requirement: Filtragem por slug nos fixtures do mock

Os itens do array `latestNewsExample` em `src/mocks/news/news-fixtures.ts` SHALL incluir o campo `slug` (string kebab-case derivada do título). O campo é necessário para que o handler MSW possa filtrar por slug.

#### Scenario: Itens de fixture possuem slug

- **WHEN** o array `latestNewsExample` é acessado
- **THEN** cada item SHALL conter um campo `slug` não vazio

### Requirement: Handler MSW filtra por title e slug

O handler `handleSearchNews` em `src/mocks/news/search-news.ts` SHALL verificar correspondência parcial case-insensitive em `title` OU em `slug` ao filtrar as notícias pelo termo de busca `q`.

#### Scenario: Busca encontra notícia pelo título

- **WHEN** `POST /news/search?q=<term>` é chamado e `term` está contido no `title` de uma notícia
- **THEN** a notícia SHALL aparecer nos resultados

#### Scenario: Busca encontra notícia pelo slug

- **WHEN** `POST /news/search?q=<term>` é chamado e `term` está contido no `slug` de uma notícia (mas não no título)
- **THEN** a notícia SHALL aparecer nos resultados

#### Scenario: Busca sem correspondência retorna lista vazia

- **WHEN** `POST /news/search?q=<term>` é chamado e nenhuma notícia tem `term` no título ou slug
- **THEN** o campo `data` da resposta SHALL ser um array vazio
