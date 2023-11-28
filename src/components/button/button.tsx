import React from 'react';
import { StyledButton } from './style';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  variant?: 'primary' | 'secondary';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ value, variant, ...delegatedProps }, ref) => (
      <StyledButton
        ref={ref}
        type="button"
        $variant={variant}
        {...delegatedProps}
      >
        {value.toUpperCase()}
      </StyledButton>
    )
);
