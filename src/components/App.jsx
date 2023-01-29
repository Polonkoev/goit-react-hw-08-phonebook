import PropTypes from 'prop-types';

import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SelectCurrentUser } from 'redux/selectors';
import { currentUser } from 'redux/auth/auth_operations';
import { SignUp } from '../Pages/SingUp/SignUp';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import HomePage from '../Pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from '../Pages/Layout/Layout';
import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { ContactsPage } from 'Pages/ContactsPage/ContactsPage';

const App = () => {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(SelectCurrentUser);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
    <div className={css.container}>
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
              path="contacts" 
              element={
                <PrivateRoute>
                  <ContactsPage />
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
      </div>
    </>
  );
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
