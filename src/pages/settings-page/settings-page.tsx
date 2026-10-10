import { useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';
import { ProfileSection } from '../../components/settings/profile-section/profile-section';
import { PasswordSection } from '../../components/settings/password-section/password-section';
import { EmailSection } from '../../components/settings/email-section/email-section';
import { DeleteSection } from '../../components/settings/delete-section/delete-section';
import { PageHeader, StyledSection, Subtitle, Title } from './style';

export function SettingsPage() {
  const { user } = useSelector((state: RootState) => state.authState);

  // RequireAuth renders this page only for a logged-in user
  if (!user) return null;

  return (
    <StyledSection>
      <PageHeader>
        <Title>Settings</Title>
        <Subtitle>Manage your profile and account security</Subtitle>
      </PageHeader>
      <ProfileSection user={user} />
      <PasswordSection />
      <EmailSection user={user} />
      <DeleteSection />
    </StyledSection>
  );
}
