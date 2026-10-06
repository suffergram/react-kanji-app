import { FormEventHandler, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';
import { UserServices } from '../../services/services';
import { handleSetUserAction } from '../../state/auth-action-creators';
import { ApiError } from '../../util/api-error';
import { Avatar } from '../../components/shared/avatar/avatar';
import { TextInput } from '../../components/shared/text-input/text-input';
import {
  ErrorMessage,
  Field,
  FieldHint,
  FieldLabel,
  Form,
  SuccessMessage,
} from '../../components/shared/form/style';
import {
  Card,
  CardTitle,
  ProfileEmail,
  ProfileSummary,
  SaveButton,
  StyledSection,
  Title,
} from './style';

type SaveStatus = 'idle' | 'saving' | 'saved';

export function SettingsPage() {
  const { user } = useSelector((state: RootState) => state.authState);
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState(user?.displayName ?? '');
  const [status, setStatus] = useState<SaveStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  // RequireAuth renders this page only for a logged-in user
  if (!user) return null;

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
          : 'Network error, please try again'
      );
      setStatus('idle');
    }
  };

  return (
    <StyledSection>
      <Title>Settings</Title>

      <Card>
        <CardTitle>Profile</CardTitle>
        <ProfileSummary>
          <Avatar user={{ ...user, displayName: nextDisplayName }} size={3.5} />
          <ProfileEmail>{user.email}</ProfileEmail>
        </ProfileSummary>

        <Form onSubmit={handleSubmit}>
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
              Shown instead of your email. Leave empty to use “{emailName}”.
            </FieldHint>
          </Field>

          {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
          {status === 'saved' && (
            <SuccessMessage role="status">Saved</SuccessMessage>
          )}

          <SaveButton
            type="submit"
            variant="primary"
            value={status === 'saving' ? 'Saving…' : 'Save'}
            disabled={!isChanged || status === 'saving'}
          />
        </Form>
      </Card>
    </StyledSection>
  );
}
