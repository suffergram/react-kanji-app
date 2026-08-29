import { AnyAction, Reducer } from 'redux';
import { LearnState } from '../types/root-state';
import { LearnActions } from './constants';
import { initialLearnState } from './initial-root-state';

export const learnReducer: Reducer<LearnState, AnyAction> = (
  state: LearnState = initialLearnState,
  action: AnyAction
) => {
  switch (action.type) {
    case LearnActions.HandleStartLearn:
      return {
        ...state,
        isOngoing: true,
        isLoading: false,
        title: action.payload,
      };
    case LearnActions.HandleEndLearn:
      return {
        ...state,
        isOngoing: false,
        isLoading: false,
        title: null,
      };
    case LearnActions.HandleGetLearn:
      return {
        ...state,
        isLoading: false,
        pool: [...action.payload],
        error: undefined,
      };
    case LearnActions.HandleGetLessons:
      return {
        ...state,
        isLoading: false,
        lessons: action.payload,
        error: undefined,
      };
    case LearnActions.HandleError:
      return {
        ...state,
        pool: [],
        isLoading: false,
        error: action.payload,
      };
    case LearnActions.HandleLoading:
      return {
        ...state,
        pool: [],
        isLoading: true,
        error: undefined,
      };
    default:
      return state;
  }
};
