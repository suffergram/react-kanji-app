import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../types/root-state';
import { LearnServices } from '../services/services';
import {
  handleErrorLearnAction,
  handleGetLessonsAction,
  handleLoadingLearnAction,
} from './learn-action-creators';
import { LessonsDTO } from '../types/lessons-dto';

export const fetchLessons =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingLearnAction());
      const lessons: LessonsDTO = await LearnServices.getLessons();
      dispatch(handleGetLessonsAction(lessons));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(handleErrorLearnAction(error));
      }
    }
  };