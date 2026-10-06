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

export { Form, Field, FieldLabel, ErrorMessage } from '../../shared/form/style';

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
