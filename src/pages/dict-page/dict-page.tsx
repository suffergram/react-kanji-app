import { Search } from '../../components/dict/search/search';
import { DictionarySection } from './style';
import { SearchResult } from '../../components/dict/search-result/search-result';

export function DictPage() {
  return (
    <DictionarySection>
      <Search />
      <SearchResult />
    </DictionarySection>
  );
}
