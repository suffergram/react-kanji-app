import { useSelector } from 'react-redux';
import { QuizContainer } from '../../components/quiz-container/quiz-container';
import { QuizMenu } from '../../components/quiz-menu/quiz-menu';
import { RootState } from '../../types/root-state';

export function HomePage() {
  const { isLoading, isOngoing } = useSelector(
    (state: RootState) => state.quizState
  );

  return !isLoading && isOngoing ? <QuizContainer /> : <QuizMenu />;
}
