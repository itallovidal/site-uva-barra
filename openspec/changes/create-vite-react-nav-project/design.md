## Context

Criar uma aplicação React SPA moderna para hospedagem no GitHub Pages, utilizando as melhores práticas de desenvolvimento web atual. O projeto deve ser leve, rápido e ter uma estrutura que facilite a manutenção e expansão futura.

Atualmente o diretório contém apenas o repositório base. O novo projeto será criado do zero com configurações otimizadas para desenvolvimento e deploy.

## Goals / Non-Goals

**Goals:**
- Criar projeto React com Vite para desenvolvimento rápido e bundle otimizado
- Implementar navegação baseada em componentes com React Navigation
- Configurar Tailwind CSS como motor de estilização
- Integrar Shadcn UI com componentes acessíveis e consistentes
- Tipagem completa com TypeScript
- Preparar para deployment no GitHub Pages

**Non-Goals:**
- Backend ou API no momento
- Autenticação complexa (user requested only basic setup)
- Testes automatizados (etapa posterior)
- SSR ou Next.js em esta fase inicial

## Decisions

### Vite como Build Tool
**Decisão**: Usar Vite em vez de Create React App
**Rationale**: Vite oferece HMR mais rápido, bundle menor na primeira carga e melhor experiência de desenvolvimento.
**Alternativas consideradas**:
- Create React App: Mais lento em HMR, bundle maior
- Remix: Overkill para uma SPA simples inicial

### React Navigation v6+
**Decisão**: Usar React Navigation v6+ com navigation create e useNavigation hooks
**Rationale**: Arquitetura baseada em hooks elimina boilerplate de context. Stacks mantêm estado de navegação entre telas.
**Alternativas consideradas**:
- React Router: Mais comum, mas navigation create oferece melhor TypeScript inference
- Wouter: Muito leve, mas menos features para SPA complexa

### Shadcn UI
**Decisão**: Usar o método de copy-paste oficial com Radix primitives por baixo
**Rationale**: Componentes independentes, sem dependência do pacote monolítico. Mais fácil de customizar.
**Alternativas consideradas**:
- Chakra UI: Mais fácil de usar, mas com mais bundle size
- MUI: Mais robusto, mas maior curva de aprendizado e configuração

### Tailwind CSS
**Decisão**: Configuração nativa com `postcss` e `autoprefixer`
**Rationale**: Utilidades-first approach se integra nativamente com JSX e Shadcn UI.

## Risks / Trade-offs

### Shadcn UI Copy-Paste
[**Risco**] Componentes criados manualmente podem ficar desatualizados com novas releases do Shadcn
**Mitigação**: Seguir as releases do Shadcn e atualizar conforme necessário. Reutilizar componentes existentes em vez de criar novos.

### React Navigation com Stack
[**Risco**] Navegação baseada em stacks pode acumular estado de rota complexo em apps grandes
**Mitigação**: Manter stacks simples e dividir por feature. Usar `screen: {options: {unmountOnBlur: true}}` para performance.

### GitHub Pages Deploy
[**Risco**] Vite build precisa de `base` configurado corretamente para deploy
**Mitigação**: Usar Vite CLI commands (`vite build --base /`) ou ajustar `spage.config.json`.

## Migration Plan

### Phase 1: Create Projeto (Day 1)
1. Executar `npm create vite@latest` com template react-ts
2. Instalar dependências: `vite`, `react-navigation`, `react-native-safe-area-context`
3. Configurar Tailwind: instalar dependências e criar `tailwind.config.js`
4. Inicializar Shadcn UI com CLI: `npx shadcn-ui@latest init`
5. Instalar componentes básicos: `npx shadcn-ui@latest add button card input`

### Phase 2: Setup Navegação (Day 1)
1. Criar `AppNavigation.tsx` com `NavigationContainer`
2. Definir stack principal: `createNativeStackNavigator`
3. Criar screens folder com componentes básicos
4. Implementar roteamento entre telas

### Phase 3: Build and Test (Day 1)
1. Rodar `npm run dev` para testar HMR
2. Verificar navegação entre telas
3. Rodar `npm run build` e verificar build success
4. Deploy no GitHub Pages com `npm run preview`

### Rollback Strategy
Para rollback:
1. Manter snapshot do diretório anterior no `git restore`
2. Componentes Shadcn podem ser desinstalados individualmente
3. Configurações de Tailwind são reversíveis com `git restore tailwind.config.js`

## Open Questions

1. **Deep Linking**: Necessário configurar deep linking para produção? → Provisão não para MVP inicial.
2. **Offline Support**: Implementar PWA capabilities? → Avaliar após MVP approval.
3. **Analytics**: Integrar analytics de sessão? → Adicionar em fase 2.
4. **I18N**: Suporte multi-idioma desde o início? → Manter EN/PT-br simples inicialmente.
