import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../types/root-state';
import {
  handleErrorAction,
  handleLoadingAction,
  handleNewQuestionAction,
  handleStartQuizAction,
} from './action-creators';
import { getRandomCard } from '../services/get-random-card';

export const startQuiz =
  (
    kanjiLevel: number,
    vocabLevel: number,
    amount: number
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingAction());
      dispatch(handleStartQuizAction(amount));
      dispatch(handleNewQuestionAction(getRandomCard(kanjiLevel, vocabLevel)));
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };
