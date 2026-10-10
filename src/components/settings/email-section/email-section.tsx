import { FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SaveStatus } from '../../../types/save-status';
import { UserServices } from '../../../services/services';
import { ApiError } from '../../../util/api-error';
import { SettingsCard } from '../settings-card/settings-card';
import { TextInput } from '../../shared/text-input/text-input';
import { Field, FieldHint, FieldLabel } from '../../shared/form/style';
import { handleSetUserAction } from '../../../state/auth-action-creators';
import { UserType } from '../../../types/user-type';

type EmailSectionProps = {
  user: UserType;
};

export function EmailSection({ user }: EmailSectionProps) {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [status, setStatus] = useState<SaveStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const isChanged = !!password && !!email;

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setError(null);

    if (email === user.email) {
      setError('This email is already associated with an account');
      return;
    }
    setStatus('saving');

    try {
      const updatedUser = await UserServices.changeEmail(email, password);
      dispatch(handleSetUserAction(updatedUser));
      setStatus('saved');
      setPassword('');
      setEmail('');
    } catch (err: unknown) {
      setError(
        err instanceof ApiError
          ? err.message
          : 'Network error, please try again'
      );
      setStatus('idle');
    }
  };

  return (
    <SettingsCard
      title="Email"
      status={status}
      isChanged={isChanged}
      error={error}
      successText="Email changed"
      handleSubmit={handleSubmit}
    >
      <Field>
        <FieldLabel>New Email</FieldLabel>
        <TextInput
          type="email"
          required
          fullWidth
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setStatus('idle');
          }}
        />
        <FieldHint>Your current email address is {user.email}.</FieldHint>
      </Field>

      <Field>
        <FieldLabel>Current Password</FieldLabel>
        <TextInput
          fullWidth
          placeholder="Current Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setStatus('idle');
          }}
          inputProps={{ maxLength: 72 }}
          type="password"
          autoComplete="current-password"
        />
      </Field>
    </SettingsCard>
  );
}
