import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 56rem;
  min-height: calc(100vh - 4rem);
  min-height: calc(100svh - 4rem);
  margin: 0 auto;
  padding: 1rem 0;
  box-sizing: border-box;

  @media (max-height: 700px) {
    min-height: auto;
  }
`;

export const Heading = styled.div`
  text-align: left;
  margin-bottom: 1rem;
`;

export const Pool = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin: 2.5rem 0;
`;

export const PoolOption = styled.div<{
  $isCurrent: boolean;
  $orderIndex: number;
}>`
  font-size: 2.25rem;
  font-weight: bold;
  color: rgba(255, 255, 255, ${(props) => (props.$isCurrent ? 1 : 0.55)});
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  border-bottom: 2px solid rgba(1, 1, 1, 0);
  user-select: none;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  ${(props) => props.$isCurrent && 'border-bottom: 2px solid white;'}
`;

export const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const KanjiDisplay = styled.div`
  font-size: 8rem;
  font-weight: bold;
  line-height: 1;
`;

export const MeaningWrap = styled.div`
  min-height: 29px;
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

export const ReadingsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const Reading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  opacity: 0.85;
`;

export const ReadingLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  opacity: 0.6;
`;

export const ReadingValue = styled.span`
  font-size: 1.25rem;
`;

export const UpperSpacer = styled.div`
  flex: 1;
`;

export const ActionsRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const LowerSpacer = styled.div`
  flex: 1;
`;

export const CloseArea = styled.div`
  align-self: flex-end;
`;