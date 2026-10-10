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
  repeated: '',
};

export function PasswordSection() {
  const [password, setPassword] = useState(initState);

  const [status, setStatus] = useState<SaveStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const isChanged = Object.values(initState).every(Boolean);

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setError(null);

    if (password.new !== password.repeated) {
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
          : 'Network error, please try again'
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
      status={status}
      isChanged={isChanged}
      error={error}
      successText="Password changed"
      handleSubmit={handleSubmit}
    >
      <Field>
        <FieldLabel>Current Password</FieldLabel>
        <TextInput
          fullWidth
          placeholder="Current Password"
          value={password.current}
          onChange={handlePasswordChange('current')}
          inputProps={{ maxLength: 72 }}
          type="password"
          autoComplete="current-password"
        />
      </Field>

      <Field>
        <FieldLabel>New Password</FieldLabel>
        <TextInput
          fullWidth
          placeholder="New Password"
          value={password.new}
          onChange={handlePasswordChange('new')}
          inputProps={{ maxLength: 72, minLength: 8 }}
          type="password"
          autoComplete="new-password"
        />
      </Field>

      <Field>
        <FieldLabel>Repeat New Password</FieldLabel>
        <TextInput
          fullWidth
          placeholder="New Password"
          value={password.repeated}
          onChange={handlePasswordChange('repeated')}
          inputProps={{ maxLength: 72, minLength: 8 }}
          type="password"
          autoComplete="new-password"
        />
      </Field>
    </SettingsCard>
  );
}
