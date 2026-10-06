import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  height: 3rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: 40rem) {
    height: auto;
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 0.25rem;
    padding: 0.5rem 1rem;
  }
`;

export const Navigation = styled.nav`
  grid-column: 2;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 40rem) {
    grid-column: 1;
  }
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

export const UserMenu = styled.div`
  grid-column: 3;
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;

  @media (max-width: 40rem) {
    grid-column: 1;
    justify-self: center;
  }
`;

export const UserName = styled.span`
  max-width: 14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProfileLink = styled(Link)<{ $isCurrent: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  color: ${(props) =>
    props.$isCurrent ? 'white' : 'rgba(255, 255, 255, 0.7)'};
  text-decoration: none;

  &:hover {
    color: white;
  }

  &:hover ${UserName} {
    text-decoration: underline;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: white;
  cursor: pointer;

  &:hover:not(:disabled) {
    text-decoration: underline;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
