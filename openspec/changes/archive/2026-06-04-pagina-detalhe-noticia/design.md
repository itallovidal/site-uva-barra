## Context

O projeto é um portal de notícias (Agência UVA Barra) construído como SPA React. Os cards de notícia já geram links `/noticia/:id`, mas a rota não existe no router — qualquer clique resulta em 404. O conteúdo das notícias pode vir em dois formatos distintos do backend: Markdown puro ou HTML legado com estrutura `<main id="materia">`. A camada de mocks usa MSW v2 e precisa de um handler para `GET /news/:id`. As bibliotecas `react-markdown` e `remark-gfm` já estão instaladas.

## Goals / Non-Goals

**Goals:**

- Criar a rota `/noticia/:id` no router público
- Criar `getNewsById` (API), `useNewsById` (hook) e `NoticiaDetailPage` (página)
- Detectar o formato do conteúdo e renderizar HTML ou Markdown de forma segura
- Adicionar mock MSW para `GET /news/:id` com notícia genérica em Markdown
- Exibir layout: capa → tags → badge categoria (vermelho) → resumo → corpo

**Non-Goals:**

- Paginação de notícias relacionadas
- Compartilhamento social
- Roteamento por slug (continua usando `id` como identifica o projeto)
- Autenticação na página de detalhe

## Decisions

### 1. Identificador de rota: `id` em vez de `slug`

**Decisão:** usar `/noticia/:id` com UUID.

**Razão:** `NewsPreviewDTO` expõe `id` mas não `slug`; todos os cards existentes já geram links com `id`. Adicionar `slug` à `NewsPreviewDTO` implicaria mudança no contrato de API e nos fixtures — fora do escopo desta mudança.

**Alternativa considerada:** `/noticia/:slug` — descartada porque exigiria alterar todos os cards e a API/mocks.

---

### 2. Detecção de formato: busca por `<main id="materia">`

**Decisão:** verificar `content.includes('<main id="materia">')` para distinguir HTML de Markdown.

**Razão:** é o padrão já estabelecido pelo backend conforme descrito pelo usuário. Simples e sem ambiguidade.

**Alternativa considerada:** tentar parsear como HTML e cair em Markdown se falhar — mais frágil e desnecessário dado o contrato existente.

---

### 3. Renderização de HTML: `dangerouslySetInnerHTML` com container controlado

**Decisão:** para conteúdo HTML, usar `<div dangerouslySetInnerHTML={{ __html: content }} />` dentro de um wrapper com estilos Tailwind `prose`.

**Razão:** o conteúdo HTML vem de um CMS interno confiável. Não há necessidade de sanitização extra neste contexto.

**Alternativa considerada:** biblioteca `dompurify` — overhead desnecessário para conteúdo interno.

---

### 4. Renderização de Markdown: `react-markdown` + `remark-gfm` (já instalados)

**Decisão:** reutilizar o padrão já em uso em `news-published-page.tsx` e `news-publication-review-page.tsx`.

**Razão:** consistência com o projeto; zero novas dependências.

---

### 5. Mock: fixture com Markdown + imagem fallback

**Decisão:** o handler `GET /news/:id` retorna a notícia de `newsDetailFixture` (ID fixo `3f6494ec-6366-43af-8572-440f07c4bf8f`) ou um 404 para IDs desconhecidos.

**Razão:** o UUID do exemplo do usuário deve funcionar out-of-the-box; outros IDs retornam 404 realisticamente.

---

### 6. Tipo de retorno da API de detalhe: `News` (entidade completa)

**Decisão:** `GET /news/:id` retorna `ResponsePayload<News>` com a entidade completa (inclui `content`).

**Razão:** `NewsPreviewDTO` não tem `content`; a entidade `News` já existe em `entities.ts` e tem todos os campos necessários.

## Risks / Trade-offs

- **HTML com estilos externos**: notícias HTML antigas podem ter CSS inline ou classes que conflitam com o Tailwind do site → Mitigação: isolar o bloco HTML com `prose max-w-none` e aceitar que estilos legados podem escapar.
- **IDs hardcoded no mock**: o mock só reconhece o UUID de exemplo; em modo MSW, qualquer outro ID retorna 404 → Mitigação: documentado; o mock é apenas para desenvolvimento.
- **`dangerouslySetInnerHTML`**: XSS se o backend for comprometido → Mitigação: conteúdo é de fonte interna; risco aceitável no contexto.
