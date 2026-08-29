import { LearnActions } from './constants';
import { KanjiType } from '../types/kanji-type';
import { LessonsDTO } from '../types/lessons-dto';

export const handleLoadingLearnAction = () => ({
  type: LearnActions.HandleLoading,
});

export const handleGetLearnAction = (data: KanjiType[]) => ({
  type: LearnActions.HandleGetLearn,
  payload: data,
});

export const handleGetLessonsAction = (data: LessonsDTO) => ({
  type: LearnActions.HandleGetLessons,
  payload: data,
});

export const handleStartLearnAction = (data: string) => ({
  type: LearnActions.HandleStartLearn,
  payload: data
});

export const handleEndLearnAction = () => ({
  type: LearnActions.HandleEndLearn,
});

export const handleErrorLearnAction = (data: Error) => ({
  type: LearnActions.HandleError,
  payload: data,
});
