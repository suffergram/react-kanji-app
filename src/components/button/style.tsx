import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{
  $variant?: string;
  $success?: boolean;
}>`
  cursor: pointer;
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  border: none;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 11rem) {
    width: 84vw;
  }

  ${(props) => {
    const success = {
      undefined: {
        bg: '#889',
        bottom: '0 0.25rem #556',
        glow: undefined,
        active: 'none',
        color: '#aab',
      },
      true: {
        bg: '#8b8',
        bottom: '0 0.25rem #585',
        glow: '0 0 1rem rgba(136, 187, 136, 0.2)',
        active: '0 0 1.5rem rgba(136, 187, 136, 0.2)',
        color: '#ada',
      },
      false: {
        bg: '#b88',
        bottom: '0 0.25rem #855',
        glow: '0 0 1rem rgba(187, 136, 136, 0.2)',
        active: '0 0 1.5rem rgba(187, 136, 136, 0.2)',
        color: '#daa',
      },
    };

    switch (props.$variant) {
      case 'primary':
        return css`
          color: #223;
          background-color: ${success[`${props.$success}`].bg};
          border: none;
          box-shadow: ${success[`${props.$success}`].bottom}
            ${success[`${props.$success}`].glow &&
            `, ${  success[`${props.$success}`].glow}`};

          &:active {
            position: relative;
            top: 0.25rem;
            box-shadow: ${success[`${props.$success}`].active};
          }
        `;
      case 'secondary':
        return css`
          color: ${success[`${props.$success}`].color};
          background-color: transparent;
          border: 0.125rem solid ${success[`${props.$success}`].bg};
          box-shadow: 0 0.125rem ${success[`${props.$success}`].bg}
            ${success[`${props.$success}`].glow &&
            `, ${  success[`${props.$success}`].glow}`};

          &:active {
            position: relative;
            top: 0.125rem;
            box-shadow: ${success[`${props.$success}`].active};
          }
        `;
      default:
        return css``;
    }
  }}
`;
