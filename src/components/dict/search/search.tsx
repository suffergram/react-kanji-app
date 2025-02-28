import { TextField } from '@mui/material';
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { debounce } from 'lodash';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { REQUEST_TIMEOUT } from '../../../data/constants/constants';
import { SearchInput } from './style';

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams(
    new URLSearchParams()
  );
  const navigate = useNavigate();

  const [search, setSearch] = useState(searchParams.get('search') ?? '');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => setSearch(event.target.value),
    []
  );

  const handleSearchParams = () => {
    if (search) {
      setSearchParams({ search: search });
    } else {
      setSearchParams({ search: '' });
      searchParams.delete('search');
      setSearch('');
      navigate(location.pathname);
    }
  };

  const request = debounce(handleSearchParams, REQUEST_TIMEOUT);

  const handleFormSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    request.cancel();
    handleSearchParams();
  };

  useEffect(() => {
    if (![search, null].includes(searchParams.get('search'))) request();

    return () => {
      request.cancel();
    };
  }, [search]);

  useEffect(() => {
    const searchParam = searchParams.get('search') ?? '';
    if (searchParam !== search) {
      setSearch(searchParam);
    }
  }, [searchParams]);

  return (
    <form onSubmit={handleFormSubmit}>
      <SearchInput
        placeholder="English, Japanese, Romaji, words or kanji"
        value={search}
        onChange={handleInputChange}
      />
    </form>
  );
}
