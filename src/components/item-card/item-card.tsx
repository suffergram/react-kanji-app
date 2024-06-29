import { KanjiType } from '../../types/kanji-type';
import { VocabType } from '../../types/vocab-type';
import {
  CurrentInfo,
  CurrentItem,
  Item,
  Level,
  Paragraph,
  Tile,
} from './style';

type ItemTileProps = {
  item: KanjiType & VocabType;
};

export function ItemCard({ item }: ItemTileProps): JSX.Element {
  return (
    <Tile>
      <CurrentItem>
        <Item>{item.kanji}</Item>
        <Level>jlpt n{item.jlpt}</Level>
      </CurrentItem>

      <CurrentInfo>
        <Paragraph>
          <strong>{item.meaning.replaceAll(';', ',')}</strong>
        </Paragraph>
        {item.kana && (
          <Paragraph>
            kana: <strong>{item.kana}</strong>
          </Paragraph>
        )}
        {item.kun && (
          <Paragraph>
            kun: <strong>{item.kun.replaceAll(';', ',')}</strong>
          </Paragraph>
        )}
        {item.on && (
          <Paragraph>
            on: <strong>{item.on.replaceAll(';', ',')}</strong>
          </Paragraph>
        )}
        {item.ref?.slice(0, 3).map((ref) => (
          <Paragraph key={ref.id}>
            {ref.kanji} ({ref.kana}) {ref.meaning}
          </Paragraph>
        ))}
      </CurrentInfo>
    </Tile>
  );
}
