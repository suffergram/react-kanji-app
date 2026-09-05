import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearch } from '../../../hooks/use-search/use-search';
import { DictInstruction } from '../dict-instruction/dict-instruction';
import { ItemCard } from '../item-card/item-card';
import { ItemList } from '../item-list/item-list';
import { SearchPagination } from '../search-pagination/search-pagination';
import { DictionaryContent, ResultContainer } from './style';

type RowsPerPage = { kanji: number; vocab: number };

type SearchResultProps = {
  rowsPerPage: RowsPerPage;
};

const getMaxPages = (kanjiTotal: number, vocabTotal: number, rows: RowsPerPage) =>
  Math.max(Math.ceil(kanjiTotal / rows.kanji), Math.ceil(vocabTotal / rows.vocab));

export function SearchResult({ rowsPerPage }: SearchResultProps) {
  const { kanji, vocab, kanjiTotal, vocabTotal, error } = useSearch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentPage = parseInt(searchParams.get('page') ?? '1', 10) || 1;
    const maxPages = getMaxPages(kanjiTotal, vocabTotal, rowsPerPage);
    if (maxPages >= 1 && currentPage > maxPages) {
      const next = new URLSearchParams(searchParams);
      next.set('page', String(maxPages));
      setSearchParams(next);
    }
  }, [kanjiTotal, vocabTotal, rowsPerPage, searchParams, setSearchParams]);

  if (error) {
    return <DictInstruction errorMessage={error.message} />;
  }

  const sections = [
    { title: 'Kanji', data: kanji, total: kanjiTotal },
    { title: 'Words', data: vocab, total: vocabTotal },
  ].filter(({ data, total }) => total > 0 && data.length > 0);

  if (!sections.length) return <DictInstruction />;

  const maxPages = Math.max(getMaxPages(kanjiTotal, vocabTotal, rowsPerPage), 1);
  const currentPage = Math.min(
    parseInt(searchParams.get('page') ?? '1', 10) || 1,
    maxPages
  );

  const setPage = (page: number) => {
    const next = new URLSearchParams(searchParams);
    next.set('page', String(page));
    setSearchParams(next);
  };

  return (
    <ResultContainer>
      <DictionaryContent>
        {sections.map(({ title, data, total }) => (
          <ItemList
            key={title}
            title={title}
            data={data}
            amount={total}
            item={ItemCard}
          />
        ))}
      </DictionaryContent>
      <SearchPagination
        amount={maxPages}
        rowsPerPage={1}
        page={currentPage}
        onPageChange={setPage}
        mode="global"
      />
    </ResultContainer>
  );
}
