## Context

`src/mocks/handlers.ts` hoje concentra múltiplos domínios, estados mutáveis e handlers de rota em um único arquivo. Isso mistura responsabilidades e dificulta localizar, revisar e expandir um mock específico sem risco de regressão em outro fluxo.

O objetivo é reorganizar os mocks sem alterar o contrato funcional dos endpoints já simulados.

## Goals / Non-Goals

**Goals:**
- Separar handlers por domínio e ação em arquivos pequenos e previsíveis.
- Manter `handlers.ts` como ponto de registro central בלבד.
- Preservar o comportamento atual dos mocks.
- Reduzir risco de manutenção em mudanças futuras.

**Non-Goals:**
- Alterar payloads, códigos de status ou regras de negócio dos mocks.
- Introduzir uma camada dinâmica de auto-registro por glob.
- Reescrever a estratégia de estado em memória dos mocks.

## Decisions

### 1. Um arquivo por ação/endpoint
**Decision**: cada endpoint fica em um arquivo próprio dentro de `src/mocks/[dominio]/`, e o nome do arquivo deve representar a ação executada, não a rota documentada.

**Rationale**: arquivos menores são mais fáceis de revisar, testar e mover. Isso também reduz conflitos de merge quando dois fluxos do mesmo domínio evoluem em paralelo.

**Alternatives considered**:
- Um arquivo por domínio com vários handlers: ainda ficaria grande e difícil de manter.
- Um arquivo por feature/fluxo: melhora um pouco, mas mistura endpoints distintos no mesmo módulo.

### 2. `handlers.ts` apenas registra
**Decision**: `src/mocks/handlers.ts` não deve conter lógica de resposta, apenas importar e exportar a lista ordenada de handlers.

**Rationale**: centraliza a composição sem concentrar implementação. Isso mantém a ordem explícita e evita side effects espalhados.

**Alternatives considered**:
- Registro automático por filesystem: adiciona complexidade e torna a ordem menos óbvia.
- Manter lógica no arquivo raiz: resolve nada do problema atual.

### 3. Preservar estado local por domínio
**Decision**: estados mutáveis já existentes continuam próximos dos handlers do domínio correspondente.

**Rationale**: evita uma refatoração maior do que o necessário e mantém a intenção do mock visível junto do endpoint que depende dele.

**Alternatives considered**:
- Centralizar todo o estado em um único módulo compartilhado: piora o acoplamento.
- Criar factories genéricas para todos os domínios: bom para longo prazo, mas desnecessário nesta mudança.

## Risks / Trade-offs

- [Import paths quebrados durante a migração] → mover os handlers em uma etapa única e atualizar o registro central antes de remover os arquivos antigos.
- [Duplicação acidental de nomes de handlers entre domínios] → usar convenção estrita de nomes por ação e manter os imports organizados por pasta.
- [Ordem de registro alterada sem querer] → revisar a lista exportada em `handlers.ts` e preservar a ordem atual dos mocks quando houver dependência de precedência.

## Migration Plan

1. Criar a nova árvore de diretórios em `src/mocks/` por domínio.
2. Migrar cada handler para seu arquivo próprio, mantendo o comportamento atual.
3. Atualizar `src/mocks/handlers.ts` para apenas importar e registrar os handlers.
4. Ajustar `src/mocks/worker.ts` se necessário para consumir o registro consolidado.
5. Remover os módulos antigos após confirmar que todos os imports foram trocados.

Rollback: restaurar os arquivos antigos de `src/mocks/` e voltar `handlers.ts` ao formato anterior caso a reorganização introduza regressões.

## Open Questions

Nenhuma.
