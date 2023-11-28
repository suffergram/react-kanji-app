import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ $variant?: string }>`
  cursor: pointer;
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  border: none;

  @media (max-width: 11rem) {
    width: 84vw;
  }

  ${(props) => {
    switch (props.$variant) {
      case 'primary':
        return css`
          color: #223;
          background-color: #889;
          border: none;
          box-shadow: 0 0.25rem #556;

          &:active {
            position: relative;
            top: 0.25rem;
            box-shadow: none;
          }
        `;
      case 'secondary':
        return css`
          color: #aab;
          background-color: transparent;
          border: 0.125rem solid #889;
          box-shadow: 0 0.125rem #889;

          &:active {
            position: relative;
            top: 0.125rem;
            box-shadow: none;
          }
        `;
      default:
        return css``;
    }
  }}
`;
