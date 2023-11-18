import { AnswerType } from '../types/answer-type';
import { VocabType } from '../types/vocab-type';
import { QuizActions } from './constants';

export const handleStartQuizAction = (amount: number) => ({
  type: QuizActions.HandleStartQuiz,
  payload: amount,
});

export const handleEndQuizAction = () => ({
  type: QuizActions.HandleEndQuiz,
});

export const handleNewQuestionAction = (question: VocabType) => ({
  type: QuizActions.HandleNewQuestion,
  payload: question,
});

export const handleSubmitAnswerAction = (answer: AnswerType) => ({
  type: QuizActions.HandleSubmitAnswer,
  payload: answer,
});

export const handleKanjiLevelAction = (level: number) => ({
  type: QuizActions.HandleKanjiLevel,
  payload: level,
});

export const handleVocabLevelAction = (level: number) => ({
  type: QuizActions.HandleVocabLevel,
  payload: level,
});

export const handleLoadingAction = () => ({
  type: QuizActions.HandleLoading,
});

export const handleErrorAction = (error: string) => ({
  type: QuizActions.HandleError,
  payload: error,
});
