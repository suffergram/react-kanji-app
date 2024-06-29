import { VocabType } from './vocab-type';

export type KanjiType = {
  id: number;
  kanji: string;
  jlpt: number;
  romajiOn: string;
  on: string;
  romajiKun: string;
  kun: string;
  meaning: string;
  ref?: Array<Partial<VocabType>>;
};
