import { useSearch } from '../../../hooks/use-search/use-search';
import { Loader } from '../../shared/loader/loader';
import { DictInstruction } from '../dict-instruction/dict-instruction';
import { ItemCard } from '../item-card/item-card';
import { ItemList } from '../item-list/item-list';
import { DictionaryContent } from './style';

export function SearchResult() {
  const { kanji, vocab, isLoading } = useSearch();

  // TODO: make pagination and remove slice(0, 50)

  if (isLoading) return <Loader />;

  const sections = [
    { title: 'Kanji', data: kanji },
    { title: 'Words', data: vocab },
  ].filter(({ data }) => data.length > 0);

  if (!sections.length) return <DictInstruction />;

  return (
    <DictionaryContent>
      {sections.map(({ title, data }) => (
        <ItemList
          key={title}
          title={title}
          data={data.slice(0, 50)}
          amount={data.length}
          item={ItemCard}
        />
      ))}
    </DictionaryContent>
  );
}
