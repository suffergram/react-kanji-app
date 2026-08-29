import { useSelector } from 'react-redux';
import type { RootState } from '../../types/root-state';
import { Loader } from '../../components/shared/loader/loader';
import { LearnMenu } from '../../components/learn/learn-menu/learn-menu';
import { LearnContainer } from '../../components/learn/learn-container/learn-container';
import { QuizContainer } from '../../components/quiz/quiz-container/quiz-container';

export function LearnPage() {
  const learnState = useSelector((state: RootState) => state.learnState);
  const quizState = useSelector((state: RootState) => state.quizState);

  let content;

  if (quizState.isOngoing) {
    content = <QuizContainer />;
  } else if (quizState.isLoading) {
    content = <Loader />;
  } else if (learnState.isOngoing) {
    content = <LearnContainer />;
  } else {
    content = <LearnMenu />;
  }

  return (
    <>
      {learnState.isLoading && <Loader />}
      {content}
    </>
  );
}
