import { Fragment } from 'react';
import { KanjiType } from '../../types/kanji-type';
import { VocabType } from '../../types/vocab-type';
import { List, Title, FoundAmount, Container } from './style';
import { Line } from '../line/line';

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
        {data.map((item) => (
          <Fragment key={item.id}>
            <Item item={item} />
            <Line />
          </Fragment>
        ))}
      </List>
    </Container>
  );
}
