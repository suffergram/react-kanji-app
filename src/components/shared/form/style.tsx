import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

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

export const FieldHint = styled.span`
  font-size: 0.75rem;
  color: #889;
`;

const Message = styled.div`
  padding: 0.75rem 1rem;
  border-left: 0.25rem solid;
  border-radius: 0.25rem;
  font-size: 0.875rem;
`;

export const ErrorMessage = styled(Message)`
  border-color: #d9bfbf;
  background-color: rgba(217, 191, 191, 0.1);
  color: #d9bfbf;
`;

export const SuccessMessage = styled(Message)`
  border-color: #a8cda8;
  background-color: rgba(168, 205, 168, 0.1);
  color: #a8cda8;
`;
