import { ChangeEvent, FormEventHandler, useRef, useState } from 'react';
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
import {
  AvatarInput,
  ProfileEmail,
  ProfileSummary,
  RemoveAvatarButton,
} from './style';

type ProfileSectionProps = {
  user: UserType;
};

const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

const allowedSize = 200 * 1024;

export function ProfileSection({ user }: ProfileSectionProps) {
  const dispatch = useDispatch();

  const [status, setStatus] = useState<SaveStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [nickname, setNickname] = useState(user.displayName ?? '');
  const [avatar, setAvatar] = useState<File | undefined>();

  const avatarInputRef = useRef<HTMLInputElement>(null);

  const emailName = user.email.split('@')[0];
  const nextDisplayName = nickname.trim() === '' ? null : nickname.trim();
  const isNicknameChanged = nextDisplayName !== user.displayName;
  const isChanged = isNicknameChanged || !!avatar;

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setStatus('saving');
    setError(null);

    try {
      if (isNicknameChanged) {
        const updatedUser = await UserServices.updateProfile(nextDisplayName);
        dispatch(handleSetUserAction(updatedUser));
        setNickname(updatedUser.displayName ?? '');
      }

      if (avatar) {
        const updatedUser = await UserServices.uploadAvatar(avatar);
        dispatch(handleSetUserAction(updatedUser));
        setAvatar(undefined);
        if (avatarInputRef.current) {
          avatarInputRef.current.value = '';
        }
      }
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

  const handleChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    setStatus('idle');
    setError(null);
    setAvatar(undefined);

    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      setError('Choose a JPEG, PNG or WebP image');
      if (avatarInputRef.current) {
        avatarInputRef.current.value = '';
      }
      return;
    }

    if (file.size > allowedSize) {
      setError('Image must be no larger than 200 KB');
      if (avatarInputRef.current) {
        avatarInputRef.current.value = '';
      }
      return;
    }

    setAvatar(event.target.files?.[0]);
  };

  const handleDeleteAvatar = async () => {
    setStatus('saving');
    setError(null);

    try {
      const updatedUser = await UserServices.deleteAvatar();
      dispatch(handleSetUserAction(updatedUser));
      setAvatar(undefined);
      if (avatarInputRef.current) {
        avatarInputRef.current.value = '';
      }
      setStatus('saved');
    } catch (err) {
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
        <ProfileEmail>{nextDisplayName ?? emailName}</ProfileEmail>
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

      <Field>
        <FieldLabel>Avatar</FieldLabel>
        <AvatarInput
          onChange={handleChangeAvatar}
          type="file"
          accept={allowedTypes.join(', ')}
          aria-describedby="avatar-file-hint"
          disabled={status === 'saving'}
          ref={avatarInputRef}
        />
        <FieldHint id="avatar-file-hint">
          JPEG, PNG or WebP, up to 200 KB. Choose an image, then click Save.
        </FieldHint>
      </Field>

      {user.avatarUrl && (
        <RemoveAvatarButton
          variant="ghost"
          value="Remove avatar"
          type="button"
          onClick={handleDeleteAvatar}
          disabled={status === 'saving'}
        />
      )}
    </SettingsCard>
  );
}
