## ADDED Requirements

### Requirement: Parâmetro `order` suportado na função `searchNews`

A função `searchNews` em `src/api/news/search-news.ts` SHALL aceitar um parâmetro opcional `order` com valores `'asc'` ou `'desc'` e default `'desc'`. O valor SHALL ser enviado como query string na requisição `POST /news/search`.

#### Scenario: Requisição com order desc (padrão)

- **WHEN** `searchNews` é chamada com `term` e sem `order`
- **THEN** a requisição SHALL ser enviada para `POST /news/search?q=<term>&order=desc`

#### Scenario: Requisição com order asc

- **WHEN** `searchNews` é chamada com `term` e `order: 'asc'`
- **THEN** a requisição SHALL ser enviada para `POST /news/search?q=<term>&order=asc`

#### Scenario: Requisição com order desc explícito

- **WHEN** `searchNews` é chamada com `term` e `order: 'desc'`
- **THEN** a requisição SHALL ser enviada para `POST /news/search?q=<term>&order=desc`

### Requirement: Hook `useNewsSearch` expõe parâmetro `order`

O hook `useNewsSearch` em `src/hooks/use-news-search.ts` SHALL aceitar um segundo parâmetro opcional `order` com valores `'asc'` | `'desc'` e default `'desc'`. O valor SHALL ser repassado para `searchNews` e SHALL ser incluído nas dependências do `useEffect`.

#### Scenario: Hook busca com order padrão

- **WHEN** `useNewsSearch` é chamado apenas com `term`
- **THEN** a chamada a `searchNews` SHALL usar `order: 'desc'`

#### Scenario: Hook re-executa ao mudar order

- **WHEN** o valor de `order` passado ao hook muda
- **THEN** o hook SHALL re-executar a busca com o novo valor de `order`
