import { UserType } from '../types/user-type';

export function getDisplayName(user: UserType) {
  return user.displayName ?? user.email.slice(0, user.email.indexOf('@'));
}
