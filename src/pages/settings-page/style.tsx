import styled from 'styled-components';
import { Button } from '../../components/shared/button/button';

export const StyledSection = styled.section`
  width: 28rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  margin: 0;
`;

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

export const ProfileSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
`;

export const ProfileEmail = styled.span`
  color: #aab;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SaveButton = styled(Button)`
  align-self: flex-end;
`;
