import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../types/root-state';
import {
  handleLoadingDictAction,
  handleGetDictAction,
  handleInitDictAction,
  handleErrorDictAction,
} from './dict-action-creators';
import { DictServices, SearchRequestParams } from '../services/services';
import { SearchDTO } from '../types/search-dto';

export const fetchSearchData =
  (
    query: string | null,
    page: number,
    limits: Pick<SearchRequestParams, 'kanji' | 'vocab'>
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingDictAction());
      if (query) {
        const data: SearchDTO = await DictServices.getData(query, {
          page,
          ...limits,
        });
        dispatch(handleGetDictAction(data));
      } else {
        dispatch(handleInitDictAction());
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(handleErrorDictAction(error));
      }
    }
  };
