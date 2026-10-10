import { ChangeEvent, FormEventHandler, useState } from 'react';
import { SaveStatus } from '../../../types/save-status';
import { UserServices } from '../../../services/services';
import { ApiError } from '../../../util/api-error';
import { SettingsCard } from '../settings-card/settings-card';
import { TextInput } from '../../shared/text-input/text-input';
import { Field, FieldLabel } from '../../shared/form/style';

const initState = {
  current: '',
  new: '',
  confirmation: '',
};

export function PasswordSection() {
  const [password, setPassword] = useState(initState);

  const [status, setStatus] = useState<SaveStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const canSubmit = Object.values(password).every(Boolean);

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setError(null);

    if (password.new !== password.confirmation) {
      setError('Passwords do not match');
      return;
    }
    setStatus('saving');

    try {
      await UserServices.changePassword(password.current, password.new);
      setStatus('saved');
      setPassword(initState);
    } catch (err: unknown) {
      setError(
        err instanceof ApiError
          ? err.message
          : 'Could not reach the server, please try again'
      );
      setStatus('idle');
    }
  };

  const handlePasswordChange =
    (field: keyof typeof initState) =>
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setPassword((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
      setStatus('idle');
    };

  return (
    <SettingsCard
      title="Password"
      description="Changing your password logs you out on all other devices"
      status={status}
      canSubmit={canSubmit}
      error={error}
      successText="Password updated"
      onSubmit={handleSubmit}
    >
      <Field>
        <FieldLabel>Current password</FieldLabel>
        <TextInput
          fullWidth
          value={password.current}
          onChange={handlePasswordChange('current')}
          inputProps={{ maxLength: 72 }}
          type="password"
          autoComplete="current-password"
        />
      </Field>

      <Field>
        <FieldLabel>New password</FieldLabel>
        <TextInput
          fullWidth
          placeholder="At least 8 characters"
          value={password.new}
          onChange={handlePasswordChange('new')}
          inputProps={{ maxLength: 72, minLength: 8 }}
          type="password"
          autoComplete="new-password"
        />
      </Field>

      <Field>
        <FieldLabel>Confirm new password</FieldLabel>
        <TextInput
          fullWidth
          value={password.confirmation}
          onChange={handlePasswordChange('confirmation')}
          inputProps={{ maxLength: 72, minLength: 8 }}
          type="password"
          autoComplete="new-password"
        />
      </Field>
    </SettingsCard>
  );
}
