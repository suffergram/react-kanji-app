import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Card } from '../card/card';
import { getRandomCard } from '../../services/get-random-card';
import { RootState } from '../../types/root-state';
import { handleEndQuizAction } from '../../state/action-creators';
import { VocabType } from '../../types/vocab-type';
import { submitAnswer } from '../../state/submit-answer';
import { AnswerType } from '../../types/answer-type';

export function QuizContainer() {
  const {
    current, kanjiLevel, vocabLevel, amount,
  } = useSelector(
    (state: RootState) => state.quizState,
  );

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleNewQuesiton = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;

    const answer: AnswerType = {
      card: current as VocabType,
      answer: target.value,
      isRight: current?.kana === target.value,
    };

    dispatch(submitAnswer(answer, kanjiLevel, vocabLevel, amount));
  };

  const handleEndQuiz = () => {
    dispatch(handleEndQuizAction());
  };

  const options: VocabType[] = [current as VocabType];
  for (let i = 0; i < 3; i += 1) {
    options.push(getRandomCard(kanjiLevel, vocabLevel));
  }

  return (
    <>
      <Card cardData={current} />
      <div>
        {options
          .sort((a, b) => a.id - b.id)
          .map((option) => (
            <button
              key={option.id}
              type="button"
              value={option.kana}
              onClick={handleNewQuesiton}
            >
              {option.kana}
            </button>
          ))}
      </div>
      <button type="button" value="TEST" onClick={handleNewQuesiton}>
        Get new card
      </button>
      <button type="button" onClick={handleEndQuiz}>
        End the quiz
      </button>
    </>
  );
}
