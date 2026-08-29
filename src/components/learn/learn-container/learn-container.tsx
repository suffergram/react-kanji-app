import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import type { AnyAction } from 'redux';
import type { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../../types/root-state';
import { Button } from '../../shared/button/button';
import { CloseButton } from '../../shared/close-button/close-button';
import { handleEndLearnAction } from '../../../state/learn-action-creators';
import { startLessonQuiz } from '../../../state/start-lesson-quiz';
import {
  ActionsRow,
  CloseArea,
  Container,
  Content,
  Heading,
  KanjiDisplay,
  LowerSpacer,
  MeaningWord,
  MeaningWrap,
  Pool,
  PoolOption,
  Reading,
  ReadingLabel,
  ReadingsRow,
  ReadingValue,
  UpperSpacer,
} from './style';

export function LearnContainer() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const { pool, title } = useSelector((state: RootState) => state.learnState);

  const [currentIndx, setCurrentIndx] = useState(pool[0].id);
  const current = pool.filter((item) => item.id === currentIndx)[0];

  const handleCloseButton = () => {
    dispatch(handleEndLearnAction());
  };

  const handleStartQuiz = () => {
    const level = pool[0]?.jlpt ?? 5;
    dispatch(startLessonQuiz(pool.map((item) => item.kanji), level));
  };

  const titleData = title?.split(': ');

  if (!current) return null;

  return (
    <Container>
      <Heading>
        {title && <h1>{titleData?.at(0)}</h1>}
        {title && (
          <h2
            style={{
              opacity: 0.65,
            }}
          >
            {titleData?.at(-1)}
          </h2>
        )}
      </Heading>

      <Pool>
        {pool.map((item, index) => (
          <PoolOption
            onClick={() => setCurrentIndx(item.id)}
            key={item.id}
            $isCurrent={item.id === currentIndx}
            $orderIndex={index}
          >
            {item.kanji}
          </PoolOption>
        ))}
      </Pool>

      <Content>
        <KanjiDisplay>{current.kanji}</KanjiDisplay>

        <MeaningWrap>
          {current.meaning
            .split(';')
            .map((item) => <MeaningWord key={item}>{item.trim()}</MeaningWord>)}
        </MeaningWrap>

        <ReadingsRow>
          {current.kun && (
            <Reading>
              <ReadingLabel>Kunyomi</ReadingLabel>
              <ReadingValue>{current.kun}</ReadingValue>
            </Reading>
          )}
          {current.on && (
            <Reading>
              <ReadingLabel>Onyomi</ReadingLabel>
              <ReadingValue>{current.on}</ReadingValue>
            </Reading>
          )}
        </ReadingsRow>

        <UpperSpacer />

        <ActionsRow>
          <Button
            variant="secondary"
            value="start quiz"
            onClick={handleStartQuiz}
          />
        </ActionsRow>

        <LowerSpacer />

        <CloseArea>
          <CloseButton onClick={handleCloseButton} />
        </CloseArea>
      </Content>
    </Container>
  );
}
