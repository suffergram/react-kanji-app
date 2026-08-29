import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../types/root-state';
import {
  handleErrorAction,
  handleLoadingAction,
  handleNewQuestionAction,
  handleStartQuizAction,
} from './quiz-action-creators';
import { HOST, OPTIONS_AMOUNT } from '../data/constants/constants';
import { QuizPoolType } from '../types/quiz-pool-type';

const LESSON_QUIZ_AMOUNT = 10;

export const startLessonQuiz =
  (
    kanjiList: string[],
    level: number
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingAction());
      const params = new URLSearchParams({
        kanji: kanjiList.join(','),
        jlpt: level.toString(),
        options: OPTIONS_AMOUNT.toString(),
        limit: LESSON_QUIZ_AMOUNT.toString(),
      });

      const response = await fetch(`${HOST}/vocab?${params}`);

      if (!response.ok) {
        dispatch(handleErrorAction('No vocabulary found for this lesson'));
        return;
      }

      const data = (await response.json()) as QuizPoolType[] | QuizPoolType;
      const pool = Array.isArray(data) ? data : [data];

      dispatch(handleStartQuizAction(pool.length, pool));
      dispatch(handleNewQuestionAction());
    } catch (error: unknown) {
      dispatch(handleErrorAction(error as string));
    }
  };
