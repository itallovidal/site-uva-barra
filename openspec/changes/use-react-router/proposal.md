## Why

O projeto precisa codificar o uso do React Router DOM como padrão. Atualmente, há inconsistência no uso de componentes de navegação, com desenvolvedores usando `<a>` tags soltas para navegação quando deveriam usar `Link` do React Router. Isso causa problemas com SPA, pré-carregamento, e inconsistência na experiência de usuário.

Esta mudança estabelece:
- **Navegação declarativa** via React Router como padrão
- **Tipografia adequada** em links de navegação (fontes menores, sem underline)
- **Organização clara de hooks** em pasta dedicada
- **Documentação explícita** das pastas do projeto

## What Changes

- **BREAKING**: Links de navegação internos devem usar `Link` do React Router, não `<a>` soltos
- Navegação com `<a>` soltos só permitida para links externos (detected via `target="_blank"` ou href starting with `http`)
- **Nova pasta**: `src/hooks/` para custom hooks, substituindo hooks espalhados em componentes
- **Nova pasta**: `src/pages/` para componentes de rota
- **Nova pasta**: `src/components/[componente-global]/` para componentes compartilhados
- **Nova pasta**: `src/components/[pagina]/` para componentes específicos de página

## Capabilities

### New Capabilities
- **react-router-navigation**: Especificação para navegação via React Router DOM, proibindo `<a>` soltos para navegação interna
- **folder-organization**: Especificação organizada de pastas do projeto com definição clara de propósito
- **hooks-separation**: Especificação que exige hooks customizados em pasta dedicada `src/hooks/`
- **typography-rules**: Regras de tipografia para elementos de navegação (fontes menores, sem underline)

## Impact

- **Affected components**: Todos os componentes que usam navegação interna precisam ser revisados para usar `Link`
- **Affected hooks**: Hooks customizados devem ser movidos para `src/hooks/`
- **Migration strategy**: Criar um script de migration para automatizar a mudança de `<a>` para `Link` onde apropriado
- **Breaking change**: Código existente com `<a>` para navegação interna precisará ser atualizado