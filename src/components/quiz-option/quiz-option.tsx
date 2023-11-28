import { MouseEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Button } from '../button/button';
import { RootState } from '../../types/root-state';
import { AnswerType } from '../../types/answer-type';
import { submitAnswer } from '../../state/submit-answer';
import { OptionContainer, OptionIndex } from './style';

type QuizOptionProps = {
  value: string;
  id: number;
  optionIndex: number;
};

interface KeyboardEvent {
  key: string;
}

export function QuizOption({ value, id, optionIndex }: QuizOptionProps) {
  const { current, amount } = useSelector(
    (state: RootState) => state.quizState
  );

  const optionRef = useRef<HTMLButtonElement>(null);

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleDispatchAnswer = (target: HTMLButtonElement) => {
    if (current) {
      const answer: AnswerType = {
        card: current.question,
        answer: [current.question, ...current.options].filter(
          (option) => option.id === Number(target.id)
        )[0],
        isRight: current.question.id === Number(target.id),
      };

      // target.disabled = true;
      // target.onkeydown = null;
      // document.removeEventListener('keydown', handleOptionKeyDown);
      setTimeout(() => {
        dispatch(submitAnswer(answer, amount));
      }, 1000);
    }
  };

  const handleOptionClick = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;

    handleDispatchAnswer(target);
  };

  const handleOptionKeyDown = (event: KeyboardEvent) => {
    const target = optionRef.current as HTMLButtonElement;
    const key = Number(event.key);

    if (key === optionIndex) {
      handleDispatchAnswer(target);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleOptionKeyDown);

    return () => {
      document.removeEventListener('keydown', handleOptionKeyDown);
    };
  }, []);

  return (
    <OptionContainer>
      <Button
        id={id.toString()}
        ref={optionRef}
        value={value}
        variant="secondary"
        onClick={handleOptionClick}
        onKeyDown={handleOptionKeyDown}
      />
      <OptionIndex>{optionIndex}</OptionIndex>
    </OptionContainer>
  );
}
