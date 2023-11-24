import styled from 'styled-components';
import { Slider } from '@mui/material';

export const StyledForm = styled.form`
  height: 20rem;
  width: 20rem;

  @media (max-width: 21rem) {
    width: 95vw;
  }
`;

export const MenuTitle = styled.h1`
  margin-bottom: 2rem;
`;

export const StyledSlider = styled(Slider)(() => ({
  height: 2,
  padding: '1rem 0',
  '& .MuiSlider-thumb': {
    height: '1rem',
    width: '1rem',
    backgroundColor: '#fff',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#dfdfdf',
    height: 1,
    width: 2,
  },
}));
