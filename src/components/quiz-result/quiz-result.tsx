import { useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';

export function QuizResult() {
  const { answers } = useSelector((state: RootState) => state.quizState);

  return (
    <>
      {answers.map((item) => (
        <p key={item.card.kanji}>
          {item.card.kanji} - {item.isRight ? 'right' : 'wrong'}
        </p>
      ))}
    </>
  );
}
