import { AnswerType } from './answer-type';
import { KanjiType } from './kanji-type';
import { LessonsDTO } from './lessons-dto';
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
  kanjiTotal: number;
  vocabTotal: number;
  search: string;
  error?: Error | null;
};

export type LearnState = {
  isLoading: boolean;
  isOngoing: boolean;
  title: string | null;
  pool: KanjiType[];
  lessons: LessonsDTO | null;
  error?: Error;
};

export type RootState = {
  quizState: QuizState;
  dictState: DictState;
  learnState: LearnState;
};
