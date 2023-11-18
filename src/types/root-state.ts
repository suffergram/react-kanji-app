import { AnswerType } from './answer-type';
import { VocabType } from './vocab-type';

export type RootState = {
  quizState: {
    isLoading: boolean;
    isOngoing: boolean;
    answers: AnswerType[];
    current: VocabType | null;
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
