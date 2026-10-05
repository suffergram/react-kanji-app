import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  LogoutButton,
  NavLink,
  Navigation,
  StyledHeader,
  UserEmail,
  UserMenu,
} from './style';
import { navLinks } from '../../data/nav-links/nav-links';
import { RootState } from '../../types/root-state';
import { logout } from '../../state/auth-thunks';

export function Header() {
  const location = useLocation();
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const authState = useSelector((state: RootState) => state.authState);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <Navigation>
        {authState.status === 'authenticated' && (
          <NavLink
            $isCurrent={location.pathname === '/dashboard'}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        )}
        {navLinks.map((item) => (
          <NavLink
            $isCurrent={location.pathname === item.path}
            to={item.path}
            key={item.id}
          >
            {item.name}
          </NavLink>
        ))}
      </Navigation>
      {authState.status === 'guest' && (
        <UserMenu>
          <NavLink $isCurrent={location.pathname === '/login'} to="/login">
            Log In
          </NavLink>
          <NavLink
            $isCurrent={location.pathname === '/register'}
            to="/register"
          >
            Sign Up
          </NavLink>
        </UserMenu>
      )}
      {authState.status === 'authenticated' && (
        <UserMenu>
          <UserEmail title={authState.user?.email}>
            {authState.user?.email}
          </UserEmail>
          <LogoutButton
            type="button"
            onClick={handleLogout}
            disabled={authState.isLoading}
          >
            Log Out
          </LogoutButton>
        </UserMenu>
      )}
    </StyledHeader>
  );
}
