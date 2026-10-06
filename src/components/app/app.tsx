import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
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
import { LearnPage } from '../../pages/learn-page/learn-page';
import { RootState } from '../../types/root-state';
import { fetchMe } from '../../state/auth-thunks';
import { LoginPage } from '../../pages/login-page/login-page';
import { RegisterPage } from '../../pages/register-page/register-page';
import { RequireAuth } from '../auth/require-auth/require-auth';
import { DashboardPage } from '../../pages/dashboard-page/dashboard-page';
import { SettingsPage } from '../../pages/settings-page/settings-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="learn" element={<LearnPage />} />
      <Route path="dict" element={<DictPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route element={<RequireAuth />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export function App() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchMe());
  }, []);

  return <RouterProvider router={router} />;
}
