import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useSearchParams } from 'react-router-dom';
import { RootState } from '../../types/root-state';
import { fetchSearchData } from '../../state/fetch-search-data';
import { handleSetSearchAction } from '../../state/dict-action-creators';

export function useSearch() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const [searchParams] = useSearchParams(new URLSearchParams());

  const { kanji, vocab, isLoading, search } = useSelector(
    (state: RootState) => state.dictState
  );

  useEffect(() => {
    const search = searchParams.get('search') ?? '';
    dispatch(fetchSearchData(search));
    dispatch(handleSetSearchAction(search));
  }, [searchParams]);

  return { kanji, vocab, isLoading, search };
}
