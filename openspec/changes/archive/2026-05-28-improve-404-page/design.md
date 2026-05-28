## Context

The existing 404 page is an unstyled plain-text placeholder (`src/pages/not-found-page.tsx`). It renders inside `RootLayout` (NavBar + Footer) and provides no visual feedback or navigation guidance. Users who hit a broken or mistyped URL see a jarring, unbranded page with no way to return home.

## Goals / Non-Goals

**Goals:**
- Replace the 404 page with a modern, visually engaging design
- Center all content vertically and horizontally within the viewport
- Apply the site's brand red color scheme consistently
- Provide a clear error message and a prominent "Voltar para Home" button
- Use the existing shadcn `Button` component for consistency

**Non-Goals:**
- Modifying the RootLayout or routing structure
- Adding new external dependencies
- Changing the behavior/design of any other page
- Adding analytics tracking to the 404 page

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| **Layout strategy** | Use `min-h-dvh` with flex centering inside the page | Simplest approach — no layout refactoring needed. The page fills the remaining viewport within NavBar/Footer without changing RootLayout. |
| **Icon** | `Phosphor.FileX` (from `@phosphor-icons/react`) | Already used in the project (same library as NavBar icons). Provides a recognizable "file not found" visual. |
| **Button component** | shadcn `Button` with `variant="destructive"` | Already exists in the codebase. The destructive variant uses the red/destructive color, matching the brand palette. |
| **Red color** | `text-red-600` / `bg-red-600` for headings and accents; `from-red-600 to-red-900` gradient for decorative elements | These exact Tailwind classes are already used across the site (e.g., badges, newsletter gradient). No new CSS variables needed. |
| **Animation** | Subtle `motion-safe:animate-[fadeIn_0.5s_ease]` or similar keyframe | Adds a modern feel without external animation libraries. The site already has a `newsletter-section` gradient; a mild entrance animation enhances polish. |
| **Secondary navigation** | "Voltar" link using `useNavigate(-1)` | Provides a back-to-previous-page option alongside the home button. |

## Risks / Trade-offs

- **[Visual consistency]** Using `min-h-dvh` inside NavBar+Footer may look slightly cramped on very short viewports. → The page will still be usable with scroll; the button and text remain accessible.
- **[Over-scoped design]** A highly animated 404 page might feel out of place on a news site. → Keep animations subtle (fade-in only) and disable via `prefers-reduced-motion`.
- **[Contrast]** A red-heavy design may reduce readability. → Use red primarily for decorative/heading elements; body text and buttons should have sufficient contrast against the background.
