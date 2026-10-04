import { UserType } from '../types/user-type';
import { AuthActions } from './constants';

export const handleLoadingAuthAction = () => ({
  type: AuthActions.HandleLoadingAuth,
});

export const handleSetUserAction = (data: UserType) => ({
  type: AuthActions.HandleSetUser,
  payload: data,
});

export const handleSetGuestAction = () => ({
  type: AuthActions.HandleSetGuest,
});

export const handleErrorAuthAction = (data: string) => ({
  type: AuthActions.HandleError,
  payload: data,
});
