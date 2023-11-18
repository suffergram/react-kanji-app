import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../types/root-state';
import {
  handleEndQuizAction,
  handleErrorAction,
  handleNewQuestionAction,
  handleSubmitAnswerAction,
} from './action-creators';
import { getRandomCard } from '../services/get-random-card';
import { AnswerType } from '../types/answer-type';

export const submitAnswer =
  (
    answer: AnswerType,
    kanjiLevel: number,
    vocabLevel: number,
    amount: number
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleSubmitAnswerAction(answer));
      dispatch(handleNewQuestionAction(getRandomCard(kanjiLevel, vocabLevel)));
      if (amount <= 0) dispatch(handleEndQuizAction());
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };
