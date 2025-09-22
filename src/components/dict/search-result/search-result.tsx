import { useState } from 'react';
import { useSearch } from '../../../hooks/use-search/use-search';
import { KanjiType } from '../../../types/kanji-type';
import { VocabType } from '../../../types/vocab-type';
import { Loader } from '../../shared/loader/loader';
import { DictInstruction } from '../dict-instruction/dict-instruction';
import { ItemCard } from '../item-card/item-card';
import { ItemList } from '../item-list/item-list';
import { SearchPagination } from '../search-pagination/search-pagination';
import { DictionaryContent } from './style';

export function SearchResult() {
  const { kanji, vocab, isLoading } = useSearch();
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;

  // TODO: make pagination and remove slice(0, 50)

  if (isLoading) return <Loader />;

  const sections = [
    { title: 'Kanji', data: kanji, rowsPerPage: 4 },
    { title: 'Words', data: vocab, rowsPerPage: 8 },
  ].filter(({ data }) => data.length > 0);

  if (!sections.length) return <DictInstruction />;

  const maxPages = Math.max(
    ...sections.map(({ data, rowsPerPage }) =>
      Math.ceil(data.length / rowsPerPage)
    )
  );

  return (
    <>
      <DictionaryContent>
        {sections.map(({ title, data, rowsPerPage }) => {
          const start = (page - 1) * rowsPerPage;
          const end = start + rowsPerPage;
          return (
            <ItemList
              key={title}
              title={title}
              data={data.slice(start, end)}
              amount={data.length}
              item={ItemCard}
            />
          );
        })}
      </DictionaryContent>
      <SearchPagination
        amount={maxPages}
        rowsPerPage={1}
        page={page}
        onPageChange={setPage}
        mode="global"
      />
    </>
  );
}
