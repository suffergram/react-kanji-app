import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../components/shared/button/button';

export const Page = styled.section`
  width: 42rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  h1 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    line-height: 1.25;
    overflow-wrap: anywhere;
  }
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: #aab;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: #aab;
  font-size: 0.875rem;
  line-height: 1.6;
`;

export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #aab;
  font-size: 0.75rem;

  span {
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }
`;

export const Progress = styled.progress`
  appearance: none;
  flex: 1;
  width: 100%;
  min-width: 0;
  height: 0.25rem;
  overflow: hidden;
  border: 0;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.08);
  color: #a8cda8;

  &::-webkit-progress-bar {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 1rem;
  }

  &::-webkit-progress-value {
    background: #a8cda8;
    border-radius: 1rem;
  }

  &::-moz-progress-bar {
    background: #a8cda8;
    border-radius: 1rem;
  }
`;

export const Card = styled.div`
  padding: clamp(1.25rem, 4vw, 2rem);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.875rem;
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  min-width: 0;
`;

export const WordBlock = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
`;

export const Word = styled.div`
  font-size: clamp(4.5rem, 16vw, 7rem);
  font-family: 'Yu Gothic', 'Hiragino Kaku Gothic ProN', sans-serif;
  font-weight: 500;
  line-height: 1.3;
  overflow-wrap: anywhere;
  max-width: 100%;
`;

export const Reading = styled.p`
  margin: 0;
  color: #c5c5ce;
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const Meaning = styled.p`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.5;
  overflow-wrap: anywhere;
`;

export const MeaningAnswer = styled.div`
  min-height: 5.5rem;
  box-sizing: border-box;
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 0.625rem;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
`;

export const Note = styled.aside`
  padding: 1rem 1.125rem;
  border-left: 2px solid #657383;
  border-radius: 0 0.5rem 0.5rem 0;
  background: rgba(0, 0, 0, 0.12);
  color: #c5c5ce;
  font-size: 0.875rem;
  line-height: 1.8;
  overflow-wrap: anywhere;

  p {
    margin: 0.375rem 0 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 30rem) {
    & > button {
      flex: 1 1 auto;
    }
  }
`;

export const ActionButton = styled(Button)`
  width: auto;
  min-width: 7rem;
  max-width: 100%;
  height: auto;
  min-height: 2.75rem;
  padding: 0.75rem 1.125rem;
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
`;

export const AnswerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;

  label {
    color: #aab;
    font-size: 0.875rem;
  }

  & > button {
    align-self: flex-end;
  }
`;

export const Feedback = styled.div<{ $correct: boolean }>`
  padding: 1rem 1.125rem;
  border: 1px solid
    ${(props) =>
      props.$correct
        ? 'rgba(168, 205, 168, 0.25)'
        : 'rgba(217, 191, 191, 0.25)'};
  border-radius: 0.5rem;
  background: ${(props) =>
    props.$correct ? 'rgba(168, 205, 168, 0.06)' : 'rgba(217, 191, 191, 0.06)'};
  color: ${(props) => (props.$correct ? '#a8cda8' : '#d9bfbf')};
  line-height: 1.6;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 12rem), 1fr));
  gap: 1rem;
`;

export const Stat = styled.div`
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 0.625rem;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  strong {
    font-size: 2rem;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
  }
`;

export const Mistakes = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const Mistake = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.5rem;
  overflow-wrap: anywhere;

  & > span {
    font-size: 1.75rem;
    min-width: 4rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

export const PreviousAnswer = styled.span`
  color: #aab;
`;

export const BackLink = styled(Link)`
  color: #c5c5ce;
  font-size: 0.875rem;
  line-height: 1.5;
  text-decoration-color: #657383;
  text-underline-offset: 0.25rem;

  &:hover {
    color: white;
  }

  &:focus-visible {
    outline: 1px solid #aab;
    outline-offset: 4px;
  }
`;
