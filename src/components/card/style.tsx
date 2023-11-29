import styled from 'styled-components';

export const StyledCard = styled.div`
  user-select: none;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledHeading = styled.h2`
  font-size: 5rem;
  margin: 0;

  @media (max-width: 500px) or (max-height: 500px) {
    font-weight: normal;
  }
`;

export const Description = styled.div`
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-height: 500px) {
    display: none;
  }
`;

export const Row = styled.p`
  margin: 0;
`;
