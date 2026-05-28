## Why

O Mock Service Worker (msw) já está instalado como dependência, mas não foi inicializado nem configurado. Sem ele configurado, não é possível simular chamadas de API para testes e desenvolvimento. Uma chamada de health check simples servirá como prova de conceito de que o msw está funcionando corretamente.

## What Changes

- Inicializar o service worker do msw no navegador (`npx msw init public/`)
- Criar estrutura de handlers de mock em `src/mocks/`
- Criar um handler de health check (`GET /api/health`) que retorna `{ status: "ok" }`
- Configurar o worker para iniciar junto com a aplicação
- Fazer uma chamada para `/api/health` na página inicial para testar o mock

## Capabilities

### New Capabilities
- `mock-service-worker`: Configuração do msw com handlers de mock para desenvolvimento e testes

### Modified Capabilities
*Nenhuma — spec nova*

## Impact

- Adiciona diretório `public/mockServiceWorker.js` (gerado pelo msw)
- Adiciona diretório `src/mocks/` com handlers e configuração do worker
- Modifica `src/main.tsx` para iniciar o worker antes de renderizar
- Modifica `src/pages/home-page.tsx` para exibir resultado do health check
