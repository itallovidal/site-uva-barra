## 1. Estrutura dos mocks

- [x] 1.1 Criar a árvore `src/mocks/[dominio]/` para separar handlers por contexto funcional.
- [x] 1.2 Mover os handlers existentes para arquivos por ação/endpoint, mantendo o comportamento atual.
- [x] 1.3 Migrar estados em memória e mocks de apoio para os módulos do domínio correspondente.

## 2. Registro central

- [x] 2.1 Reduzir `src/mocks/handlers.ts` para um arquivo de registro בלבד, sem lógica de handler.
- [x] 2.2 Atualizar `src/mocks/worker.ts` para continuar inicializando o worker a partir do registro consolidado.
- [x] 2.3 Remover ou substituir imports obsoletos apontando para os arquivos antigos.

## 3. Verificação

- [ ] 3.1 Validar que todos os endpoints mockados continuam respondendo como antes.
- [x] 3.2 Verificar que a árvore nova em `src/mocks/` segue o padrão `[dominio]/[acao-endpoint].ts`.
- [ ] 3.3 Executar lint/build relevante para garantir que não há imports quebrados.
