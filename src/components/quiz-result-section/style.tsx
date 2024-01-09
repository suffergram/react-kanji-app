import styled, { css } from 'styled-components';

export const Section = styled.section<{
  $area: string;
}>`
  align-self: start;
  border: 1px solid #556;
  border-radius: 1rem;
  padding: 1rem;
  grid-area: ${(props) => props.$area};

  ${(props) => {
    switch (props.$area) {
      case 'kanji':
        return css`
          justify-self: end;
        `;
      default:
        return css`
          justify-self: start;
        `;
    }
  }}

  @media (max-width: 720px) {
    justify-self: stretch;
  }
`;

export const Header = styled.h3`
  margin-bottom: 1rem;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  border-bottom: 1px solid #556;
  width: 100%;
  margin: 0.125rem 0;
`;
