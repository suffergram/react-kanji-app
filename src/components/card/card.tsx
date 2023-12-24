import { VocabType } from '../../types/vocab-type';
import { Description, Row, StyledCard, StyledHeading } from './style';

type CardProps = {
  cardData: VocabType | undefined;
  kanjiLevels: number[] | undefined;
  isOptionPressed: boolean;
};

export function Card({ cardData, kanjiLevels, isOptionPressed }: CardProps) {
  const uniqueKanjiLevels = Array.from(new Set(kanjiLevels));

  return (
    <StyledCard>
      <div
        style={{
          position: 'relative',
          flex: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <StyledHeading>{cardData?.kanji}</StyledHeading>
        <Description>
          <Row>{`Vocab: N${cardData?.jlpt}`}</Row>
          <Row>{`Kanji: ${uniqueKanjiLevels
            .sort((a, b) => a - b)
            .map((level) => `N${level}`)
            .join(', ')}`}</Row>
        </Description>
      </div>
      <div
        style={{
          flex: 2,
          minWidth: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
            style={{
              minHeight: 29,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            {isOptionPressed &&
              cardData?.meaning.split(';').map((item) => (
                <p
                  key={item}
                  style={{
                    margin: 0,
                    opacity: 0.8,
                    border: '1px solid #556',
                    borderRadius: '0.25rem',
                    padding: '0.25rem 0.5rem',
                    minWidth: '2rem',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.trim()}
                </p>
              ))}
          </div>
      </div>
    </StyledCard>
  );
}
