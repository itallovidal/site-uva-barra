## Context

The project currently has no frontend application. We need to establish a complete React-based frontend with modern tooling, type safety, and routing from scratch.

## Goals / Non-Goals

**Goals:**
- Set up a React + Vite project with full TypeScript support
- Configure React Navigation (react-router-dom v6 for web) for client-side routing
- Establish a clean, scalable project structure
- Enable fast hot module replacement (HMR) during development
- Configure production-optimized builds

**Non-Goals:**
- State management library (to be added in a future phase)
- Testing setup (to be added in a future phase)
- CI/CD pipeline configuration
- Backend or API integration

## Decisions

### Vite as build tool
Vite is chosen over Create React App (CRA) for faster dev server startup, native ESM support, and better HMR. CRA is deprecated and Vite is the recommended React build tool.

### react-router-dom for routing
React Navigation is primarily designed for React Native. For web applications, `react-router-dom` v6 is the equivalent and standard choice. It provides the same declarative routing patterns with `Routes`, `Route`, and `useNavigate` hooks. If cross-platform (web + native) is needed later, `@react-navigation/native` can be added alongside.

### TypeScript strict mode
TypeScript will be configured with `strict: true` to catch type errors early. This includes strict null checks, no implicit any, and strict function types.

### Project structure
Standard feature-based structure:
```
src/
  components/    # Reusable UI components
  pages/         # Route-level page components
  routes/        # Route configuration
  types/         # Shared TypeScript types
  App.tsx        # Root component with router setup
  main.tsx       # Entry point
```

## Risks / Trade-offs

- [Using react-router-dom instead of @react-navigation] → react-router-dom is the web standard; if React Native support is needed later, additional abstraction layer will be required
- [No state management library] → Keep it simple initially; add Zustand/Redux when state complexity grows
- [No testing setup initially] → Faster initial setup; testing should be added before production features
