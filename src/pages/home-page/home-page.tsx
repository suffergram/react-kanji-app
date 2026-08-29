import { useSelector } from 'react-redux';
import { QuizContainer } from '../../components/quiz/quiz-container/quiz-container';
import { QuizMenu } from '../../components/quiz/quiz-menu/quiz-menu';
import { RootState } from '../../types/root-state';

export function HomePage() {
  const { isOngoing } = useSelector((state: RootState) => state.quizState);

  return isOngoing ? <QuizContainer /> : <QuizMenu />;
}
