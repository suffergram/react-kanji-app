import styled from 'styled-components';

export const StyledCard = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeading = styled.h2`
  user-select: none;
  font-size: 5rem;
  margin: 0;

  @media (max-width: 500px) or (max-height: 500px) {
    font-weight: normal;
  }
`;
