## 1. API — Busca de notícia por ID

- [x] 1.1 Criar `src/api/news/get-news-by-id.ts` com função `getNewsById(id: string): Promise<ResponsePayload<News>>` usando `fetch` para `GET ${env.VITE_API_BASE_URL}/news/${id}`
- [x] 1.2 Lançar erro se `!response.ok`

## 2. Hook — useNewsById

- [x] 2.1 Criar `src/hooks/use-news-by-id.ts` com hook `useNewsById(id: string)` seguindo o padrão `useState + useEffect` do projeto
- [x] 2.2 O hook deve expor `{ news: News | null, isLoading: boolean, error: string | null }`

## 3. Mock MSW — Handler GET /news/:id

- [x] 3.1 Adicionar `newsDetailFixture` em `src/mocks/news/news-fixtures.ts`: notícia com `id: '3f6494ec-6366-43af-8572-440f07c4bf8f'`, `content` em Markdown genérico, `coverImageUrl: '/agencia-uva-fallback.jpg'`
- [x] 3.2 Criar `src/mocks/news/get-news-by-id.ts` com handler MSW `http.get('/news/:id', ...)` que retorna `newsDetailFixture` para o ID conhecido e 404 para os demais
- [x] 3.3 Registrar o novo handler em `src/mocks/handlers.ts`

## 4. Página — NoticiaDetailPage

- [x] 4.1 Criar `src/pages/news-detail-page.tsx` com a função componente `NoticiaDetailPage`
- [x] 4.2 Ler o parâmetro `:id` via `useParams` e passar para `useNewsById`
- [x] 4.3 Renderizar estado de carregamento (skeleton ou spinner) enquanto `isLoading` é `true`
- [x] 4.4 Renderizar mensagem de erro com link para a página inicial quando `error` não é nulo
- [x] 4.5 Implementar layout de conteúdo na ordem: imagem de capa → tags → badge de categoria → resumo → corpo da notícia
- [x] 4.6 Imagem de capa: usar `coverImageUrl` ou fallback `/agencia-uva-fallback.jpg`; aplicar `object-cover w-full`
- [x] 4.7 Tags: renderizar cada tag como chip/badge abaixo da imagem
- [x] 4.8 Badge de categoria: `bg-red-600` texto branco `rounded-full uppercase` (padrão dos cards)
- [x] 4.9 Resumo: exibido entre o badge de categoria e o corpo, em destaque (ex.: `text-lg italic text-zinc-600`)
- [x] 4.10 Corpo HTML: se `content.includes('<main id="materia">')`, usar `<div dangerouslySetInnerHTML={{ __html: content }} className="prose max-w-none" />`
- [x] 4.11 Corpo Markdown: caso contrário, usar `<Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>` dentro de wrapper `prose max-w-none` com as classes de estilo já usadas no projeto

## 5. Rota — Registro no Router

- [x] 5.1 Adicionar `{ path: '/noticia/:id', element: <NoticiaDetailPage /> }` nos filhos do `RootLayout` em `src/routes/index.tsx`

## 6. Verificação

- [x] 6.1 Verificar que `http://localhost:5173/noticia/3f6494ec-6366-43af-8572-440f07c4bf8f` carrega a notícia mock com imagem fallback, tags, badge vermelho, resumo e corpo em Markdown
- [x] 6.2 Verificar que um ID inexistente exibe a mensagem de erro
- [x] 6.3 Verificar que o build TypeScript (`tsc --noEmit`) passa sem erros
