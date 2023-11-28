import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Card } from '../card/card';
import { RootState } from '../../types/root-state';
import { handleEndQuizAction } from '../../state/action-creators';
import { QuizResult } from '../quiz-result/quiz-result';
import { CloseButton } from './style';

export function QuizContainer() {
  const { isResulting } = useSelector((state: RootState) => state.quizState);

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleEndQuiz = () => {
    dispatch(handleEndQuizAction());
  };

  return (
    <>
      {isResulting ? <QuizResult /> : <Card />}
      <CloseButton type="button" onClick={handleEndQuiz}>
        ✕
      </CloseButton>
    </>
  );
}
