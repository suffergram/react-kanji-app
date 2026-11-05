import { FormEvent, useEffect, useRef, useState } from 'react';
import { VocabLessonDTO } from '../../types/vocab-lesson-dto';
import { LearnServices } from '../../services/services';
import { ApiError } from '../../util/api-error';
import { Loader } from '../../components/shared/loader/loader';
import { TextInput } from '../../components/shared/text-input/text-input';
import * as S from './style';

type PracticePhase = 'learn' | 'practice' | 'complete' | 'retry';

type PracticeResult = {
  vocabId: number;
  answer: string;
  isCorrect: boolean;
};

export function PilotLessonPage() {
  const [lesson, setLesson] = useState<VocabLessonDTO | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<PracticePhase>('learn');
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [results, setResults] = useState<PracticeResult[]>([]);
  const [retryIds, setRetryIds] = useState<number[]>([]);
  const [hasRetried, setHasRetried] = useState(false);
  const [retryResults, setRetryResults] = useState<PracticeResult[]>([]);

  const answerInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    const getLesson = async () => {
      try {
        const lesson = await LearnServices.getPilotLesson();
        if (!cancelled) setLesson(lesson);
      } catch (err) {
        if (!cancelled)
          setError(
            err instanceof ApiError
              ? err.message
              : 'Could not load the lesson. Please try again.'
          );
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    getLesson();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if ((phase === 'practice' || phase === 'retry') && isCorrect === null) {
      answerInputRef.current?.focus();
    }
  }, [phase, practiceIndex, isCorrect]);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <S.Page>
        <S.Feedback role="alert" $correct={false}>
          {error}
        </S.Feedback>
        <S.BackLink to="/learn">Back to lessons</S.BackLink>
      </S.Page>
    );
  if (!lesson || lesson.items.length === 0) {
    return (
      <S.Page>
        <S.Card>
          <S.Subtitle>This lesson has no words yet.</S.Subtitle>
        </S.Card>
        <S.BackLink to="/learn">Back to lessons</S.BackLink>
      </S.Page>
    );
  }

  const currentWord = lesson.items[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === lesson.items.length - 1;

  const isRetry = phase === 'retry';

  const practiceWord = isRetry
    ? lesson.items.find((item) => item.vocabId === retryIds[practiceIndex])
    : lesson.items[practiceIndex];

  const practiceLength = isRetry ? retryIds.length : lesson.items.length;
  const isLastPractice = practiceIndex === practiceLength - 1;

  const mistakes = results.filter((result) => !result.isCorrect);

  const handleClickBack = () =>
    setCurrentIndex((index) => Math.max(0, index - 1));
  const handleClickNext = () =>
    setCurrentIndex((index) => Math.min(lesson.items.length - 1, index + 1));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!answer.trim() || isCorrect !== null) return;
    if (!practiceWord) return;

    const correct = answer.trim() === practiceWord.kana.trim();
    setIsCorrect(correct);

    if (phase === 'practice') {
      setResults((previous) => [
        ...previous,
        {
          vocabId: practiceWord.vocabId,
          answer: answer.trim(),
          isCorrect: correct,
        },
      ]);
    }

    if (phase === 'retry') {
      setRetryResults((previous) => [
        ...previous,
        {
          vocabId: practiceWord.vocabId,
          answer: answer.trim(),
          isCorrect: correct,
        },
      ]);
    }
  };

  const handleContinueClick = () => {
    if (isCorrect === null) return;

    if (isLastPractice) {
      setPhase('complete');
    } else {
      setPracticeIndex((value) => value + 1);
      setAnswer('');
      setIsCorrect(null);
    }
  };

  const handleRetryClick = () => {
    setRetryIds(mistakes.map((mistake) => mistake.vocabId));
    setPracticeIndex(0);
    setAnswer('');
    setIsCorrect(null);
    setPhase('retry');
    setHasRetried(true);
  };

  if (phase === 'practice' || phase === 'retry') {
    if (!practiceWord) return <div>Practice word not found</div>;
    return (
      <S.Page>
        <S.Header>
          <S.Eyebrow>{lesson.title}</S.Eyebrow>
          <h1>{isRetry ? 'Practise mistakes' : 'Reading practice'}</h1>
          <S.Subtitle>
            Take your time. Recall the reading before you check.
          </S.Subtitle>
        </S.Header>
        <S.ProgressRow>
          <S.Progress
            aria-label="Practice progress"
            max={practiceLength}
            value={practiceIndex + 1}
          />
          <span>
            Word {practiceIndex + 1} / {practiceLength}
          </span>
        </S.ProgressRow>
        <S.Card>
          <S.WordBlock>
            <S.Eyebrow>How do you read this word?</S.Eyebrow>
            <S.Word lang="ja">{practiceWord.kanji}</S.Word>
          </S.WordBlock>
          <S.AnswerForm onSubmit={handleSubmit}>
            <label htmlFor="practice-reading">Reading in hiragana</label>
            <TextInput
              id="practice-reading"
              fullWidth
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              disabled={isCorrect !== null}
              placeholder="Type the reading in kana"
              inputProps={{
                'aria-label': 'Reading in kana',
                onKeyDown: (event) => {
                  if (event.key === 'Enter' && event.nativeEvent.isComposing) {
                    event.preventDefault();
                  }
                },
              }}
              inputRef={answerInputRef}
            />

            <S.ActionButton
              value="check"
              variant="primary"
              disabled={!answer.trim() || isCorrect !== null}
              type="submit"
            />
          </S.AnswerForm>
          {isCorrect && (
            <S.Feedback role="status" $correct>
              Correct! You remembered the reading.
            </S.Feedback>
          )}
          {isCorrect === false && (
            <S.Feedback role="status" $correct={false}>
              Correct reading: <span lang="ja">{practiceWord.kana.trim()}</span>
            </S.Feedback>
          )}
          {isCorrect !== null && (
            <S.Actions>
              <S.Subtitle>Ready for the next word?</S.Subtitle>
              <S.ActionButton
                value="continue"
                variant="primary"
                type="button"
                onClick={handleContinueClick}
              />
            </S.Actions>
          )}
        </S.Card>
      </S.Page>
    );
  }

  if (phase === 'complete') {
    return (
      <S.Page>
        <S.Header>
          <S.Eyebrow>{lesson.title}</S.Eyebrow>
          <h1>Practice complete</h1>
          <S.Subtitle>
            You made time for {lesson.items.length} words. Here is how it went.
          </S.Subtitle>
        </S.Header>
        <S.Card>
          <S.Stats>
            <S.Stat>
              <S.Eyebrow>First attempt</S.Eyebrow>
              <strong>
                {results.filter((result) => result.isCorrect).length} /{' '}
                {lesson.items.length}
              </strong>
              <S.Subtitle>Readings recalled correctly</S.Subtitle>
            </S.Stat>
            {hasRetried && retryResults.length === retryIds.length && (
              <S.Stat>
                <S.Eyebrow>After practice</S.Eyebrow>
                <strong>
                  {retryResults.filter((result) => result.isCorrect).length} /{' '}
                  {retryIds.length}
                </strong>
                <S.Subtitle>Readings recalled on the second try</S.Subtitle>
              </S.Stat>
            )}
          </S.Stats>
          {mistakes.length === 0 ? (
            <S.Feedback $correct>
              All readings correct! A good start with these words.
            </S.Feedback>
          ) : (
            <S.Mistakes>
              <h2>Words you missed on the first try</h2>
              <S.Subtitle>
                These readings needed a little more attention.
              </S.Subtitle>
              {mistakes.map((mistake) => {
                const lessonItem = lesson.items.find(
                  (item) => item.vocabId === mistake.vocabId
                );
                if (!lessonItem) return null;
                return (
                  <S.Mistake key={mistake.vocabId}>
                    <span lang="ja">{lessonItem.kanji}</span>
                    <div>
                      <S.PreviousAnswer>
                        Your answer: <span lang="ja">{mistake.answer}</span>
                      </S.PreviousAnswer>
                      <span>
                        Correct reading:{' '}
                        <span lang="ja">{lessonItem.kana}</span>
                      </span>
                    </div>
                  </S.Mistake>
                );
              })}
            </S.Mistakes>
          )}
          <S.Actions>
            <S.BackLink to="/learn">Back to lessons</S.BackLink>
            {mistakes.length > 0 && !hasRetried && (
              <S.ActionButton
                variant="primary"
                value="practise mistakes"
                onClick={handleRetryClick}
              />
            )}
          </S.Actions>
        </S.Card>
      </S.Page>
    );
  }

  return (
    <S.Page>
      <S.Header>
        <S.Eyebrow>Meet the words</S.Eyebrow>
        <h1>{lesson.title}</h1>
        <S.Subtitle>
          Explore each word and its reading. Then give recall a try.
        </S.Subtitle>
      </S.Header>
      <S.ProgressRow>
        <S.Progress
          aria-label="Lesson progress"
          max={lesson.items.length}
          value={currentIndex + 1}
        />
        <span>
          Word {currentIndex + 1} / {lesson.items.length}
        </span>
      </S.ProgressRow>
      <S.Card>
        <S.WordBlock>
          <S.Word lang="ja">{currentWord.kanji}</S.Word>
          <S.Reading lang="ja">{currentWord.kana}</S.Reading>
          <S.Meaning>{currentWord.meaning}</S.Meaning>
        </S.WordBlock>
        <S.Note>
          <S.Eyebrow>A closer look</S.Eyebrow>
          <p>{currentWord.note}</p>
        </S.Note>
        <S.Actions>
          <S.ActionButton
            value="back"
            variant="ghost"
            disabled={isFirst}
            onClick={handleClickBack}
          />
          <S.ActionButton
            value={isLast ? 'start practice' : 'next'}
            variant="primary"
            onClick={isLast ? () => setPhase('practice') : handleClickNext}
          />
        </S.Actions>
      </S.Card>
    </S.Page>
  );
}
