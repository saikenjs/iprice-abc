import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import { AdminLayout } from './layouts';
import { AdminProductPage, DashboardPage, HomePage } from './pages';

export const App = () => {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    {
      path: '/admin',
      element: (
        <AdminLayout>
          <Outlet />
        </AdminLayout>
      ),
      children: [
        { path: '/admin/', element: <DashboardPage /> },
        { path: '/admin/products', element: <AdminProductPage /> },
        { path: '/admin/*', element: <Navigate to='/admin' /> },
      ],
    },
  ]);
};