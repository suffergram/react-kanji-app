import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  height: 3rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
