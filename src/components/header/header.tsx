import { NavLink, Navigation, StyledHeader } from './style';

export function Header() {
  return (
    <StyledHeader>
      <Navigation>
        <NavLink to="/">Quiz</NavLink>
        <NavLink to="/dictionary">Dictionary</NavLink>
      </Navigation>
    </StyledHeader>
  );
}
