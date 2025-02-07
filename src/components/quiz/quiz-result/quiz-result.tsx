import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types/root-state';
import { handleEndQuizAction } from '../../../state/quiz-action-creators';
import { Button } from '../../shared/button/button';
import { Heading, Container } from './style';
import { QUIZ_AMOUNT } from '../../../data/constants/constants';
import { SectionItemType } from '../../../types/section-item-type';
import { QuizResultSection } from '../quiz-result-section/quiz-result-section';

export function QuizResult() {
  const { answers, pool } = useSelector((state: RootState) => state.quizState);

  const dispatch = useDispatch();

  const handleEndQuiz = () => {
    dispatch(handleEndQuizAction());
  };

  const result = answers.slice(0, QUIZ_AMOUNT);

  const kanjiReviewed: SectionItemType[] = Array.from(
    new Set(
      pool
        .map((item) => item.kanji)
        .flat()
        .map((item) => JSON.stringify(item))
    )
  ).map((item) => {
    const current = JSON.parse(item);
    return {
      primary: current.kanji,
      kana:
        current.kun !== ''
          ? current.kun.split(';').slice(0, 4).join(';')
          : current.on.split(';').slice(0, 4).join(';'),
      meaning: current.meaning.split(';').slice(0, 3).join(';'),
    };
  });

  const vocabReviewed: SectionItemType[] = result.map((item) => ({
    primary: item.card.kanji,
    kana: item.card.kana,
    meaning: item.card.meaning.split(';').slice(0, 3).join(';'),
  }));

  const mistakes: SectionItemType[] = result
    .filter((item) => !item.isRight)
    .map((item) => ({
      primary: item.card.kanji,
      kana: item.card.kana,
      meaning: item.card.meaning.split(';').slice(0, 3).join(';'),
    }));

  return (
    <>
      <Heading>You completed the session!</Heading>
      <Container>
        <QuizResultSection
          area="kanji"
          title="Kanji reviewed"
          array={kanjiReviewed}
        />
        <QuizResultSection
          area="vocab"
          title="Vocab reviewed"
          array={vocabReviewed}
        />
        <QuizResultSection
          area="mistake"
          title={
            mistakes.length === 0 ? 'Perfect run' : 'Mistakes were made in'
          }
          array={mistakes.length === 0 ? 'No mistakes' : mistakes}
        />
      </Container>
      <Button value="Return" variant="secondary" onClick={handleEndQuiz} />
    </>
  );
}
