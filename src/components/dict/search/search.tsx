import { TextField } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { SearchInput } from './style';

type SearchProps = {
  search: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function Search({ search, onChange, onSubmit }: SearchProps) {
  return (
    <form onSubmit={onSubmit}>
      <SearchInput
        placeholder="English, Japanese, Romaji, words or kanji"
        value={search}
        onChange={onChange}
      />
    </form>
  );
}
