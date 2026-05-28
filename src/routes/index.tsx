import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/components/root-layout/root-layout';
import { HomePage } from '@/pages/home-page';
import { NewsCategoryPage } from '@/pages/news-category-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { SobrePage } from '@/pages/sobre-page';

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
        path: '/sobre',
        element: <SobrePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export { router };
