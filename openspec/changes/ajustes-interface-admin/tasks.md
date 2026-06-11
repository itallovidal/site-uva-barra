## 1. Home page - Fix card layout

- [x] 1.1 In `src/pages/home-page.tsx`, replace `flex flex-col gap-4 md:flex-row` on the secondary articles section with `grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3`

## 2. News create - Redirect to unpublished list

- [x] 2.1 In `src/pages/admin/news-create-page.tsx`, change `navigate('/admin/news')` to `navigate('/admin/news?status=unpublished')`
- [x] 2.2 In `src/pages/admin/news-listing-page.tsx`, initialize `statusFilter` state from URL search params (`?status=published|unpublished`), falling back to `'published'` if no param

## 3. Admin news list - Add delete action

- [x] 3.1 Add a `deleteNews` function in `src/pages/admin/news-listing-page.tsx` that calls `DELETE /news/:id` with auth token
- [x] 3.2 Add delete action (label: "Deletar", variant: "destructive") to the `actions` array of each `AdminNewsCard`, with confirmation dialog using the existing `Dialog` component
- [x] 3.3 Add delete loading state and error handling for delete action

## 4. Admin routing - Make listing the default page

- [x] 4.1 In `src/routes/index.tsx`, change the route `/admin` to render `AdminNewsListingPage` instead of `AdminDashboard`
- [x] 4.2 Add a new route `/admin/dashboard` that renders `AdminDashboard`
- [x] 4.3 In `src/pages/admin/admin-sidebar.tsx`, add a link to `/admin/dashboard` (optional - to keep dashboard accessible)
