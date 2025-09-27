import { DELIMITER } from '../../../data/constants/constants';
import { KanjiType } from '../../../types/kanji-type';
import { VocabType } from '../../../types/vocab-type';
import { truncateTarget } from '../../../util/truncateTarget';
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

export function ItemCard({ item }: ItemTileProps) {
  return (
    <Tile>
      <CurrentItem>
        <Item>{item.kanji}</Item>
        <Level jlpt={item.jlpt}>n{item.jlpt}</Level>
      </CurrentItem>

      <CurrentInfo>
        <Paragraph>
          <strong>
            {truncateTarget(item.meaning)?.replaceAll(DELIMITER, ',')}
          </strong>
        </Paragraph>
        {item.kana && (
          <Paragraph>
            kana: <strong>{item.kana}</strong>
          </Paragraph>
        )}
        {item.kun && (
          <Paragraph>
            kun: <strong>{item.kun.replaceAll(DELIMITER, ',')}</strong>
          </Paragraph>
        )}
        {item.on && (
          <Paragraph>
            on: <strong>{item.on.replaceAll(DELIMITER, ',')}</strong>
          </Paragraph>
        )}
        {item.ref?.slice(0, 2).map((ref) => (
          <Paragraph key={ref.id}>
            {ref.kanji} ({ref.kana}) {truncateTarget(ref.meaning)}
          </Paragraph>
        ))}
      </CurrentInfo>
    </Tile>
  );
}
