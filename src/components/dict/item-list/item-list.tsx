import { KanjiType } from '../../../types/kanji-type';
import { VocabType } from '../../../types/vocab-type';
import { List, Title, FoundAmount, Container } from './style';
import { Line } from '../../shared/line/line';

type ItemGridProps = {
  title: string;
  data: Array<KanjiType | VocabType>;
  amount: number;
  item: React.ElementType;
};

export function ItemList({ title, data, item: Item, amount }: ItemGridProps) {
  return (
    <Container>
      <Title>
        <h3>{title}</h3>
        <FoundAmount>— {amount} found</FoundAmount>
      </Title>
      <List>
        {data.flatMap((item, index) => [
          <Item key={item.id} item={item} />,
          index < data.length - 1 && <Line key={`line-${item.id}`} />,
        ])}
      </List>
    </Container>
  );
}
