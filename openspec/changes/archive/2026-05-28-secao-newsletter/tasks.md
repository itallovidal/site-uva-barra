## 1. Component Setup

- [x] 1.1 Create `src/components/newsletter-section/` directory with `index.ts` barrel export
- [x] 1.2 Create `src/components/newsletter-section/newsletter-section.tsx` with the component scaffold

## 2. NewsletterSection Implementation

- [x] 2.1 Add gradient background with `bg-[linear-gradient(45deg,#EF4444,#991B1B)]` and white text
- [x] 2.2 Render CTA heading "A ética que move o Jornalismo"
- [x] 2.3 Render email input (`type="email"`, placeholder) and submit button "Inscrever-se"
- [x] 2.4 Implement form state management (`email`, `status`, `message` via `useState`)
- [x] 2.5 Implement `fetch` POST to `/newsletter/register` with `{ email }` on submit
- [x] 2.6 Handle loading state (disable button, disable input)
- [x] 2.7 Handle success state (show success message, clear input)
- [x] 2.8 Handle error state (show error message, keep input value)
- [x] 2.9 Add responsive layout (centered on desktop, stacked on mobile)
- [x] 2.10 Export component and barrel re-export via `index.ts`

## 3. Homepage Integration

- [x] 3.1 Import `NewsletterSection` in `src/pages/home-page.tsx`
- [x] 3.2 Render `NewsletterSection` inside the `<main>` element above the closing tag
- [x] 3.3 Run `npm run build` to verify TypeScript and build succeed

## 4. Verification

- [x] 4.1 Run `npm run dev` and confirm the section renders on the homepage
- [x] 4.2 Verify gradient appears correctly at 45deg
- [x] 4.3 Verify form submit calls `/newsletter/register`
- [x] 4.4 Verify mobile layout stacks correctly
