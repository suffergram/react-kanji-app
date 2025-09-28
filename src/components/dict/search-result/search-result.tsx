import { useSearchParams } from 'react-router-dom';
import { useSearch } from '../../../hooks/use-search/use-search';
import { DictInstruction } from '../dict-instruction/dict-instruction';
import { ItemCard } from '../item-card/item-card';
import { ItemList } from '../item-list/item-list';
import { SearchPagination } from '../search-pagination/search-pagination';
import { useRowsPerPage } from '../../../hooks/use-rows-per-page/use-rows-per-page';
import { DictionaryContent, ResultContainer } from './style';

export function SearchResult() {
  const { kanji, vocab, error } = useSearch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { kanji: kanjiRows, vocab: vocabRows } = useRowsPerPage(150, 90);

  if (error) {
    return <DictInstruction errorMessage={error.message} />;
  }

  const sections = [
    { title: 'Kanji', data: kanji, rowsPerPage: kanjiRows },
    { title: 'Words', data: vocab, rowsPerPage: vocabRows },
  ].filter(({ data }) => data.length > 0);

  if (!sections.length) return <DictInstruction />;

  const maxPages = Math.max(
    ...sections.map(({ data, rowsPerPage }) =>
      Math.ceil(data.length / rowsPerPage)
    )
  );

  const page = parseInt(searchParams.get('page') ?? '1', 10);

  const setPage = (page: number) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  return (
    <ResultContainer>
      <DictionaryContent>
        {sections.map(({ title, data, rowsPerPage }) => {
          const start = (page - 1) * rowsPerPage;
          const end = start + rowsPerPage;
          const currentData = data.slice(start, end);

          if (currentData.length === 0) return null;

          return (
            <ItemList
              key={title}
              title={title}
              data={currentData}
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
    </ResultContainer>
  );
}
