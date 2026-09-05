import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useSearchParams } from 'react-router-dom';
import { Search } from '../../components/dict/search/search';
import { DictionarySection } from './style';
import { SearchResult } from '../../components/dict/search-result/search-result';
import { Loader } from '../../components/shared/loader/loader';
import { useSearch } from '../../hooks/use-search/use-search';
import { useRowsPerPage } from '../../hooks/use-rows-per-page/use-rows-per-page';
import { fetchSearchData } from '../../state/fetch-search-data';
import { handleSetSearchAction } from '../../state/dict-action-creators';
import { RootState } from '../../types/root-state';

export function DictPage() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const [searchParams] = useSearchParams(new URLSearchParams());
  const { isLoading } = useSearch();
  const rowsPerPage = useRowsPerPage();

  useEffect(() => {
    const search = searchParams.get('search') ?? '';
    const page = parseInt(searchParams.get('page') ?? '1', 10) || 1;
    dispatch(fetchSearchData(search, page, rowsPerPage));
    dispatch(handleSetSearchAction(search));
  }, [searchParams, rowsPerPage]);

  return (
    <DictionarySection>
      {isLoading && <Loader />}
      <Search />
      <SearchResult rowsPerPage={rowsPerPage} />
    </DictionarySection>
  );
}
