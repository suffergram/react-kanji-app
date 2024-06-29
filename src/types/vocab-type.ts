import { KanjiType } from './kanji-type';

export type VocabType = {
  id: number;
  jlpt: number;
  kanji: string;
  meaning: string;
  kana: string;
  romaji: string;
  ref?: Array<Partial<KanjiType>>;
};
