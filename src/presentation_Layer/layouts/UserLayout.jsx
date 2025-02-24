import { Outlet } from 'react-router-dom';

import UserHeader from '../components/header/userHeader/UserHeader';
import Footer from '../components/footer/footer';

export default function UserLayout() {
  return (
    <>
      <UserHeader />

      {/*page body components */}
      <Outlet />
      <Footer />
    </>
  );
}
