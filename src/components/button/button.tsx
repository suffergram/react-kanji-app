import { StyledButton } from './style';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  variant?: 'primary' | 'secondary';
};

export function Button({ value, variant, ...delegatedProps }: ButtonProps) {
  return (
    <StyledButton type="button" $variant={variant} {...delegatedProps}>
      {value.toUpperCase()}
    </StyledButton>
  );
}
