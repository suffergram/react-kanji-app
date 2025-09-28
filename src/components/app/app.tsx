import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { HomePage } from '../../pages/home-page/home-page';
import { ErrorPage } from '../../pages/error-page/error-page';
import { Layout } from '../layout/layout';
import { DictPage } from '../../pages/dict-page/dict-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="dict" element={<DictPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}
