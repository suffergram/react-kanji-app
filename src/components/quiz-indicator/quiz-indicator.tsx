import { useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';
import {
  CheckedPoint,
  CurrentPoint,
  IndicatorContainer,
  UnheckedPoint,
} from './style';

type IndicatorPoint = 'checked' | 'current' | 'unchecked';

export function QuizIndicator() {
  const { amount, pool } = useSelector((state: RootState) => state.quizState);

  const points: Array<IndicatorPoint> = [];

  for (let i = 0; i < pool.length; i += 1) {
    if (pool.length - (amount + 1) === i) points.push('current');
    else if (pool.length - (amount + 1) > i) points.push('checked');
    else points.push('unchecked');
  }

  return (
    <IndicatorContainer $amount={points.length}>
      {points.map((point, index) => {
        switch (point) {
          case 'current':
            return <CurrentPoint key={index} />;
          case 'checked':
            return <CheckedPoint key={index} />;
          default:
            return <UnheckedPoint key={index} />;
        }
      })}
    </IndicatorContainer>
  );
}
