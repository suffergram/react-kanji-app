import styled from 'styled-components';
import { Button } from '../../shared/button/button';

export const Card = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.125rem;
`;

export const SaveButton = styled(Button)`
  align-self: flex-end;
`;
