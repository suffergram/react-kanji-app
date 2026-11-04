import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledInput = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== '$width',
})<{
  $width?: string;
}>(({ theme, $width, size }) => ({
  width: $width,
  maxWidth: '100%',
  minWidth: 0,
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    boxSizing: 'border-box',
    height: 'auto',
    minWidth: 0,
    borderRadius: '0.5rem',
    position: 'relative',
    backgroundColor: '#1A2027',
    border: '1px solid',
    borderColor: '#2D3843',
    padding: size === 'small' ? '10px 12px' : '0.875rem 1rem',
    color: 'white',
    fontSize: size === 'small' ? '1rem' : '0.875rem',
    lineHeight: 1.5,
    width: '100%',
    transition: 'border-color 150ms ease, box-shadow 150ms ease',
    '&::placeholder': {
      color: '#889',
      opacity: 1,
    },
    '&:hover:not(:disabled)': {
      borderColor: '#657383',
    },
    '&:focus': {
      outline: 'none',
      borderColor: '#aab',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      WebkitTextFillColor: '#aab',
    },
  },
}));
