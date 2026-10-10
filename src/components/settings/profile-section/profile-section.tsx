import { FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar } from '../../shared/avatar/avatar';
import { SettingsCard } from '../settings-card/settings-card';
import { SaveStatus } from '../../../types/save-status';
import { UserServices } from '../../../services/services';
import { handleSetUserAction } from '../../../state/auth-action-creators';
import { ApiError } from '../../../util/api-error';
import { TextInput } from '../../shared/text-input/text-input';
import { UserType } from '../../../types/user-type';
import { Field, FieldHint, FieldLabel } from '../../shared/form/style';
import { ProfileEmail, ProfileSummary } from './style';

type ProfileSectionProps = {
  user: UserType;
};

export function ProfileSection({ user }: ProfileSectionProps) {
  const dispatch = useDispatch();

  const [status, setStatus] = useState<SaveStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [nickname, setNickname] = useState(user.displayName ?? '');

  const emailName = user.email.split('@')[0];
  const nextDisplayName = nickname.trim() === '' ? null : nickname.trim();
  const isChanged = nextDisplayName !== user.displayName;

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setStatus('saving');
    setError(null);

    try {
      const updatedUser = await UserServices.updateProfile(nextDisplayName);
      dispatch(handleSetUserAction(updatedUser));
      setNickname(updatedUser.displayName ?? '');
      setStatus('saved');
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
      title="Profile"
      description="How you appear across the app"
      status={status}
      canSubmit={isChanged}
      error={error}
      successText="Profile updated"
      onSubmit={handleSubmit}
    >
      <ProfileSummary>
        <Avatar user={{ ...user, displayName: nextDisplayName }} size={3.5} />
        <ProfileEmail>{user.email}</ProfileEmail>
      </ProfileSummary>

      <Field>
        <FieldLabel>Nickname</FieldLabel>
        <TextInput
          fullWidth
          placeholder={emailName}
          value={nickname}
          onChange={(event) => {
            setNickname(event.target.value);
            setStatus('idle');
          }}
          inputProps={{ maxLength: 32 }}
        />
        <FieldHint>
          Shown instead of your email. Leave it empty to use “{emailName}”.
        </FieldHint>
      </Field>
    </SettingsCard>
  );
}
