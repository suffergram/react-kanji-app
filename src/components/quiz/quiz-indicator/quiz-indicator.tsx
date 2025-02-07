import { useSelector } from 'react-redux';
import { RootState } from '../../../types/root-state';
import {
  CheckedPoint,
  CurrentPoint,
  IndicatorContainer,
  UnheckedPoint,
} from './style';

type IndicatorPoint = 'checked' | 'current' | 'unchecked';

export function QuizIndicator() {
  const { amount, current } = useSelector(
    (state: RootState) => state.quizState
  );

  const points: Array<IndicatorPoint> = [];

  for (let i = 0; i < amount; i += 1) {
    if (current.id === i) points.push('current');
    else if (current.id > i) points.push('checked');
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
