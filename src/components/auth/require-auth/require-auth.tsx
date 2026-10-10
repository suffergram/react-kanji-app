import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types/root-state';
import { Loader } from '../../shared/loader/loader';
import { LocationState } from '../../../types/location-state';

export function RequireAuth() {
  const location = useLocation();
  const authState = useSelector((state: RootState) => state.authState);

  if (authState.status === 'unknown') {
    return <Loader />;
  }

  if (authState.status === 'guest') {
    const state: LocationState = { from: location.pathname };
    return <Navigate to="/login" replace state={state} />;
  }

  return <Outlet />;
}
