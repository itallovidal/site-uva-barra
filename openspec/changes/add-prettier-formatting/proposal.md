## Why

O projeto não possui padronização automática de formatação de código, o que gera inconsistências de estilo (espaçamento, quebras de linha, aspas, etc.) entre desenvolvedores. Isso aumenta o ruído em code reviews e dificulta a manutenção. Adicionar Prettier resolve isso com formatação automática e consistente.

## What Changes

- Adicionar Prettier como dependência de desenvolvimento
- Criar arquivo de configuração `.prettierrc` com regras do projeto
- Adicionar script `format` no `package.json` para execução do Prettier
- Criar spec `prettier-config` documentando as regras de formatação
- Criar spec `coding-rules` consolidando regras gerais de desenvolvimento
- Atualizar `openspec/config.yaml` com configurações gerais do projeto
- Criar arquivo `CODING-RULES.md` na raiz como referência para desenvolvedores

## Capabilities

### New Capabilities
- `prettier-config`: Configuração e regras de formatação automática com Prettier
- `coding-rules`: Regras gerais de desenvolvimento consolidadas para referência dos desenvolvedores

### Modified Capabilities
<!-- No existing specs to modify -->

## Impact

- Todos os arquivos de código serão formatados pelo Prettier na execução do script `format`
- `package.json` ganha novo script `format`
- `openspec/config.yaml` passa a conter configurações gerais do projeto
- Novo arquivo `CODING-RULES.md` na raiz do projeto
- Code reviews focam em lógica, não em estilo de formatação
