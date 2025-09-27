import { Search } from '../../components/dict/search/search';
import { DictionarySection } from './style';
import { SearchResult } from '../../components/dict/search-result/search-result';
import { Loader } from '../../components/shared/loader/loader';
import { useSearch } from '../../hooks/use-search/use-search';

export function DictPage() {
  const { isLoading } = useSearch();

  return (
    <DictionarySection>
      {isLoading && <Loader />}
      <Search />
      <SearchResult />
    </DictionarySection>
  );
}
