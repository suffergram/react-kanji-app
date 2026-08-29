import styled from 'styled-components';

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: none;
  background: none;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.2;

  &:hover {
    opacity: 0.6;
  }
`;
