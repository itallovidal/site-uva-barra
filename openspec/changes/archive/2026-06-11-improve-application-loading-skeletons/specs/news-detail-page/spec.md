## MODIFIED Requirements

### Requirement: Estado de carregamento da página
O sistema SHALL exibir um skeleton animado enquanto a notícia está sendo carregada.

#### Scenario: Carregando
- **WHEN** `isLoading` é `true`
- **THEN** o `NewsDetailSkeleton` é renderizado no lugar do conteúdo
- **AND** o skeleton respeita o layout `mx-auto max-w-3xl px-4 py-8`

#### Scenario: Erro
- **WHEN** `error` não é nulo
- **THEN** uma mensagem de erro é exibida com opção de retornar à página inicial

## ADDED Requirements

### Requirement: Preview de notícia com skeleton
O sistema SHALL exibir um skeleton durante o carregamento do preview de notícia no dialog.

#### Scenario: Preview carregando
- **WHEN** `isLoadingPreview` é `true`
- **THEN** o `NewsDetailSkeleton` é renderizado dentro do dialog
- **AND** NÃO exibe texto "Carregando conteúdo..."
