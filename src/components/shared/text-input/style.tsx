import { InputBase } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const StyledInput = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== '$width',
})<{
  $width?: string;
}>(({ theme, $width = '100%' }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#1A2027',
    border: '1px solid',
    borderColor: '#2D3843',
    padding: '10px 12px',
    color: 'white',
    width: $width,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha('#FFFFFF', 0.25)} 0 0 0 0.2rem`,
      borderColor: alpha('#FFFFFF', 0.75),
    },
  },
}));
