import { Search } from '../../components/dict/search/search';
import { DictionarySection } from './style';
import { SearchResult } from '../../components/dict/search-result/search-result';

export function DictPage() {
  // what would be on this page
  // search input
  // table or list of kanji
  // buttons to choose jlpt level (or toggle buttons?)
  //

  return (
    <DictionarySection>
      <Search />
      <SearchResult />
    </DictionarySection>
  );
}
