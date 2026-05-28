## Context

O msw (Mock Service Worker) v2 já está instalado como devDependency no projeto, mas não foi inicializado nem configurado. Atualmente a aplicação não possui nenhuma simulação de API, o que dificulta o desenvolvimento de funcionalidades que dependem de chamadas HTTP.

## Goals / Non-Goals

**Goals:**
- Inicializar o service worker do msw no diretório `public/`
- Criar estrutura modular de handlers em `src/mocks/`
- Implementar um handler GET `/api/health` como prova de conceito
- Integrar o worker ao bootstrap da aplicação
- Exibir o resultado do health check na home page

**Non-Goals:**
- Não criar mocks para outras APIs além do health check
- Não configurar msw para testes unitários (apenas ambiente de desenvolvimento)
- Não adicionar cobertura de testes para os handlers

## Decisions

**1. Estrutura de diretórios: `src/mocks/` com handlers separados**
- `src/mocks/handlers.ts` — lista centralizada de todos os handlers
- `src/mocks/worker.ts` — inicialização do worker com os handlers
- Abordagem modular que permite adicionar novos handlers sem modificar a configuração

**2. Worker iniciado antes do React renderizar**
- O worker deve ser iniciado (`worker.start()`) antes de `createRoot()` para que as chamadas de API feitas durante a montagem dos componentes já sejam interceptadas
- O início do worker é condicional: só ativa em desenvolvimento (não em produção)

**3. Health check exibido na home page via fetch**
- A home page faz um fetch para `/api/health` ao montar e exibe o resultado
- Uso de `useState` + `useEffect` com named functions

## Risks / Trade-offs

- [Service Worker não registrado em produção] → O worker só inicia em desenvolvimento, seguro para produção
- [Mudança na URL base da API] → Futuramente quando houver uma API real, o msw deve ser desabilitado para chamadas reais
