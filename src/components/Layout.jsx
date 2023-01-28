import { useSelector } from 'react-redux';
import { Navigation } from '../components/Navigation/Navigation';
import { AuthNav } from '../components/AuthNav';
import { UserMenu } from '.././Pages/UserMenu/UserMenu';
import { SelectorToken } from '../redux/selectors';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const token = useSelector(SelectorToken);

  return (
    <>
      <header>
        <Navigation />
        {token ? <UserMenu /> : <AuthNav />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};