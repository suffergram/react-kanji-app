import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const Title = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;
  align-self: flex-start;
`;

export const FoundAmount = styled.p`
  margin: 0;
`;
