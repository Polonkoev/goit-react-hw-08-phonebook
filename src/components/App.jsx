import PropTypes from 'prop-types';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import ContactForm from './ContactForm/ContactForm';
// import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SelectCurrentUser} from 'redux/selectors';
import { currentUser } from 'redux/auth/auth_operations';
import { SignUp } from '../Pages/SingUp/SignUp';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import HomePage from '../Pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { UserMenu } from 'Pages/UserMenu/UserMenu';
import { useEffect } from 'react';
import { Layout } from './Layout';
import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { ContactsPage } from 'Pages/ContactsPage/ContactsPage';

const App = () => {
  //  const error = useSelector(SelectError)
  const dispatch = useDispatch()
  const isCurrentUser = useSelector(SelectCurrentUser)

  useEffect(()=>{
    dispatch(currentUser())
  }, [dispatch])

  return (
    <>
      {!isCurrentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts" //?? 
              element={
                <PrivateRoute>
                  <ContactsPage/>
                </PrivateRoute>
              }
            />
            <Route
              path="signup"
              element={
                <PublicRoute restricted>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  )
};

App.propTypes = {
  addContact: PropTypes.func,
  handleFilter: PropTypes.func,
  renderContacts: PropTypes.func,
  deleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default App;
