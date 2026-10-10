import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { RootState } from '../../types/root-state';
import { AuthForm } from '../../components/auth/auth-form/auth-form';
import { login } from '../../state/auth-thunks';

export function LoginPage() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleSubmit = (email: string, password: string) =>
    dispatch(login(email, password));

  return (
    <AuthForm
      title="Log in"
      submitLabel="Log in"
      mode="login"
      onSubmit={handleSubmit}
    />
  );
}
