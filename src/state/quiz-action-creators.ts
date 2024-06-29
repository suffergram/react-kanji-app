import { AnswerType } from '../types/answer-type';
import { QuizPoolType } from '../types/quiz-pool-type';
import { QuizActions } from './constants';

export const handleStartQuizAction = (
  amount: number,
  pool: QuizPoolType[]
) => ({
  type: QuizActions.HandleStartQuiz,
  payload: {
    amount,
    pool,
  },
});

export const handleEndQuizAction = () => ({
  type: QuizActions.HandleEndQuiz,
});

export const handleNewQuestionAction = () => ({
  type: QuizActions.HandleNewQuestion,
});

export const handleSubmitAnswerAction = (answer: AnswerType) => ({
  type: QuizActions.HandleSubmitAnswer,
  payload: answer,
});

export const handleAddQuestionAction = (question: QuizPoolType) => ({
  type: QuizActions.HandleAddQuestion,
  payload: question,
});

export const handleQuizResultAction = () => ({
  type: QuizActions.HandleQuizResult,
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
