import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/components/root-layout/root-layout';
import { HomePage } from '@/pages/home-page';
import { LoginPage } from '@/pages/login-page';
import { SignupPage } from '@/pages/signup-page';
import { NewsCategoryPage } from '@/pages/news-category-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { SobrePage } from '@/pages/sobre-page';
import { AdminLayout } from '@/pages/admin/admin-layout';
import { AdminDashboard } from '@/pages/admin/admin-dashboard';
import { PlaceholderPage } from '@/pages/admin/placeholder-page';
import { CollaboratorRegisterPage } from '@/pages/admin/collaborator-register-page';
import { CollaboratorsRequestsPage } from '@/pages/admin/collaborators-requests-page';
import { CollaboratorsListPage } from '@/pages/admin/collaborators-list-page';
import { NewsCreatePage } from '@/pages/admin/news-create-page';
import { NewsPublicationReviewPage } from '@/pages/admin/news-publication-review-page';
import { NewsPublishedPage } from '@/pages/admin/news-published-page';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/entrar',
        element: <LoginPage />,
      },
      {
        path: '/cadastro',
        element: <SignupPage />,
      },
      {
        path: '/news/category/:category',
        element: <NewsCategoryPage />,
      },
      {
        path: '/sobre',
        element: <SobrePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/admin',
        element: <AdminDashboard />,
      },
      {
        path: '/admin/collaborators',
        element: <CollaboratorsListPage />,
      },
      {
        path: '/admin/collaborators/register',
        element: <CollaboratorRegisterPage />,
      },
      {
        path: '/admin/collaborators/requests',
        element: <CollaboratorsRequestsPage />,
      },
      {
        path: '/admin/articles/published',
        element: <NewsPublishedPage />,
      },
      {
        path: '/admin/articles/create',
        element: <NewsCreatePage />,
      },
      {
        path: '/admin/articles/approve',
        element: <NewsPublicationReviewPage />,
      },
      {
        path: '/admin/newsletter',
        element: <PlaceholderPage title="Listagem de Newsletter" />,
      },
      {
        path: '/admin/newsletter/create',
        element: <PlaceholderPage title="Criação de Newsletter" />,
      },
      {
        path: '/admin/logout',
        element: <PlaceholderPage title="Logout" />,
      },
    ],
  },
]);

export { router };
