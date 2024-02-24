import { KanjiType } from './kanji-type';
import { VocabType } from './vocab-type';

export type QuizPoolType = {
  question: VocabType;
  options: VocabType[];
  kanji: KanjiType[];
};
