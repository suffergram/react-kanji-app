import { VocabType } from '../../types/vocab-type';
import { StyledCard } from './style';

type CardProps = {
  cardData: VocabType | null;
};

export function Card({ cardData }: CardProps) {
  return (
    <StyledCard>
      <h2>{cardData?.kanji}</h2>
      {/* <p>{cardData?.kana}</p> */}
      {/* <p>{cardData?.meaning}</p> */}
      <p>
        {cardData?.id} N{cardData?.jlpt}
      </p>
    </StyledCard>
  );
}
