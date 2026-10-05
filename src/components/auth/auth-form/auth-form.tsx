import { FormEventHandler, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Navigate, useLocation } from 'react-router-dom';
import { TextInput } from '../../shared/text-input/text-input';
import { RootState } from '../../../types/root-state';
import { handleClearErrorAuth } from '../../../state/auth-action-creators';
import { LocationType } from '../../../types/location-state';
import {
  Card,
  ErrorMessage,
  Field,
  FieldLabel,
  Form,
  StyledSection,
  SubmitButton,
  SwitchLink,
  SwitchText,
  Title,
} from './style';

type AuthFormProps = {
  title: string;
  submitLabel: string;
  mode: 'login' | 'register';
  onSubmit: (email: string, password: string) => Promise<boolean>;
};

export function AuthForm({
  title,
  submitLabel,
  mode,
  onSubmit,
}: AuthFormProps) {
  const location = useLocation();
  const authState = useSelector((state: RootState) => state.authState);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(
    () => () => {
      dispatch(handleClearErrorAuth());
    },
    []
  );

  const state = location.state as LocationType | null;

  if (authState.status === 'authenticated') {
    const from = state?.from ?? '/';
    return <Navigate to={from} replace />;
  }

  const handleFormSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <StyledSection>
      <Card>
        <Title>{title}</Title>
        <Form onSubmit={handleFormSubmit}>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <TextInput
              type="email"
              autoComplete="email"
              required
              fullWidth
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Field>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <TextInput
              type="password"
              autoComplete={
                mode === 'login' ? 'current-password' : 'new-password'
              }
              required
              fullWidth
              placeholder={
                mode === 'register' ? 'At least 8 characters' : 'Password'
              }
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              inputProps={{ minLength: mode === 'register' ? 8 : undefined }}
            />
          </Field>
          {authState.error && (
            <ErrorMessage role="alert">{authState.error}</ErrorMessage>
          )}
          <SubmitButton
            type="submit"
            variant="primary"
            value={submitLabel}
            disabled={authState.isLoading}
          />
        </Form>
        {mode === 'login' ? (
          <SwitchText>
            Don&apos;t have an account?{' '}
            <SwitchLink to="/register" state={state}>
              Sign Up
            </SwitchLink>
          </SwitchText>
        ) : (
          <SwitchText>
            Already have an account?{' '}
            <SwitchLink to="/login" state={state}>
              Log In
            </SwitchLink>
          </SwitchText>
        )}
      </Card>
    </StyledSection>
  );
}
