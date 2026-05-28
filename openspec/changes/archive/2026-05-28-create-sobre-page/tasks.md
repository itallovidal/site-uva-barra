## 1. Data Setup

- [x] 1.1 Create `src/data/team-members.ts` with typed array of collaborators grouped by category (Redação, Criação, Desenvolvimento)
- [x] 1.2 Define TypeScript interfaces for team member data (id, name, role, photoUrl?, category)

## 2. Component Implementation

- [x] 2.1 Create `src/components/sobre/team-member-card.tsx` — card with circular photo, name, and role
- [x] 2.2 Create `src/components/sobre/team-section.tsx` — category section with red vertical bar + team member cards
- [x] 2.3 Handle missing photo fallback (initials) in TeamMemberCard

## 3. Page Implementation

- [x] 3.1 Create `src/pages/sobre-page.tsx` with full-width banner (~20vh), institutional text, and team sections
- [x] 3.2 Add banner with Unsplash background image, dark overlay, and centered "Agência UVA Barra" title
- [x] 3.3 Add institutional text section with the agency history
- [x] 3.4 Add `TeamSection` instances for each collaborator category

## 4. Routing

- [x] 4.1 Register `/sobre` route in `src/routes/index.tsx` pointing to `SobrePage`

## 5. Verification

- [x] 5.1 Verify `/sobre` route renders all sections correctly
- [x] 5.2 Verify navigation from NavBar and Footer links works
- [x] 5.3 Verify banner displays correctly at ~20vh with text overlay
- [x] 5.4 Verify team categories render with red vertical bar accent
- [x] 5.5 Run linting (`npm run lint`) and verify no errors
