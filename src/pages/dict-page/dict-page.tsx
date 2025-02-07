import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { RootState } from '../../types/root-state';
import { ItemList } from '../../components/dict/item-list/item-list';
import { ItemCard } from '../../components/dict/item-card/item-card';
import { Search } from '../../components/dict/search/search';
import {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useSearch } from '../../hooks/use-search/use-search';
import { REQUEST_TIMEOUT } from '../../data/constants/constants';
import { DictionaryContent, DictionarySection } from './style';
import { DictInstruction } from '../../components/dict/dict-instruction/dict-instruction';
import { handleSetSearchAction } from '../../state/dict-action-creators';

export function DictPage() {
  // what would be on this page
  // search input
  // table or list of kanji
  // buttons to choose jlpt level
  //

  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams(
    new URLSearchParams()
  );

  const { kanji, vocab, isLoading } = useSearch();

  const [search, setSearch] = useState(searchParams.get('search') ?? '');

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      // request.cancel();
      setSearch(event.target.value);
    },
    []
  );

  const handleSearchParams = () => {
    if (search) {
      setSearchParams({ search: search });
    } else {
      setSearchParams({ search: '' });
      searchParams.delete('search');
      setSearch('');
      navigate(location.pathname, { replace: true });
    }
  };

  const request = debounce(handleSearchParams, REQUEST_TIMEOUT);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearchParams();
  };

  const handleExampleSearch = (param: string) => {
    setSearch(param);
    // request.cancel();
    navigate(`${location.pathname}?search=${param}`);
  };

  // TODO: fix - handleExampleSearch causes 2 renders

  // TODO: do something with this useEffect hook =/
  useEffect(() => {
    request();

    return () => {
      request.cancel();
    };
  }, [search]);

  return (
    <DictionarySection>
      <Search
        search={search}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
      {kanji.length === 0 && vocab.length === 0 && (
        <DictInstruction setSearch={handleExampleSearch} />
      )}
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
    </DictionarySection>
  );
}
