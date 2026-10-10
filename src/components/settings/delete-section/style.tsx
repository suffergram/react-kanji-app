import styled from 'styled-components';

export const Warning = styled.div`
  padding: 0.75rem 1rem;
  border-left: 0.25rem solid #d96e6e;
  border-radius: 0.25rem;
  background-color: rgba(217, 110, 110, 0.1);
  color: #e8c4c4;
  font-size: 0.875rem;
  line-height: 1.4;
`;

// MUI checkbox colors are made for a light theme, so they are set explicitly
export const confirmCheckboxSx = {
  color: '#aab',
  '&.Mui-checked': {
    color: '#d96e6e',
  },
};

export const confirmLabelSx = {
  marginLeft: '-0.5rem',
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: '#ccd',
  },
};
