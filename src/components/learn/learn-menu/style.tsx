import styled from 'styled-components';

export const Levels = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const LevelSection = styled.section`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 2rem;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const LevelTitle = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  opacity: 0.85;
`;

export const LessonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 1rem;
`;

export const LessonCard = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border: 1px solid #556;
  border-radius: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
`;

export const LessonNumber = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  opacity: 0.6;
`;

export const LessonTitle = styled.div`
  font-weight: 600;
`;

export const KanjiPreview = styled.div`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
  color: rgba(255, 255, 255, 0.8);
`;