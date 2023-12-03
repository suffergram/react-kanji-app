import styled from 'styled-components';

export const IndicatorContainer = styled.div<{ $amount: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$amount}, 1fr);
  gap: 4px;
  width: 100vw;
  height: 4px;
  position: absolute;
  top: 0;
`;

export const CurrentPoint = styled.div`
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.5);
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
