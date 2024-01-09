import { AnswerType } from './answer-type';
import { QuizPoolType } from './quiz-pool-type';

export type RootState = {
  quizState: {
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
  vocabState: {
    error: string | undefined;
  };
  kanjiState: {
    error: string | undefined;
  };
};
