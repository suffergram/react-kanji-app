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
        kanji: action.payload.kanji ? [...action.payload.kanji.items] : [],
        vocab: action.payload.vocab ? [...action.payload.vocab.items] : [],
        kanjiTotal: action.payload.kanji?.total ?? 0,
        vocabTotal: action.payload.vocab?.total ?? 0,
        error: null,
      };
    case DictActions.HandleInitDict:
      return {
        ...state,
        isLoading: false,
        kanji: [],
        vocab: [],
        kanjiTotal: 0,
        vocabTotal: 0,
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
