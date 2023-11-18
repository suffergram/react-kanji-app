import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  height: 3rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navigation = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
