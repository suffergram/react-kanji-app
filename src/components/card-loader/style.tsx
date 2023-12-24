import styled, { css, keyframes } from 'styled-components';
import { CARD_TIMER } from '../../data/constants/constants';

const animateProgress = () => {
  let myKeyframes = ``;
  for (let i = 0; i <= 100; i += 1) {
    myKeyframes += `
      ${i}% {
        background: conic-gradient(
          rgba(255, 255, 255, 0) ${i}%,
          rgba(255, 255, 255, 1) 0
        )
      }
    `;
  }

  const animation = keyframes`${myKeyframes}`;

  return css`
    ${animation} ${CARD_TIMER / 1000}s forwards
  `;
};

export const Loader = styled.div`
  height: 1.5rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  opacity: 0.5;
  animation: ${animateProgress()};
`;

export const LoaderContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  position: relative;
`;

export const LoaderContent = styled.div`
  height: 1.5rem;
`;
