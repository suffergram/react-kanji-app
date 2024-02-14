import styled, { css } from 'styled-components';
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

export const NavLink = styled(Link)<{ $isCurrent: boolean }>`
  color: white;
  text-decoration: none;
  box-sizing: border-box;

  ${(props) => {
    switch (props.$isCurrent) {
      case true:
        return css`
          text-decoration: underline;
        `;
      default:
        return css``;
    }
  }}

  &:hover {
    text-decoration: underline;
  }
`;
