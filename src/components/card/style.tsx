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

export const CurrentContent = styled.div`
  position: relative;
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const MeaningContainer = styled.div`
  flex: 2;
  min-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MeaningWrap = styled.div`
  min-height: 29px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const MeaningWord = styled.p`
  margin: 0;
  opacity: 0.9;
  border: 1px solid #556;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  min-width: 2rem;
  text-align: center;
  white-space: nowrap;
`;
