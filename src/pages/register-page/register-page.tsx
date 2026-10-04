import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { RootState } from '../../types/root-state';
import { AuthForm } from '../../components/auth/auth-form/auth-form';
import { register } from '../../state/auth-thunks';

export function RegisterPage() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleSubmit = (email: string, password: string) =>
    dispatch(register(email, password));

  return (
    <AuthForm
      title="Sign Up"
      submitLabel="Sign Up"
      mode="register"
      onSubmit={handleSubmit}
    />
  );
}
