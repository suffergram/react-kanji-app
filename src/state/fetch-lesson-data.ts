import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../types/root-state';
import { LearnServices } from '../services/services';
import {
  handleErrorLearnAction,
  handleGetLearnAction,
  handleLoadingLearnAction,
  handleStartLearnAction,
} from './learn-action-creators';

export const fetchLessonData =
  (query: string[], lessonTitle: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingLearnAction());
      if (query.length > 0) {
        const data = await LearnServices.getData(query.join(','));
        dispatch(handleGetLearnAction(data));
        dispatch(handleStartLearnAction(lessonTitle));
      } else {
        dispatch(handleErrorLearnAction(new Error('Lesson contains no kanji')));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(handleErrorLearnAction(error));
      }
    }
  };
