import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { useEffect } from 'react';
import { fetchLessonData } from '../../../state/fetch-lesson-data';
import { fetchLessons } from '../../../state/fetch-lessons';
import { RootState } from '../../../types/root-state';
import { LessonItem } from '../../../types/lesson-item';
import { LessonsDTO } from '../../../types/lessons-dto';
import {
  KanjiPreview,
  LessonCard,
  LessonGrid,
  LessonNumber,
  LessonTitle,
  LevelSection,
  Levels,
  LevelTitle,
} from './style';

const levels: Array<{ key: keyof LessonsDTO; name: string }> = [
  { key: 'n5', name: 'N5' },
  { key: 'n4', name: 'N4' },
  { key: 'n3', name: 'N3' },
  { key: 'n2', name: 'N2' },
  { key: 'n1', name: 'N1' },
];

export function LearnMenu() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const lessons = useSelector((state: RootState) => state.learnState.lessons);

  useEffect(() => {
    if (!lessons) {
      dispatch(fetchLessons());
    }
  }, [dispatch, lessons]);

  const lessonStartHandler =
    (item: LessonItem) => () => {
      dispatch(fetchLessonData(item.data, `Lesson ${item.id + 1}: ${item.description}`));
    };

  return (
    <Levels>
      {lessons &&
        levels.map((level) => {
          const items = lessons[level.key];

          if (!items || items.length === 0) return null;

          return (
            <LevelSection key={level.key}>
              <LevelTitle>{level.name}</LevelTitle>
              <LessonGrid>
                {items.map((item) => (
                  <LessonCard key={item.id} onClick={lessonStartHandler(item)}>
                    <LessonNumber>Lesson {item.id + 1}</LessonNumber>
                    <LessonTitle>{item.description}</LessonTitle>
                    <KanjiPreview>{item.data.join(' ')}</KanjiPreview>
                  </LessonCard>
                ))}
              </LessonGrid>
            </LevelSection>
          );
        })}
    </Levels>
  );
}
