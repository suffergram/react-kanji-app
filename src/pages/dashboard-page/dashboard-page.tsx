import { useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';

export function DashboardPage() {
  const { user } = useSelector((state: RootState) => state.authState);

  return (
    <>
      <h1>Hello, {user?.email}</h1>
      <p>Your statistics will appear here</p>
    </>
  );
}
