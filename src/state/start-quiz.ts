import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../types/root-state';
import {
  handleErrorAction,
  handleLoadingAction,
  handleNewQuestionAction,
  handleStartQuizAction,
} from './action-creators';
import { getQuizPool } from '../services/get-quiz-pool';

export const startQuiz =
  (
    kanjiLevel: number,
    vocabLevel: number,
    amount: number
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingAction());
      dispatch(
        handleStartQuizAction(
          amount,
          getQuizPool(amount, kanjiLevel, vocabLevel)
        )
      );
      dispatch(handleNewQuestionAction());
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };
