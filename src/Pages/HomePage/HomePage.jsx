import ContactForm from 'components/ContactForm/ContactForm';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactList } from 'components/ContactList/ContactList';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { UserMenu } from 'Pages/UserMenu/UserMenu';
import { Link, Outlet } from 'react-router-dom';
export const HomePage = () => {
  return (
    <>
      <h2>Wellcome to the PhoneBook</h2>
     
    
      <Outlet/>
      <LoginPage/>
      <UserMenu/>
      <ContactForm/>
      
      <ContactList/>
      </>
  );
};

export default HomePage;
