import { useSelector } from 'react-redux';

import { AuthNav } from '../../components/AuthNav/AuthNav';

import { SelectName, SelectorToken } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth_operations';

import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  const token = useSelector(SelectorToken);
  const name = useSelector(SelectName);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <header>
        <Link className={css.home} to='/'>Home</Link>
        {!token && <AuthNav />}
        {token && (
          <div className={css.loginBtn}>
            <h3>{name}</h3> <button className={css.btn} onClick={logoutHandler}>Logout</button>
          </div>
        )}
      </header>
      <main>
        <Outlet />
        
      </main>
    </>
  );
};
