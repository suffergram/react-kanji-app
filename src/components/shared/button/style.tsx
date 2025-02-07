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
        bg: '#c5c5ce',
        bottom: '0 0.25rem #707079',
        glow: undefined,
        active: 'none',
        color: '#c5c5ce',
      },
      true: {
        bg: '#a8cda8',
        bottom: '0 0.25rem #537853',
        glow: '0 0 1rem rgba(168, 205, 168, 0.2)',
        active: '0 0 1.5rem rgba(168, 205, 168, 0.2)',
        color: '#ada',
      },
      false: {
        bg: '#d9bfbf',
        bottom: '0 0.25rem #846a6a',
        glow: '0 0 1rem rgba(217, 191, 191, 0.2)',
        active: '0 0 1.5rem rgba(217, 191, 191, 0.2)',
        color: '#d9bfbf',
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
