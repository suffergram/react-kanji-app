import { AnyAction, Reducer } from 'redux';
import { DictState } from '../types/root-state';
import { DictActions } from './constants';
import { initialDictState } from './initial-root-state';

export const dictReducer: Reducer<DictState, AnyAction> = (
  state: DictState = initialDictState,
  action: AnyAction
) => {
  switch (action.type) {
    case DictActions.HandleLoadingDict:
      return {
        ...state,
        isLoading: true,
      };
    case DictActions.HandleGetDict:
      return {
        ...state,
        isLoading: false,
        kanji: action.payload.kanji ? [...action.payload.kanji] : [],
        vocab: action.payload.vocab ? [...action.payload.vocab] : [],
        error: null,
      };
    case DictActions.HandleInitDict:
      return {
        ...state,
        isLoading: false,
        kanji: [],
        vocab: [],
        search: '',
        error: null,
      };
    case DictActions.HandleSetSearch:
      return {
        ...state,
        search: action.payload,
        error: null,
      };
    case DictActions.HandleError:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
