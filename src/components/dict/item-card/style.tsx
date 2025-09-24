import styled from 'styled-components';

type LevelProps = {
  jlpt: number;
};

export const Tile = styled.li`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

export const CurrentItem = styled.div`
  min-width: 150px;
`;

export const Item = styled.p`
  margin: 0;
  font-size: 2rem;
`;

export const Level = styled.p<LevelProps>`
  display: inline;
  margin: 0;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background-color: ${({ jlpt }) => {
    switch (jlpt) {
      case 1:
        return 'hsla(0, 100%, 70%, 0.4)'; // n1
      case 2:
        return 'hsla(30, 100%, 65%, 0.4)'; // n2
      case 3:
        return 'hsla(55, 100%, 65%, 0.4)'; // n3
      case 4:
        return 'hsla(120, 70%, 60%, 0.4)'; // n4
      case 5:
        return 'hsla(220, 100%, 65%, 0.4)'; // n5
    }
  }};
`;

export const CurrentInfo = styled.div``;

export const Paragraph = styled.p`
  margin: 0.5rem 0;
`;
