## Context

O site possui navegação e rodapé com links para `/sobre` que atualmente levam a 404. É necessário criar a página institucional da Agência UVA Barra seguindo os padrões visuais existentes (Tailwind CSS 4, shadcn/ui, phosphor-icons).

A página deve conter:
- Banner full-width com imagem de fundo e título centralizado (~20vh)
- Texto institucional com a história da agência
- Listagem de colaboradores agrupados por categoria (ex: Redação, Criação, Desenvolvimento)

## Goals / Non-Goals

**Goals:**
- Criar rota `/sobre` no router do React Router DOM
- Criar página `SobrePage` com banner, texto institucional e listagem de colaboradores
- Reutilizar padrão visual de barra vertical vermelha (`bg-red-600 rounded-full h-8 w-1.5`) para títulos de categoria de colaboradores
- Manter consistência com layout existente (`max-w-7xl mx-auto px-4 py-6`)

**Non-Goals:**
- Não alterar navegação ou rodapé (já possuem link `/sobre`)
- Não implementar backend ou API para dados dos colaboradores (dados estáticos no componente)
- Não criar página de colaborador individual

## Decisions

### 1. Banner Full-width com Imagem Unsplash
**Decision**: Banner com `h-[20vh]` e imagem de fundo via URL Unsplash, com overlay escuro para legibilidade.

**Rationale**: Unsplash fornece imagens gratuitas sem necessidade de CDN própria. Overlay escuro garante contraste do texto branco.

**Alternatives considered**:
- Imagem local → maior bundle size, sem benefício significativo
- Gradiente CSS puro → menos impacto visual

### 2. Dados dos Colaboradores em Arquivo Separado
**Decision**: Criar `src/data/team-members.ts` com array estático de colaboradores, tipado com TypeScript.

**Rationale**: Dados mudam com baixa frequência e não justificam API. Arquivo separado facilita manutenção sem modificar o componente de listagem.

**Alternatives considered**:
- Dados inline no componente → mistura dados com apresentação
- CMS/API externa → overengineering para dados estáticos

### 3. Agrupamento por Categoria com Componente `TeamSection`
**Decision**: Reutilizar o padrão de `CategorySection` (barra vermelha + título) para cada categoria de colaborador. Criar `TeamSection` que recebe categoria e lista de membros, renderizando `TeamMemberCard` para cada um.

**Rationale**: Consistência visual com o resto do site. Componentização permite reúso futuro.

### 4. Componente `TeamMemberCard`
**Decision**: Card horizontal com foto redonda (`rounded-full`, `h-16 w-16`), nome em negrito e descrição da função.

**Rationale**: Design limpo e informativo. Tamanho compacto para listar vários membros sem ocupar muito espaço vertical.

## Risks / Trade-offs

- **Imagem Unsplash pode falhar**: Usar `onError` para fallback com gradiente ou placeholder
- **Dados estáticos exigem PR para alterar**: Aceitável para equipe pequena; se crescer, migrar para CMS simples
