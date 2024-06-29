import { AnyAction, Reducer } from 'redux';
import { QuizState } from '../types/root-state';
import { QuizActions } from './constants';
import { initialQuizState } from './initial-root-state';

export const quizReducer: Reducer<QuizState, AnyAction> = (
  state: QuizState = initialQuizState,
  action: AnyAction
) => {
  switch (action.type) {
    case QuizActions.HandleStartQuiz:
      return {
        ...state,
        isOngoing: true,
        isLoading: false,
        answers: [],
        amount: action.payload.amount,
        pool: [...action.payload.pool],
      };
    case QuizActions.HandleEndQuiz:
      return {
        ...state,
        isOngoing: false,
        isLoading: false,
        isResulting: false,
        pool: [],
        current: {
          id: -1,
          data: null,
        },
        answers: [],
      };
    case QuizActions.HandleNewQuestion:
      return {
        ...state,
        current: {
          id: state.current.id + 1,
          data: state.pool[state.current.id + 1],
        },
      };
    case QuizActions.HandleSubmitAnswer:
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    case QuizActions.HandleAddQuestion:
      return {
        ...state,
        pool: [...state.pool, action.payload],
        amount: state.amount + 1,
      };
    case QuizActions.HandleQuizResult:
      return {
        ...state,
        isResulting: true,
        current: {
          id: 0,
          data: null,
        },
      };
    case QuizActions.HandleKanjiLevel:
      return {
        ...state,
        kanjiLevel: action.payload,
      };
    case QuizActions.HandleVocabLevel:
      return {
        ...state,
        vocabLevel: action.payload,
      };
    case QuizActions.HandleLoading:
      return {
        ...state,
        isLoading: true,
      };
    case QuizActions.HandleError:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
