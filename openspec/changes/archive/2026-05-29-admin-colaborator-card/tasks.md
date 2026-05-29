## 1. Create `AdminColaboratorCard` component

- [x] 1.1 Create `src/components/admin-colaborator-card/admin-colaborator-card.tsx` with Card primitive, avatar/initials, name, and profession
- [x] 1.2 Add `variant` prop (`"admin" | "preview"`) controlling action button visibility
- [x] 1.3 Add `onApprove` and `onDelete` callbacks for admin variant
- [x] 1.4 Create `src/components/admin-colaborator-card/index.ts` barrel export

## 2. Add MSW mock handlers for collaborator requests

- [x] 2.1 Create `src/mocks/collaborator-requests-mocks.ts` with pending collaborator data
- [x] 2.2 Add `GET /api/collaborators/requests` handler returning pending users
- [x] 2.3 Add `POST /api/collaborators/:id/approve` handler
- [x] 2.4 Add `DELETE /api/collaborators/:id` handler

## 3. Create the collaborators requests page

- [x] 3.1 Create `src/pages/admin/collaborators-requests-page.tsx` with `useCollaboratorRequests` hook
- [x] 3.2 Fetch pending users and render `AdminColaboratorCard` list with `variant="admin"`
- [x] 3.3 Wire `onApprove` and `onDelete` to MSW-backed fetch calls
- [x] 3.4 Update `src/routes/index.tsx` to import and use `CollaboratorsRequestsPage` instead of `PlaceholderPage`
