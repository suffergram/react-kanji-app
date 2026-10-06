import { UserType } from '../../../types/user-type';
import { getDisplayName } from '../../../util/get-display-name';
import { StyledAvatar } from './style';

type AvatarProps = {
  user: UserType;
  size?: number;
};

const getHue = (id: string) => Math.round((Number(id) * 137.508) % 360);

export function Avatar({ user, size = 2 }: AvatarProps) {
  const initial = getDisplayName(user).charAt(0).toUpperCase();

  return (
    <StyledAvatar $size={size} $hue={getHue(user.id)} aria-hidden="true">
      {initial}
    </StyledAvatar>
  );
}
