import styled from 'styled-components';

export const TrackerContainer = styled.div<{ amount: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.amount}, 1fr);
  gap: 4px;
  width: 100vw;
  height: 4px;
  position: absolute;
  top: 0;
`;

export const CheckedPoint = styled.div`
  height: 100%;
  background-color: white;
  opacity: 0.5;
`;

export const UnheckedPoint = styled.div`
  height: 100%;
  background-color: white;
  opacity: 0.1;
`;
