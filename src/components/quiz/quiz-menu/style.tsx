import styled from 'styled-components';
import { Slider, styled as styledMUI } from '@mui/material';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Menu = styled.div`
  width: 20rem;
  margin-bottom: 2rem;

  @media (max-width: 21rem) {
    width: 84vw;
  }
`;

export const MenuTitle = styled.h1`
  margin-bottom: 2rem;
`;

export const StyledSlider = styledMUI(Slider)(() => ({
  color: '#889',
  height: 1,
  padding: '1rem 0',
  '& .MuiSlider-thumb': {
    height: '1rem',
    width: '1rem',
    backgroundColor: '#fff',
    '&:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: '0 0 0 0.5rem rgba(136, 136, 153, 0.16)',
    },
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#889',
    height: 4,
    width: 1,
    '&.MuiSlider-markActive': {
      backgroundColor: '#dfdfdf',
    },
  },
  '& .MuiSlider-rail': {
    color: '#112',
    height: 2,
  },
}));
