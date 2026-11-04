import styled from 'styled-components';
import { CardButton } from '../settings-card/style';

export const RemoveAvatarButton = styled(CardButton)`
  align-self: flex-start;
`;

export const AvatarInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 0.5rem;
  border: 1px solid #2d3843;
  border-radius: 0.5rem;
  background-color: #1a2027;
  color: #aab;
  font: inherit;
  font-size: 0.875rem;
  cursor: pointer;
  transition: border-color 150ms ease, box-shadow 150ms ease;

  &::file-selector-button {
    margin-right: 0.75rem;
    padding: 0.625rem 0.875rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 0.375rem;
    background-color: rgba(255, 255, 255, 0.08);
    color: #fff;
    font: inherit;
    cursor: pointer;
    transition: background-color 150ms ease;
  }

  &:hover:not(:disabled) {
    border-color: #657383;
  }

  &:hover:not(:disabled)::file-selector-button {
    background-color: rgba(255, 255, 255, 0.14);
  }

  &:focus-visible {
    outline: none;
    border-color: #aab;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:disabled::file-selector-button {
    cursor: not-allowed;
  }
`;

export const ProfileSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
`;

export const ProfileEmail = styled.span`
  color: #aab;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
