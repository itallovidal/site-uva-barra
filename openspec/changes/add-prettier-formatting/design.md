## Context

O projeto React + Vite + TypeScript atualmente não possui formatador automático de código. O ESLint está configurado apenas para regras de linting, sem integração com Prettier. Diferentes desenvolvedores podem ter configurações de editor distintas, gerando inconsistências de formatação no código.

## Goals / Non-Goals

**Goals:**
- Adicionar Prettier como formatador padrão do projeto
- Configurar regras de formatação alinhadas com o estilo atual do código
- Integrar formatação no fluxo de desenvolvimento via script npm
- Consolidar regras gerais de desenvolvimento em documentação acessível
- Centralizar configurações gerais do projeto no `openspec/config.yaml`

**Non-Goals:**
- Não alterar regras de linting do ESLint (apenas adicionar Prettier)
- Não configurar hooks de git (pre-commit) nesta change
- Não migrar automaticamente arquivos existentes (será feito em etapa separada)
- Não adicionar CI/CD para validação de formatação nesta change

## Decisions

**1. Prettier standalone (sem plugin eslint-config-prettier)**
- Prettier será executado via script `format` separado do ESLint
- Racional: simplicidade inicial, sem complexidade de integração ESLint+Prettier
- Alternativa considerada: `eslint-config-prettier` + `eslint-plugin-prettier` — descartada por adicionar complexidade desnecessária neste momento

**2. Configuração via `.prettierrc` (JSON)**
- Arquivo JSON na raiz do projeto para compatibilidade com editores e ferramentas
- Racional: formato mais comum, suporte nativo de IDEs, fácil de versionar
- Alternativa considerada: `.prettierrc.js` ou `prettier.config.js` — descartadas por desnecessárias para configuração simples

**3. Regras de formatação conservadoras**
- Configurações próximas do padrão do Prettier, com ajustes mínimos para o projeto
- Racional: minimizar resistência de adoção, mudanças sutis no código existente
- Print width: 100 (padrão é 80, mas código atual usa linhas mais longas)
- Tab width: 2, single quotes, trailing comma es5, semicolons

**4. `openspec/config.yaml` para configurações gerais**
- Mover configurações de contexto do projeto para arquivo externo reutilizável
- Racional: centralizar contexto do projeto (tech stack, convenções) para uso por ferramentas AI e documentação
- Conteúdo: tech stack, regras de codificação, estilo de commits

**5. `CODING-RULES.md` como referência para desenvolvedores**
- Arquivo markdown na raiz com todas as regras de desenvolvimento consolidadas
- Racional: documentação acessível, fácil de encontrar, independente de ferramentas
- Conteúdo: convenções de nomenclatura, padrões de exportação, formatação, estrutura de arquivos

## Risks / Trade-offs

- [Conflito ESLint + Prettier] → Regras podem conflitar; mitigação: usar `eslint-config-prettier` se necessário no futuro
- [Formatação de código existente] → Executar `format` em toda base pode gerar diff grande; mitigação: executar em PR separado
- [Adoção pela equipe] → Desenvolvedores podem esquecer de rodar `format`; mitigação: futura integração com pre-commit hook ou CI
- [Manutenção de duas fontes de regras] → `CODING-RULES.md` e specs podem divergir; mitigação: `CODING-RULES.md` referencia as specs como fonte da verdade
