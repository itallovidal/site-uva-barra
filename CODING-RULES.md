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
│   ├── lib/        # Componentes base (UI primitives)
│   └── ...         # Componentes de feature
├── pages/          # Componentes de rota
├── hooks/          # Custom hooks
├── utils/          # Funções utilitárias
├── types/          # Tipos TypeScript
├── routes/         # Configuração de rotas
├── app.tsx         # Componente raiz
└── main.tsx        # Entry point
```

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
