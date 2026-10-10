import styled, { css } from 'styled-components';
import { Button } from '../../shared/button/button';

export const Card = styled.div<{ $danger?: boolean }>`
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  background-color: rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${(props) =>
    props.$danger &&
    css`
      border-color: rgba(217, 110, 110, 0.35);
      background-color: rgba(217, 110, 110, 0.04);
    `}
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const CardTitle = styled.h2<{ $danger?: boolean }>`
  margin: 0;
  font-size: 1.125rem;
  color: ${(props) => (props.$danger ? '#e8a3a3' : 'white')};
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
  color: #889;
`;

/* Full-width bar at the bottom of the card: negative margins cancel the
   card's padding so the bar reaches the card's edges */
export const CardFooter = styled.div`
  margin: 0.25rem -1.5rem -1.5rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 0 0 0.75rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: flex-end;

  @media (max-width: 30rem) {
    & > * {
      width: 100%;
    }
  }
`;

export const CardButton = styled(Button)`
  width: auto;
  min-width: 7rem;
  height: 2.5rem;
  padding: 0 1.25rem;
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
`;
