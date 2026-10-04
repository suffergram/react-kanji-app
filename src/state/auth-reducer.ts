import { AnyAction, Reducer } from 'redux';
import { AuthState } from '../types/root-state';
import { AuthActions } from './constants';
import { initialAuthState } from './initial-root-state';

export const authReducer: Reducer<AuthState, AnyAction> = (
  state: AuthState = initialAuthState,
  action: AnyAction
) => {
  switch (action.type) {
    case AuthActions.HandleLoadingAuth:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case AuthActions.HandleSetUser:
      return {
        ...state,
        user: action.payload,
        status: 'authenticated',
        isLoading: false,
        error: null,
      };
    case AuthActions.HandleSetGuest:
      return {
        ...state,
        user: null,
        status: 'guest',
        isLoading: false,
      };
    case AuthActions.HandleError:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
