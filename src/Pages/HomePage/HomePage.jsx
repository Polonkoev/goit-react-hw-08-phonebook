import { ContactsPage } from 'Pages/ContactsPage/ContactsPage';

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { SelectName, SelectorToken } from 'redux/selectors';
import css from './HomePage.module.css'
export const HomePage = () => {
  const name = useSelector(SelectName);
  const token = useSelector(SelectorToken);
  return (
    <>
      {name !== '' ? (
        <h2 className={css.title}>{name}! Welcome to the PhoneBook!</h2>
      ) : (
        <h2 className={css.title}>Guest! Welcome to the PhoneBook!</h2>
      )}
      <Outlet />
      {token && <ContactsPage />}
    </>
  );
};

export default HomePage;
