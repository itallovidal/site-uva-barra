## Context

O projeto utiliza React Router DOM 7 para roteamento, mas há inconsistência no uso de componentes de navegação. Atualmente, desenvolvedores usam `<a>` tags soltas para navegação interna, o que:
- Impede pré-carregamento de rotas
- Quebra o comportamento de SPA (Single Page Application)
- Causa inconsistência na experiência de usuário
- Não aproveita funcionalidades como proteção contra F5 duplo-submit

A organização de hooks está fragmentada, com hooks definidos dentro de componentes ou espalhados em `src/`

## Goals / Non-Goals

**Goals:**
- Padronizar o uso de `Link` do React Router para navegação interna
- Estabelecer organização clara de pastas para hooks e componentes
- Melhorar a manutenibilidade através da separação de responsabilidade
- Garantir consistência na experiência de navegação entre todas as páginas

**Non-Goals:**
- Migração automática de código existente (será manual)
- Novas funcionalidades de roteamento além do que React Router já oferece
- Recriar componentes de navegação quando já existem soluções do shadcn/ui

## Decisions

### 1. Use React Router Links
**Decision**: Todos os links de navegação interna devem usar `Link` do React Router

**Rationale**: 
- Preserva o comportamento de SPA
- Permite pré-carregamento de rotas
- Garante consistência de UX com loading states
- Permite proteção contra F5 duplo-submit

**Alternatives considered**:
- `react-router-dom v6` → já em uso, não há mudança de versão necessária
- Criar wrapper customizado → não necessário, `Link` já faz tudo o que precisamos
- Permitir `<a>` soltos → não, quebra SPA e causa inconsistências

### 2. Pastas e Organização
**Decision**: 

```
src/
├── components/          # Componentes reutilizáveis
│   ├── lib/            # shadcn/ui primitives — NÃO MEXER
│   ├── [pagina]/       # Componentes específicos de página (ex: home/, contact/)
│   ├── [componente-global]/  # Componentes compartilhados (ex: nav-bar/, footer/)
│   └── root-layout/    # Layout raiz e sub-componentes
├── pages/              # Componentes de rota (ex: home-page.tsx, contact-page.tsx)
├── hooks/              # Custom hooks (ex: useAuth.ts, useForm.ts)
├── utils/              # Funções utilitárias (ex: formatDate.ts)
├── types/              # Tipos TypeScript (ex: api.d.ts, auth.d.ts)
└── routes/             # Configuração de rotas (ex: index.tsx com createBrowserRouter)
```

**Rationale**:
- Separação clara entre componentes de página (`pages/`) e reutilizáveis (`components/`)
- Dedicado para hooks, evitando poluição de componentes
- Organização lógica por propósito

### 3. Typography in Navigation
**Decision**: Links de navegação usam tipografia específica

**Rationale**:
- Links não são títulos, deve-se usar fontes menores
- Remove underline para melhor UX
- Mantém consistência visual

**Alternatives considered**:
- Estilos inline → usar utility classes do Tailwind
- Component wrapper → usar `cn()` com shadcn/ui utilities

## Risks / Trade-offs

### Breaking Change
**Risk**: Código existente com `<a>` para navegação interna quebrará
**Mitigation**: 
- Criar documentação clara
- Oferecer script de migration (opcional)
- Manter compatibilidade para links externos

### Manual Migration
**Risk**: Migração será manual, sem ferramenta automática
**Mitigation**:
- Criar checklist no CODING-RULES.md
- Documentar como identificar links externos vs internos
- Usar ESLint rule para alertar sobre `<a>` soltos em navegação interna