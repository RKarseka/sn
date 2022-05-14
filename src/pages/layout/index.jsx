import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header';
import { NavMenu } from '../../components/nav/nav';

export const Layout = ({ ...props }) => {
  return (
    <>
      <Header />

      <NavMenu {...props} />
      <Outlet />
    </>
  );
};
