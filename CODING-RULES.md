# Coding Rules

Este documento consolida as regras de desenvolvimento do projeto. É a referência rápida para desenvolvedores. Para especificações formais, consulte `openspec/specs/`.

---

## 1. Naming Conventions

### File Names
- **kebab-case**: palavras em minúsculas separadas por hífen
- Exemplos: `user-profile.tsx`, `auth-service.ts`, `nav-bar.tsx`
- Aplica-se a todos os arquivos: componentes, utilitários, hooks, estilos

### Function Names
- **camelCase** para funções utilitárias e hooks: `formatDate()`, `useAuth()`
- **PascalCase** para componentes React: `function UserProfile() {}`
- Use **funções nomeadas** (`function nome() {}`) em vez de arrow functions
- Racional: melhor stack trace, hoisting previsível, intenção mais clara

### Variable Names
- **camelCase** para variáveis e constantes: `const userName = ...`
- **PascalCase** para tipos e interfaces: `interface UserProfile {}`
- **UPPER_SNAKE_CASE** para constantes globais: `const API_BASE_URL = ...`

---

## 2. Export Patterns

### Named Exports Only
- Use `export function` ou `export const` para tudo
- **Proibido**: `export default`
- Exemplo correto:
  ```ts
  export function UserProfile() { ... }
  export const formatDate = (date: Date) => { ... }
  ```
- Exemplo incorreto:
  ```ts
  const UserProfile = () => { ... }
  export default UserProfile
  ```
- Racional: facilitam refatoração, melhor suporte de IDE, imports explícitos

---

## 3. Formatting Standards

### Prettier
- Ferramenta de formatação automática do projeto
- Configuração em `.prettierrc` na raiz
- Execute `npm run format` antes de commits

### Regras Principais
| Config | Value |
|--------|-------|
| Print width | 100 |
| Tab width | 2 spaces |
| Quotes | Single (`'`) |
| Semicolons | Yes |
| Trailing comma | ES5 |
| Arrow parens | Always |

### Exemplo Formatado
```ts
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

---

## 4. File Structure

### Organization
```
src/
├── components/     # Componentes reutilizáveis
│   ├── lib/        # shadcn/ui primitives — NÃO MEXER
│   ├── [pagina]/   # Componentes específicos de uma página (ex: home/, contact/)
│   ├── [componente-global]/  # Componentes usados em múltiplas páginas (ex: nav-bar/)
│   └── root-layout/          # Layout raiz da aplicação
├── pages/          # Componentes de rota (ex: home-page.tsx, contact-page.tsx)
├── hooks/          # Custom hooks (ex: useAuth.ts, useForm.ts) — todos os hooks vão aqui
│   ├── auth/       # Hooks relacionados a autenticação
│   ├── form/       # Hooks de formulário
│   ├── data/       # Hooks de dados e cache
│   └── nav/        # Hooks de navegação
├── utils/          # Funções utilitárias
├── types/          # Tipos TypeScript
├── routes/         # Configuração de rotas (createBrowserRouter)
├── app.tsx         # Componente raiz
└── main.tsx        # Entry point
```
├── utils/          # Funções utilitárias
├── types/          # Tipos TypeScript
├── routes/         # Configuração de rotas (createBrowserRouter)
├── app.tsx         # Componente raiz
└── main.tsx        # Entry point
```

---

## 5. Routing & Navigation RULES

### React Router Link REQUIREMENTS (BREAKING)

**REQUIREMENT**: Todosos links de navegação interna DEVEM usar `Link` do React Router DOM.

- **NÃO USE** `<a>` soltos para navegação entre páginas do mesmo site
- **USE** apenas `<a>` para links externos (href começa com `http` ou tem `target="_blank"`)
- **NÃO USE** `<a>` sem prefixo `http/` e sem `target="_blank"` — use `Link` com `route` prop

```tsx
// CORRETO - navegação interna
<Link to="/about">Sobre</Link>
<Link route="/about">Sobre</Link>

// CORRETO - link externo
<a href="https://google.com" target="_blank">Google</a>

// INCORRETO - navegação interna com <a>
<a href="/about">Sobre</a>  // ❌ nunca mais
```

### Typography in Navigation

Links de navegação usam tipografia específica:
- **Font-size**: menor que o texto do corpo (`text-sm`)
- **Underline**: removido por padrão (`underline-offset-2` para hover)
- **Color**: slate-600 por padrão com hover no slate-800

```tsx
<Link to="/about" className="text-sm font-medium text-slate-600 hover:text-slate-800">
  Sobre
</Link>
```

---

## 6. References

### Component Directory Rules
- `src/components/lib/` — APENAS componentes shadcn/ui primitives. Não modificar.
- `src/components/[page-name]/` — Componentes usados por exatamente uma página. O nome da pasta corresponde ao segmento da página (ex: `home/` para `home-page.tsx`).
- `src/components/[component-name]/` — Componentes compartilhados entre múltiplas páginas (ex: `nav-bar/`).
- `src/components/root-layout/` — Layout raiz e seus sub-componentes.

### Phosphor Icons
- Use os exports atuais do `@phosphor-icons/react` com sufixo `Icon` quando disponíveis.
- Não introduza nomes de ícones depreciados, porque eles geram warnings e quebram a padronização do projeto.
- Ao adicionar ou corrigir ícones, prefira atualizar também os usos existentes no mesmo arquivo para manter consistência.

### Component Files
- Um componente principal por arquivo
- Arquivo de mesmo nome do componente (kebab-case)
- Estilos inline com Tailwind CSS (sem arquivos CSS separados por componente)

### Index Files
- Use `index.ts` para barrel exports em diretórios de módulos
- Evite barrel exports em `components/` e `pages/`

---

## 5. React Patterns

### Component Declaration
```ts
// Correto
export function UserProfile() {
  return <div>...</div>;
}

// Incorreto
export const UserProfile = () => <div>...</div>;
```

### Props
- Use interfaces para props
- Exporte a interface de props
```ts
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

---

## References
- [Prettier Config](./.prettierrc)
- [Coding Conventions Spec](./openspec/specs/coding-conventions/spec.md)
- [OpenSpec Config](./openspec/config.yaml)
