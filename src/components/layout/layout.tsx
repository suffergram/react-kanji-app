import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { StyledMain } from './style';
import { RootState } from '../../types/root-state';

export function Layout() {
  const state = useSelector((state: RootState) => state);

  const main = (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );

  if (state.quizState.isOngoing || state.learnState.isOngoing) return main;

  return (
    <>
      <Header />
      {main}
      <Footer />
    </>
  );
}
