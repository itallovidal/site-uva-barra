## Why

A aplicação carece de regras de codificação padronizadas que garantam consistência e legibilidade ao longo de todo o código. Sem diretrizes claras, diferentes desenvolvedores adotam estilos distintos, gerando inconsistências em funções, nomes de arquivos e exportações que dificultam a manutenção e a revisão de código.

## What Changes

- Adicionar uma spec de `coding-conventions` que define regras obrigatórias de estilo e estrutura de código
- Estabelecer três regras fundamentais:
  - Funções nomeadas no lugar de arrow functions em toda a aplicação
  - Nomes de arquivos em pascalCase com letras minúsculas
  - Exportações nomeadas em componentes, sem `export default`
- Garantir que todas as futuras specs e implementações respeitem essas convenções

## Capabilities

### New Capabilities
- `coding-conventions`: Regras obrigatórias de estilo de código — funções nomeadas, nomenclatura de arquivos e exportações nomeadas

### Modified Capabilities
<!-- No existing specs to modify -->

## Impact

- Todos os arquivos novos criados devem seguir as convenções definidas
- Arquivos existentes podem ser migrados gradualmente ou em PRs separados
- Linters e configurações de projeto podem precisar de ajustes para reforçar as regras
- Code reviews devem validar o cumprimento das convenções
