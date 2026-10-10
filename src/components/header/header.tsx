import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  LogoutButton,
  NavLink,
  Navigation,
  ProfileLink,
  StyledHeader,
  UserMenu,
  UserName,
} from './style';
import { navLinks } from '../../data/nav-links/nav-links';
import { RootState } from '../../types/root-state';
import { logout } from '../../state/auth-thunks';
import { getDisplayName } from '../../util/get-display-name';
import { Avatar } from '../shared/avatar/avatar';

export function Header() {
  const location = useLocation();
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const authState = useSelector((state: RootState) => state.authState);

  const handleLogout = () => {
    dispatch(logout());
  };

  const { user } = authState;

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
            Log in
          </NavLink>
          <NavLink
            $isCurrent={location.pathname === '/register'}
            to="/register"
          >
            Sign up
          </NavLink>
        </UserMenu>
      )}
      {authState.status === 'authenticated' && user && (
        <UserMenu>
          <ProfileLink
            to="/settings"
            title={`${getDisplayName(user)} · Settings`}
            $isCurrent={location.pathname === '/settings'}
          >
            <Avatar user={user} size={1.75} />
            <UserName>{getDisplayName(user)}</UserName>
          </ProfileLink>
          <LogoutButton
            type="button"
            onClick={handleLogout}
            disabled={authState.isLoading}
          >
            Log out
          </LogoutButton>
        </UserMenu>
      )}
    </StyledHeader>
  );
}
