import styled from 'styled-components';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
`;

export const DictionaryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  align-items: start;
  gap: 2rem;
  flex: 1;
  width: 100%;
`;
