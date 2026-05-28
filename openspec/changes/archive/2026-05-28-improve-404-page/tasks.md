## 1. Rewrite the 404 Page Component

- [x] 1.1 Import dependencies (Link, useNavigate from react-router-dom; FileX from @phosphor-icons/react; Button from @/components/lib/button)
- [x] 1.2 Add CSS keyframe animation for fade-in in src/index.css (or inline via Tailwind arbitrary animation)
- [x] 1.3 Build the centered layout with `min-h-dvh flex flex-col items-center justify-center text-center px-4`
- [x] 1.4 Add the FileX icon with large size and red-600 color
- [x] 1.5 Add the heading "Página não encontrada" in text-red-600
- [x] 1.6 Add the descriptive message paragraph
- [x] 1.7 Add the "Voltar para Home" Button using shadcn Button with `variant="destructive"` wrapping a Link to `/`
- [x] 1.8 Add the secondary "Voltar" link using `useNavigate(-1)`
- [x] 1.9 Add `motion-safe:animate-fadeIn` with `prefers-reduced-motion` respect
- [x] 1.10 Remove the old placeholder content
