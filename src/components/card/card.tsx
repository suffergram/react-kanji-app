import { useSelector } from 'react-redux';
import {
  CardOptions,
  CardOptionsContainer,
  StyledCard,
  StyledHeading,
} from './style';
import { RootState } from '../../types/root-state';
import { QuizOption } from '../quiz-option/quiz-option';

export function Card() {
  const { current } = useSelector((state: RootState) => state.quizState);

  const currentQuestion = current && [current.question, ...current.options];

  return (
    <>
      <StyledCard>
        <StyledHeading>{current?.question.kanji}</StyledHeading>
      </StyledCard>
      <CardOptionsContainer>
        <CardOptions>
          {currentQuestion &&
            currentQuestion
              .sort((a, b) => a.id - b.id)
              .map((option, index) => {
                const optionValues = option.kana.split('; ');
                const value =
                  optionValues.length > 1
                    ? optionValues[Math.round(Math.random())]
                    : optionValues[0];
                return (
                  <QuizOption
                    key={option.id}
                    id={option.id}
                    value={value}
                    optionIndex={index + 1}
                  />
                );
              })}
        </CardOptions>
      </CardOptionsContainer>
    </>
  );
}
