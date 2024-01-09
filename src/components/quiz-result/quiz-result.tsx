import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';
import { handleEndQuizAction } from '../../state/action-creators';
import { Button } from '../button/button';
import { kanji } from '../../data/kanji/kanji';
import { Heading, Container } from './style';
import { QUIZ_AMOUNT } from '../../data/constants/constants';
import { SectionItemType } from '../../types/section-item-type';
import { QuizResultSection } from '../quiz-result-section/quiz-result-section';

export function QuizResult() {
  const { answers } = useSelector((state: RootState) => state.quizState);

  const dispatch = useDispatch();

  const handleEndQuiz = () => {
    dispatch(handleEndQuizAction());
  };

  const result = answers.slice(0, QUIZ_AMOUNT);

  const kanjiReviewed: SectionItemType[] = Array.from(
    new Set(result.map((item) => item.card.kanji.split('')).flat())
  )
    .map((item) => kanji.filter((kan) => item === kan.kanji)[0])
    .map((item) => ({
      primary: item.kanji,
      kana:
        item.kun !== ''
          ? item.kun.split(';').slice(0, 4).join(';')
          : item.on.split(';').slice(0, 4).join(';'),
      meaning: item.meaning.split(';').slice(0, 3).join(';'),
    }));

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
          title={mistakes.length === 0 ? 'Perfect run' : 'Mistakes made in'}
          array={mistakes.length === 0 ? 'No mistakes' : mistakes}
        />
      </Container>
      <Button value="Return" variant="secondary" onClick={handleEndQuiz} />
    </>
  );
}
