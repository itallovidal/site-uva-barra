## 1. Admin de usuários

- [ ] 1.1 Atualizar o fluxo de criação de colaborador para enviar `POST /user/` com autenticação Bearer
- [ ] 1.2 Normalizar `profession` para uppercase antes de enviar o formulário
- [ ] 1.3 Trocar a listagem de colaboradores para consumir `GET /user/list`
- [ ] 1.4 Restringir o campo de profissão a um dropdown com opções fixas, sem texto livre

## 2. Notícias e categorias

- [ ] 2.1 Ajustar o consumo de categorias para o novo formato de lista de objetos com `id`, `name` e `tags`
- [ ] 2.2 Exibir as tags da categoria selecionada no formulário de criação de notícias
- [ ] 2.3 Atualizar a listagem de notícias publicadas para `GET /news?page=1&perPage=10&status=published`
- [ ] 2.4 Atualizar a listagem de notícias não publicadas para `GET /news?page=1&perPage=10&status=unpublished`
- [ ] 2.5 Atualizar a listagem por categoria para `GET /news/category/:slug?page=1&perPage=10`
- [ ] 2.6 Atualizar a listagem por categoria publicada para `GET /news/category/:slug?page=1&perPage=10&status=published`
- [ ] 2.7 Garantir bearer token em todas as requisições acima
- [ ] 2.8 Adicionar busca e seletor de status na página de listagem de notícias

## 3. Textos do admin

- [ ] 3.1 Substituir referências de "artigos" por "notícias" em títulos, labels, mensagens e CTAs do admin
- [ ] 3.2 Revisar os componentes e páginas afetados para manter consistência de linguagem

## 4. Validação

- [ ] 4.1 Verificar que o payload de criação de usuário contém os campos esperados pelo backend
- [ ] 4.2 Verificar que o formulário de notícias mostra as tags da categoria selecionada
- [ ] 4.3 Verificar que a listagem de notícias respeita pesquisa e filtro por status
- [ ] 4.4 Executar lint ou checagem de tipos nas áreas alteradas quando a implementação começar
