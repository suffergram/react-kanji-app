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
import { CARD_TIMER } from '../data/constants/constants';

export const submitAnswer =
  (
    answer: AnswerType,
    amount: number
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleSubmitAnswerAction(answer));
      setTimeout(() => {
        if (amount > 0) dispatch(handleNewQuestionAction());
        else dispatch(handleQuizResultAction());
      }, CARD_TIMER);
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };
