## Context

A aplicação atualmente não possui convenções de codificação formalizadas. Diferentes desenvolvedores utilizam estilos distintos para declaração de funções, nomenclatura de arquivos e padrões de exportação, o que gera inconsistência no código e dificulta a manutenção a longo prazo.

## Goals / Non-Goals

**Goals:**
- Formalizar três regras de codificação obrigatórias como spec do projeto
- Garantir que toda implementação futura siga essas convenções
- Criar documentação clara e verificável para cada regra

**Non-Goals:**
- Não alterar automaticamente arquivos existentes (migração será tratada separadamente)
- Não configurar linters ou ferramentas automatizadas nesta spec
- Não definir regras de formatação de código (indentação, espaçamento, etc.)

## Decisions

**1. Arrow functions proibidas em favor de funções nomeadas**
- Funções nomeadas (`function nome() {}`) oferecem melhor stack trace em debug e são mais legíveis
- Componentes React devem usar `function ComponenteName() {}` em vez de `const ComponenteName = () => {}`
- Callbacks e funções utilitárias seguem o mesmo padrão
- Racional: debugging mais fácil, hoisting previsível, intenção mais clara no código

**2. Nomes de arquivos em kebab-case**
- Todos os arquivos devem usar kebab-case: palavras em minúsculas separadas por hífen
- Exemplos: `user-profile.tsx`, `auth-service.ts`, `nav-bar.tsx`
- Racional: padrão mais comum no ecossistema JS/TS, consistente com URLs, compatível com todos os sistemas de arquivos

**3. Exportações nomeadas obrigatórias, sem export default**
- Componentes e funções devem usar `export function` ou `export const`
- `export default` é proibido
- Racional: exportações nomeadas facilitam refatoração, melhor suporte de IDE, imports mais explícitos e evitam ambiguidade

## Risks / Trade-offs

- [Refatoração de base existente] → Arquivos antigos que usam arrow functions e export default devem ser migrados em PRs separados para não misturar com novas features
- [Curva de adaptação] → Desenvolvedores acostumados com arrow functions podem estranhar inicialmente; a spec deve ser referenciada em code reviews
- [Trade-off de concisão] → Funções nomeadas são mais verbosas que arrow functions, mas o ganho em legibilidade e debug compensa
