import { useLocation } from 'react-router-dom';
import { NavLink, Navigation, StyledHeader } from './style';
import { navLinks } from '../../data/nav-links/nav-links';

export function Header() {
  const location = useLocation();

  return (
    <StyledHeader>
      <Navigation>
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
    </StyledHeader>
  );
}
