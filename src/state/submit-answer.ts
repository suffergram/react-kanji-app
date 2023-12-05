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
    amount: number
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleSubmitAnswerAction(answer));
      if (amount > 0) dispatch(handleNewQuestionAction());
      else dispatch(handleQuizResultAction());
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };
