import { CircularProgress } from '@mui/material';
import { StyledLoaderContainer } from './style';

export function Loader() {
  return (
    <StyledLoaderContainer>
      <CircularProgress disableShrink color="inherit" />
    </StyledLoaderContainer>
  );
}
