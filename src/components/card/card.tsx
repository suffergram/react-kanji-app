import { VocabType } from '../../types/vocab-type';
import {
  CurrentContent,
  Description,
  MeaningContainer,
  MeaningWord,
  MeaningWrap,
  Row,
  StyledCard,
  StyledHeading,
} from './style';

type CardProps = {
  cardData: VocabType | undefined;
  kanjiLevels: number[] | undefined;
  isOptionPressed: boolean;
};

export function Card({ cardData, kanjiLevels, isOptionPressed }: CardProps) {
  const uniqueKanjiLevels = Array.from(new Set(kanjiLevels));

  return (
    <StyledCard>
      <CurrentContent>
        <StyledHeading>{cardData?.kanji}</StyledHeading>
        <Description>
          <Row>{`Vocab: N${cardData?.jlpt}`}</Row>
          <Row>{`Kanji: ${uniqueKanjiLevels
            .sort((a, b) => a - b)
            .map((level) => `N${level}`)
            .join(', ')}`}</Row>
        </Description>
      </CurrentContent>
      <MeaningContainer>
        <MeaningWrap>
          {isOptionPressed &&
            cardData?.meaning
              .split(';')
              .map((item) => (
                <MeaningWord key={item}>{item.trim()}</MeaningWord>
              ))}
        </MeaningWrap>
      </MeaningContainer>
    </StyledCard>
  );
}
