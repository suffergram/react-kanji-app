import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { HomePage } from '../../pages/home-page/home-page';
import { ErrorPage } from '../../pages/error-page/error-page';
import { DictionaryPage } from '../../pages/dictionary-page/dictionary-page';
import { Layout } from '../layout/layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="dictionary" element={<DictionaryPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

export function App() {
  return <RouterProvider router={router} />;
}
