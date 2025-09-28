import styled from 'styled-components';

export const Heading = styled.h2``;

export const Container = styled.div`
  margin: 2rem 0;
  display: grid;
  gap: 1rem;
  grid-template-areas:
    'kanji vocab'
    'kanji mistake'
    'kanji .';

  @media (max-width: 720px) {
    grid-template-areas:
      'kanji'
      'vocab'
      'mistake';
  }
`;
