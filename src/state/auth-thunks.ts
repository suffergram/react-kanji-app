import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../types/root-state';
import { AuthServices } from '../services/services';
import {
  handleErrorAuthAction,
  handleLoadingAuthAction,
  handleSetGuestAction,
  handleSetUserAction,
} from './auth-action-creators';
import { ApiError } from '../util/api-error';

export const fetchMe =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      const data = await AuthServices.me();
      dispatch(handleSetUserAction(data));
    } catch (error: unknown) {
      if (!(error instanceof ApiError && error.status === 401)) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
      dispatch(handleSetGuestAction());
    }
  };

export const login =
  (
    email: string,
    password: string
  ): ThunkAction<Promise<boolean>, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingAuthAction());
      const data = await AuthServices.login(email, password);
      dispatch(handleSetUserAction(data));
    } catch (error: unknown) {
      const message =
        error instanceof ApiError
          ? error.message
          : 'Could not reach the server, please try again';
      dispatch(handleErrorAuthAction(message));
      return false;
    }
    return true;
  };

export const register =
  (
    email: string,
    password: string
  ): ThunkAction<Promise<boolean>, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingAuthAction());
      const data = await AuthServices.register(email, password);
      dispatch(handleSetUserAction(data));
    } catch (error: unknown) {
      const message =
        error instanceof ApiError
          ? error.message
          : 'Could not reach the server, please try again';
      dispatch(handleErrorAuthAction(message));
      return false;
    }
    return true;
  };

export const logout =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      dispatch(handleLoadingAuthAction());
      await AuthServices.logout();
    } catch (error: unknown) {
      if (error instanceof Error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    } finally {
      dispatch(handleSetGuestAction());
    }
  };
