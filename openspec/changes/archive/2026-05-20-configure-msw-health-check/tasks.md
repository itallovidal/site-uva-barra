## 1. MSW Initialization

- [x] 1.1 Generate service worker file: `npx msw init public/ --save`
- [x] 1.2 Create `src/mocks/handlers.ts` with GET `/api/health` handler
- [x] 1.3 Create `src/mocks/worker.ts` with worker setup using handlers
- [x] 1.4 Update `src/main.tsx` to start worker before rendering in development mode

## 2. Health Check Integration

- [x] 2.1 Update `src/pages/home-page.tsx` to fetch `/api/health` on mount
- [x] 2.2 Display health check result on the home page
- [x] 2.3 Verify application builds with `npm run build`
- [x] 2.4 Run linter and type-checker to verify no errors
