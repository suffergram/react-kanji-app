import { VocabType } from '../../types/vocab-type';
import { StyledCard, StyledHeading } from './style';

type CardProps = {
  cardData: VocabType | undefined;
};

export function Card({ cardData }: CardProps) {
  return (
    <StyledCard>
      <StyledHeading>{cardData?.kanji}</StyledHeading>
    </StyledCard>
  );
}
