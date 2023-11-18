import { FormEvent } from 'react';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../types/root-state';
import {
  handleKanjiLevelAction,
  handleVocabLevelAction,
} from '../../state/action-creators';
import {
  MenuLabel, MenuTitle, StyledForm, StyledSlider,
} from './style';
import { startQuiz } from '../../state/start-quiz';

export function QuizMenu() {
  const { kanjiLevel, vocabLevel } = useSelector(
    (state: RootState) => state.quizState,
  );

  const levels: Record<number, number> = {
    1: 5,
    2: 4,
    3: 3,
    4: 2,
    5: 1,
  };

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleKanjiLevelChange = (
    event: Event,
    newValue: number | number[],
  ) => {
    dispatch(handleKanjiLevelAction(levels[newValue as number]));
  };

  const handleVocabLevelChange = (
    event: Event,
    newValue: number | number[],
  ) => {
    dispatch(handleVocabLevelAction(levels[newValue as number]));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(startQuiz(kanjiLevel, vocabLevel, 5));
  };

  return (
    <StyledForm>
      <MenuTitle>Quiz preferences</MenuTitle>
      <MenuLabel>
        Kanji N
        {kanjiLevel}
        <StyledSlider
          min={1}
          max={5}
          step={1}
          value={levels[kanjiLevel]}
          marks
          onChange={handleKanjiLevelChange}
        />
      </MenuLabel>
      <MenuLabel>
        Vocab N
        {vocabLevel}
        <StyledSlider
          min={1}
          max={5}
          step={1}
          value={levels[vocabLevel]}
          marks
          onChange={handleVocabLevelChange}
        />
      </MenuLabel>
      <button type="submit" onClick={handleSubmit}>
        Start
      </button>
    </StyledForm>
  );
}
