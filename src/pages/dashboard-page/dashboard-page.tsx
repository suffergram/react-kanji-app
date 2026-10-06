import { useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';
import { getDisplayName } from '../../util/get-display-name';
import { Avatar } from '../../components/shared/avatar/avatar';
import { Greeting, Placeholder, StyledSection, Subtitle, Title } from './style';

export function DashboardPage() {
  const { user } = useSelector((state: RootState) => state.authState);

  // RequireAuth renders this page only for a logged-in user
  if (!user) return null;

  return (
    <StyledSection>
      <Greeting>
        <Avatar user={user} size={4} />
        <div>
          <Title>Hello, {getDisplayName(user)}</Title>
          <Subtitle>Welcome back to your kanji practice</Subtitle>
        </div>
      </Greeting>
      <Placeholder>Your statistics will appear here</Placeholder>
    </StyledSection>
  );
}
