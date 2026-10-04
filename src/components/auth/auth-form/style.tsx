import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/button/button';

export const StyledSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.div`
  width: 20rem;
  max-width: 100%;
`;

export const Title = styled.h1`
  margin: 0 0 2rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  /* MUI input is content-box with a fixed height: switch to border-box so
     100% width includes padding, and let the height grow with the padding */
  & .MuiInputBase-input {
    box-sizing: border-box;
    height: auto;
  }
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FieldLabel = styled.span`
  font-size: 0.875rem;
  color: #aab;
`;

export const ErrorMessage = styled.div`
  padding: 0.75rem 1rem;
  border-left: 0.25rem solid #d9bfbf;
  border-radius: 0.25rem;
  background-color: rgba(217, 191, 191, 0.1);
  color: #d9bfbf;
  font-size: 0.875rem;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 0.5rem;
`;

export const SwitchText = styled.p`
  margin: 2rem 0 0;
  text-align: center;
  font-size: 0.875rem;
  color: #889;
`;

export const SwitchLink = styled(Link)`
  color: white;

  &:hover {
    text-decoration: none;
  }
`;
