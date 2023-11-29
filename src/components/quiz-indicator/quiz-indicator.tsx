import { useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';
import { CheckedPoint, TrackerContainer, UnheckedPoint } from './style';

export function QuizIndicator() {
  const { amount, pool } = useSelector((state: RootState) => state.quizState);

  const points: boolean[] = [];

  for (let i = 0; i < pool.length; i += 1) {
    points.push(pool.length - amount > i);
  }

  return (
    <TrackerContainer amount={points.length}>
      {points.map((point) => (point ? <CheckedPoint /> : <UnheckedPoint />))}
    </TrackerContainer>
  );
}
