import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/components/root-layout/root-layout';
import { HomePage } from '@/pages/home-page';
import { NewsCategoryPage } from '@/pages/news-category-page';
import { NotFoundPage } from '@/pages/not-found-page';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/news/category/:category',
        element: <NewsCategoryPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export { router };
