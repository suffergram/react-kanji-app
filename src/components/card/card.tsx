import { VocabType } from '../../types/vocab-type';
import { Description, Row, StyledCard, StyledHeading } from './style';

type CardProps = {
  cardData: VocabType | undefined;
  kanjiLevels: number[] | undefined;
};

export function Card({ cardData, kanjiLevels }: CardProps) {
  const uniqueKanjiLevels = Array.from(new Set(kanjiLevels));

  return (
    <StyledCard>
      <StyledHeading>{cardData?.kanji}</StyledHeading>
      <Description>
        <Row>{`Vocabulary: N${cardData?.jlpt}`}</Row>
        <Row>{`Kanji: ${uniqueKanjiLevels
          .sort((a, b) => a - b)
          .map((level) => `N${level}`)
          .join(', ')}`}</Row>
      </Description>
    </StyledCard>
  );
}
