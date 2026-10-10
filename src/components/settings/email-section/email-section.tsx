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

  const canSubmit = !!password && !!email;

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setError(null);

    if (email.trim().toLowerCase() === user.email) {
      setError('This is already your current email');
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
          : 'Could not reach the server, please try again'
      );
      setStatus('idle');
    }
  };

  return (
    <SettingsCard
      title="Email"
      description="Used to log in. Changing it logs you out on all other devices"
      status={status}
      canSubmit={canSubmit}
      error={error}
      successText="Email updated"
      onSubmit={handleSubmit}
    >
      <Field>
        <FieldLabel>New email</FieldLabel>
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
        <FieldHint>Current email: {user.email}</FieldHint>
      </Field>

      <Field>
        <FieldLabel>Current password</FieldLabel>
        <TextInput
          fullWidth
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
