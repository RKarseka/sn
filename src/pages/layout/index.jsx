import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header';
import { Nav } from '../../components/nav/nav';

export const Layout = () => {
  return (
    <>
      <Header />
      {/* <div className="App">
        <h1>Social newtwork</h1>
      </div> */}
      <Nav />
      <Outlet />
    </>
  );
};
