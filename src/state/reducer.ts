import { AnyAction, Reducer } from 'redux';
import { RootState } from '../types/root-state';
import { QuizActions } from './constants';

const initialState: RootState = {
  quizState: {
    isLoading: false,
    isOngoing: false,
    isResulting: false,
    answers: [],
    pool: [],
    current: {
      id: -1,
      data: null,
    },
    amount: 5,
    kanjiLevel: 5,
    vocabLevel: 5,
    error: undefined,
  },
  vocabState: {
    error: undefined,
  },
  kanjiState: {
    error: undefined,
  },
};

export const reducer: Reducer<RootState, AnyAction> = (
  state: RootState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case QuizActions.HandleStartQuiz:
      return {
        ...state,
        quizState: {
          ...state.quizState,
          isOngoing: true,
          isLoading: false,
          answers: [],
          amount: action.payload.amount,
          pool: [...action.payload.pool],
        },
      };
    case QuizActions.HandleEndQuiz:
      return {
        ...state,
        quizState: {
          ...state.quizState,
          isOngoing: false,
          isLoading: false,
          isResulting: false,
          pool: [],
          current: {
            id: -1,
            data: null,
          },
          answers: [],
        },
      };
    case QuizActions.HandleNewQuestion:
      return {
        ...state,
        quizState: {
          ...state.quizState,
          current: {
            id: state.quizState.current.id + 1,
            data: state.quizState.pool[state.quizState.current.id + 1],
          },
        },
      };
    case QuizActions.HandleSubmitAnswer:
      return {
        ...state,
        quizState: {
          ...state.quizState,
          answers: [...state.quizState.answers, action.payload],
        },
      };
    case QuizActions.HandleAddQuestion:
      return {
        ...state,
        quizState: {
          ...state.quizState,
          pool: [...state.quizState.pool, action.payload],
          amount: state.quizState.amount + 1,
        },
      };
    case QuizActions.HandleQuizResult:
      return {
        ...state,
        quizState: {
          ...state.quizState,
          isResulting: true,
          current: {
            id: 0,
            data: null,
          },
        },
      };
    case QuizActions.HandleKanjiLevel:
      return {
        ...state,
        quizState: {
          ...state.quizState,
          kanjiLevel: action.payload,
        },
      };
    case QuizActions.HandleVocabLevel:
      return {
        ...state,
        quizState: {
          ...state.quizState,
          vocabLevel: action.payload,
        },
      };
    case QuizActions.HandleLoading:
      return {
        ...state,
        quizState: {
          ...state.quizState,
          isLoading: true,
        },
      };
    case QuizActions.HandleError:
      return {
        ...state,
        quizState: {
          ...state.quizState,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
