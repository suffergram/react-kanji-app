import { KanjiType } from './kanji-type';
import { VocabType } from './vocab-type';

export type SearchDTO = {
  kanji: KanjiType[];
  vocab: VocabType[];
};
