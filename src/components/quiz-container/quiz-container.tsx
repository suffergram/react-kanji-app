import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Card } from '../card/card';
import { RootState } from '../../types/root-state';
import { handleEndQuizAction } from '../../state/action-creators';
import { submitAnswer } from '../../state/submit-answer';
import { AnswerType } from '../../types/answer-type';
import { QuizResult } from '../quiz-result/quiz-result';
import { CardOptions, CardOptionsContainer, CloseButton } from './style';
import { Button } from '../button/button';
import { QuizIndicator } from '../quiz-indicator/quiz-indicator';

export function QuizContainer() {
  const { current, amount, isResulting } = useSelector(
    (state: RootState) => state.quizState
  );

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleSubmitOption = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;

    if (current) {
      const answer: AnswerType = {
        card: current.question,
        answer: [current.question, ...current.options].filter(
          (option) => option.id === Number(target.id)
        )[0],
        isRight: current.question.id === Number(target.id),
      };

      dispatch(submitAnswer(answer, amount));
    }
  };

  const handleEndQuiz = () => {
    dispatch(handleEndQuizAction());
  };

  const currentQuestion = current && [current.question, ...current.options];

  return (
    <>
      {isResulting ? (
        <QuizResult />
      ) : (
        <>
          <QuizIndicator />
          <Card
            cardData={current?.question}
            kanjiLevels={current?.kanjiLevels}
          />
          <CardOptionsContainer>
            <CardOptions>
              {currentQuestion &&
                currentQuestion
                  .sort((a, b) => a.id - b.id)
                  .map((option) => {
                    const optionValues = option.kana.split('; ');
                    const value =
                      optionValues.length > 1
                        ? optionValues[Math.round(Math.random())]
                        : optionValues[0];
                    return (
                      <Button
                        key={option.id}
                        id={option.id.toString()}
                        type="button"
                        value={value}
                        variant="secondary"
                        onClick={handleSubmitOption}
                      >
                        {value}
                      </Button>
                    );
                  })}
            </CardOptions>
          </CardOptionsContainer>
        </>
      )}
      <CloseButton type="button" onClick={handleEndQuiz}>
        ✕
      </CloseButton>
    </>
  );
}
