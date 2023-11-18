import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { StyledMain } from './style';

export function Layout() {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}
