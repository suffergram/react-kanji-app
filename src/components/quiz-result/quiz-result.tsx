import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';
import { handleEndQuizAction } from '../../state/action-creators';
import { Button } from '../button/button';

export function QuizResult() {
  const { answers } = useSelector((state: RootState) => state.quizState);

  const dispatch = useDispatch();

  const handleEndQuiz = () => {
    dispatch(handleEndQuizAction());
  };

  return (
    <>
      {answers.map((item) => (
        <p key={item.card.kanji}>
          {item.card.kanji} - {item.isRight ? '◯' : '✕'}
        </p>
      ))}
      <Button value="Return" variant="secondary" onClick={handleEndQuiz} />
    </>
  );
}
