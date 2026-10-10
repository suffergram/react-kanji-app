import { useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';
import { ProfileSection } from '../../components/settings/profile-section/profile-section';
import { PasswordSection } from '../../components/settings/password-section/password-section';
import { StyledSection, Title } from './style';

export function SettingsPage() {
  const { user } = useSelector((state: RootState) => state.authState);

  // RequireAuth renders this page only for a logged-in user
  if (!user) return null;

  return (
    <StyledSection>
      <Title>Settings</Title>
      <ProfileSection user={user} />
      <PasswordSection />
    </StyledSection>
  );
}
