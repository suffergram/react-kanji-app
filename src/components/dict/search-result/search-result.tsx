import { useSearch } from '../../../hooks/use-search/use-search';
import { Loader } from '../../shared/loader/loader';
import { DictInstruction } from '../dict-instruction/dict-instruction';
import { ItemCard } from '../item-card/item-card';
import { ItemList } from '../item-list/item-list';
import { DictionaryContent } from './style';

export function SearchResult() {
  const { kanji, vocab, isLoading } = useSearch();

  // TODO: make pagination and remove slice(0, 50)

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {kanji.length === 0 && vocab.length === 0 && <DictInstruction />}
      <DictionaryContent>
        {!isLoading && kanji.length > 0 && (
          <ItemList
            title="Kanji"
            data={kanji.slice(0, 50)}
            amount={kanji.length}
            item={ItemCard}
          />
        )}
        {!isLoading && vocab.length > 0 && (
          <ItemList
            title="Words"
            data={vocab.slice(0, 50)}
            amount={vocab.length}
            item={ItemCard}
          />
        )}
      </DictionaryContent>
    </>
  );
}
