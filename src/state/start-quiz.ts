import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../types/root-state';
import {
  handleErrorAction,
  handleLoadingAction,
  handleNewQuestionAction,
  handleStartQuizAction,
} from './quiz-action-creators';
import { HOST, OPTIONS_AMOUNT, QUIZ_AMOUNT } from '../data/constants/constants';

export const startQuiz =
  (
    kanjiLevel: number,
    vocabLevel: number
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingAction());

      const params = new URLSearchParams({
        random: 'true',
        limit: QUIZ_AMOUNT.toString(),
        jlpt: vocabLevel.toString(),
        kanjiJlpt: kanjiLevel.toString(),
        options: OPTIONS_AMOUNT.toString(),
      });

      const url = `${HOST}/vocab?${params}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch(handleStartQuizAction(QUIZ_AMOUNT, data));
        })
        .then(() => {
          dispatch(handleNewQuestionAction());
        })
        .catch((error) => {
          dispatch(handleErrorAction(error as string));
        });
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };
