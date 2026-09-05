import { KanjiType } from './kanji-type';
import { VocabType } from './vocab-type';

export type Paginated<T> = {
  items: T[];
  total: number;
};

export type SearchDTO = {
  kanji: Paginated<KanjiType>;
  vocab: Paginated<VocabType>;
};
