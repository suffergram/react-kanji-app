import { Item, ItemContainer, PrimaryText, SecondaryText } from './style';

type ResultSectionProps = {
  primary?: string;
  kana?: string;
  meaning?: string;
};

export function SectionItem({ primary, kana, meaning }: ResultSectionProps) {
  return (
    <ItemContainer>
      <Item>
        {primary && <PrimaryText>{primary}</PrimaryText>}
        <div>
          {kana && <SecondaryText>{kana}</SecondaryText>}
          {meaning && <SecondaryText>{meaning}</SecondaryText>}
        </div>
      </Item>
    </ItemContainer>
  );
}
