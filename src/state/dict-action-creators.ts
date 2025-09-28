import { SearchDTO } from '../types/search-dto';
import { DictActions } from './constants';

export const handleLoadingDictAction = () => ({
  type: DictActions.HandleLoadingDict,
});

export const handleGetDictAction = (data: SearchDTO) => ({
  type: DictActions.HandleGetDict,
  payload: data,
});

export const handleInitDictAction = () => ({
  type: DictActions.HandleInitDict,
});

export const handleSetSearchAction = (data: string) => ({
  type: DictActions.HandleSetSearch,
  payload: data,
});

export const handleErrorDictAction = (data: string) => ({
  type: DictActions.HandleError,
  payload: data,
});
