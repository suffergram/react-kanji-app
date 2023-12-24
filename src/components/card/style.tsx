import styled from 'styled-components';

export const StyledCard = styled.div`
  user-select: none;
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledHeading = styled.p`
  font-size: 5rem;
  font-weight: bold;
  height: 5rem;
  display: flex;
  align-items: center;
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

  @media (max-height: 680px) {
    display: none;
  }
`;

export const Row = styled.p`
  margin: 0;
`;
