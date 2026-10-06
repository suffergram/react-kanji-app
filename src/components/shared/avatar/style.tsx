import styled from 'styled-components';

export const StyledAvatar = styled.span<{ $size: number; $hue: number }>`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$size}rem;
  height: ${(props) => props.$size}rem;
  border-radius: 50%;
  background-color: hsl(${(props) => props.$hue}, 40%, 45%);
  box-shadow: 0 0 0 0.125rem rgba(255, 255, 255, 0.15);
  color: white;
  font-size: ${(props) => props.$size * 0.45}rem;
  font-weight: bold;
  line-height: 1;
  user-select: none;
`;
