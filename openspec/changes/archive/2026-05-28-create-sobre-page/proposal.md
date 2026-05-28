## Why

O site precisa de uma página "Sobre" para apresentar a Agência UVA Barra — sua história, propósito e equipe. Atualmente, o link `/sobre` existe na navegação e no rodapé, mas leva a uma página 404. Isso prejudica a credibilidade do site e a experiência do usuário.

## What Changes

- **Nova rota** `/sobre` registrada no router do React Router DOM
- **Nova página** `sobre-page.tsx` em `src/pages/` contendo:
  - Banner full-width com o nome "Agência UVA Barra"
  - Texto institucional (história, cursos atendidos, equipe)
  - Componente de listagem de colaboradores agrupados por categoria
- **Novo componente** `TeamList` para exibição dos colaboradores com foto, nome e função
- Navegação existente (`NavBar` e `Footer`) já aponta para `/sobre` — nenhuma alteração necessária

## Capabilities

### New Capabilities
- `sobre-page`: Página institucional "Sobre" com banner, texto e listagem de colaboradores
- `team-list`: Componente de listagem de colaboradores com agrupamento por categoria

### Modified Capabilities

<!-- Nenhuma capability existente será modificada -->

## Impact

- **Novo arquivo**: `src/pages/sobre-page.tsx`
- **Novo componente**: `src/components/sobre/team-list.tsx`
- **Novo arquivo**: `src/components/sobre/team-list.tsx`
- **Modificado**: `src/routes/index.tsx` — adicionar rota `/sobre`
- **Navegação**: Links existentes em `NavBar` e `Footer` já funcionarão automaticamente
- **Nenhum breaking change**: Mudanças puramente aditivas
