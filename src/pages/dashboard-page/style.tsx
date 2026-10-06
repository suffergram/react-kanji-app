import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 40rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Greeting = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  min-width: 0;

  & > div {
    min-width: 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
  overflow-wrap: anywhere;
`;

export const Subtitle = styled.p`
  margin: 0.25rem 0 0;
  color: #889;
`;

export const Placeholder = styled.div`
  padding: 2rem;
  border: 0.125rem dashed rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  text-align: center;
  color: #889;
`;
