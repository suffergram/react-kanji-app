import { AnswerType } from './answer-type';
import { KanjiType } from './kanji-type';
import { QuizPoolType } from './quiz-pool-type';
import { VocabType } from './vocab-type';

export type QuizState = {
  isLoading: boolean;
  isOngoing: boolean;
  isResulting: boolean;
  answers: AnswerType[];
  pool: QuizPoolType[];
  current: {
    id: number;
    data: QuizPoolType | null;
  };
  amount: number;
  kanjiLevel: number;
  vocabLevel: number;
  error: string | undefined;
};

export type DictState = {
  isLoading: boolean;
  kanji: KanjiType[];
  vocab: VocabType[];
  search: string;
  error?: Error | null;
};

export type RootState = {
  quizState: QuizState;
  dictState: DictState;
};
