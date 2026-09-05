import { useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';

export function useSearch() {
  const { kanji, vocab, kanjiTotal, vocabTotal, isLoading, search, error } =
    useSelector((state: RootState) => state.dictState);

  return { kanji, vocab, kanjiTotal, vocabTotal, isLoading, search, error };
}
