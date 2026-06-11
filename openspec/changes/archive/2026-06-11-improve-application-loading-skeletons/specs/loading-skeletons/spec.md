## ADDED Requirements

### Requirement: Componente base de Skeleton
O sistema SHALL fornecer o componente `Skeleton` do shadcn/ui em `src/components/lib/skeleton.tsx` como base para todos os skeletons da aplicação.

#### Scenario: Skeleton renderizado
- **WHEN** o componente `Skeleton` é utilizado com uma classe `className`
- **THEN** ele renderiza um `div` com `animate-pulse rounded-md bg-accent` e a classe adicional

---

### Requirement: Pasta de skeletons reutilizáveis
O sistema SHALL manter todos os componentes de skeleton reutilizáveis em `src/components/skeletons/`.

#### Scenario: Estrutura de arquivos
- **WHEN** um desenvolvedor precisa adicionar um novo skeleton
- **THEN** ele deve criar o arquivo em `src/components/skeletons/` com nome em kebab-case
- **AND** exportar o componente via named export

---

### Requirement: NewsCardSkeleton
O sistema SHALL fornecer o componente `NewsCardSkeleton` que imita o layout do `NewsCard`.

#### Scenario: Renderização vertical
- **WHEN** o `NewsCardSkeleton` é renderizado com `isVertical={true}`
- **THEN** ele exibe um skeleton com: imagem retangular (aspect-ratio 16:9), título em 2 linhas, resumo em 3 linhas, e badge de categoria

#### Scenario: Renderização horizontal
- **WHEN** o `NewsCardSkeleton` é renderizado com `isVertical={false}`
- **THEN** ele exibe um skeleton com layout horizontal: imagem à esquerda, título e resumo à direita

---

### Requirement: NewsHighlightGridSkeleton
O sistema SHALL fornecer o componente `NewsHighlightGridSkeleton` que imita o layout do `NewsHighlightGrid`.

#### Scenario: Grid de destaques
- **WHEN** o `NewsHighlightGridSkeleton` é renderizado
- **THEN** ele exibe um grid com skeletons de cards de destaque na mesma estrutura do grid real

---

### Requirement: NewsDetailSkeleton
O sistema SHALL fornecer o componente `NewsDetailSkeleton` que imita o layout da página de detalhe de notícia.

#### Scenario: Detalhe de notícia
- **WHEN** o `NewsDetailSkeleton` é renderizado
- **THEN** ele exibe: badge de categoria, título em múltiplas linhas, imagem de capa, blocos de texto para conteúdo, e tags

---

### Requirement: AdminDashboardSkeleton
O sistema SHALL fornecer o componente `AdminDashboardSkeleton` que imita o layout do `AdminDashboard`.

#### Scenario: Dashboard administrativo
- **WHEN** o `AdminDashboardSkeleton` é renderizado
- **THEN** ele exibe: título, subtítulo, e 3 seções com cards de borda arredondada contendo skeletons

---

### Requirement: CollaboratorListSkeleton
O sistema SHALL fornecer o componente `CollaboratorListSkeleton` que imita o layout da lista de colaboradores.

#### Scenario: Lista de colaboradores
- **WHEN** o `CollaboratorListSkeleton` é renderizado
- **THEN** ele exibe: título, contador, e múltiplos cards com avatar circular, nome, profissão e botões de ação

---

### Requirement: NewsListSkeleton
O sistema SHALL fornecer o componente `NewsListSkeleton` que imita o layout da listagem de notícias.

#### Scenario: Listagem de notícias
- **WHEN** o `NewsListSkeleton` é renderizado
- **THEN** ele exibe: título, contador, barra de pesquisa e filtro, e múltiplos cards de notícia com ações

---

### Requirement: NewsPublicationReviewSkeleton
O sistema SHALL fornecer o componente `NewsPublicationReviewSkeleton` que imita o layout da página de aprovação de notícias.

#### Scenario: Aprovação de notícias
- **WHEN** o `NewsPublicationReviewSkeleton` é renderizado
- **THEN** ele exibe: título, contador, e múltiplos cards de notícia com botões de ação

---

### Requirement: Uso de skeletons em loading states
O sistema SHALL substituir todos os estados de loading textual por skeletons nas páginas especificadas.

#### Scenario: Home page loading
- **WHEN** a `HomePage` está no estado `isLoading`
- **THEN** o sistema renderiza `NewsHighlightGridSkeleton` e múltiplos `NewsCardSkeleton` em grid
- **AND** NÃO exibe texto "Carregando notícias..."

#### Scenario: News detail page loading
- **WHEN** a página de detalhe de notícia está no estado `isLoading`
- **THEN** o sistema renderiza `NewsDetailSkeleton`
- **AND** NÃO exibe texto "Carregando..."

#### Scenario: Admin dashboard loading
- **WHEN** o `AdminDashboard` tiver dados sendo carregados
- **THEN** o sistema renderiza `AdminDashboardSkeleton`

#### Scenario: Collaborators list loading
- **WHEN** a `CollaboratorsListPage` está no estado `isLoading`
- **THEN** o sistema renderiza `CollaboratorListSkeleton`
- **AND** NÃO exibe texto "Carregando colaboradores..."

#### Scenario: News list loading
- **WHEN** a `NewsListingPage` está no estado `isLoading`
- **THEN** o sistema renderiza `NewsListSkeleton`
- **AND** NÃO exibe texto "Carregando notícias..."

#### Scenario: News publication review loading
- **WHEN** a `NewsPublicationReviewPage` está no estado `isLoading`
- **THEN** o sistema renderiza `NewsPublicationReviewSkeleton`
- **AND** NÃO exibe texto "Carregando notícias pendentes..."

#### Scenario: News preview loading
- **WHEN** o preview de notícia no dialog está no estado `isLoadingPreview`
- **THEN** o sistema renderiza `NewsDetailSkeleton`
- **AND** NÃO exibe texto "Carregando conteúdo..."
