import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../types/root-state';
import {
  handleErrorAction,
  handleNewQuestionAction,
  handleQuizResultAction,
  handleSubmitAnswerAction,
} from './action-creators';
import { AnswerType } from '../types/answer-type';

export const submitAnswer =
  (
    answer: AnswerType,
    isLast: boolean
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleSubmitAnswerAction(answer));
      if (!isLast) dispatch(handleNewQuestionAction());
      else dispatch(handleQuizResultAction());
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };
