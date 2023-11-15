import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Footer from "../Footer/Footer"
// import { Header } from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default SharedLayout;
