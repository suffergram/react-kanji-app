import { StyledButton } from './style';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  variant?: 'primary' | 'secondary';
  success?: boolean;
};

export function Button({
  value,
  variant,
  success,
  ...delegatedProps
}: ButtonProps) {
  return (
    <StyledButton
      type="button"
      $variant={variant}
      $success={success}
      {...delegatedProps}
    >
      {value.toUpperCase()}
    </StyledButton>
  );
}
