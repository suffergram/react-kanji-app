import { useLocation } from 'react-router-dom';
import { NavLink, Navigation, StyledHeader } from './style';

export function Header() {
  const location = useLocation();

  return (
    <StyledHeader>
      <Navigation>
        <NavLink $isCurrent={location.pathname === '/'} to="/">
          Quiz
        </NavLink>
        <NavLink
          $isCurrent={location.pathname === '/dictionary'}
          to="/dictionary"
        >
          Dictionary
        </NavLink>
      </Navigation>
    </StyledHeader>
  );
}
