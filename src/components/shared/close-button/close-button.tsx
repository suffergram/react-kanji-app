import { ComponentPropsWithoutRef } from 'react';
import { StyledCloseButton } from './style';

export function CloseButton(
  delegatedProps: ComponentPropsWithoutRef<'button'>
) {
  return (
    <StyledCloseButton type="button" {...delegatedProps}>
      ✕
    </StyledCloseButton>
  );
}
