import { InputBaseProps } from '@mui/material';
import { StyledInput } from './style';

type TextInputProps = InputBaseProps & {
  width?: string;
};

export function TextInput({ width, ...delegatedProps }: TextInputProps) {
  return <StyledInput $width={width} {...delegatedProps} />;
}
