import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth_operations';
import css from './LoginPage.module.css'

export const LoginPage = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail((email = value));
        break;
      case 'password':
        setPassword((password = value));
        break;
      default:
    }
  };

  return (
    <>
      <h2 className={css.title}>Welcome Guest! Please log in..</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <span className={css.login}>Login:</span>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            placeholder="Input your email..."
          />
        </label>
        <label className={css.label}>
          <span className={css.password}>Password:</span>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Input your password..."
            value={password}
          />
        </label>
        <button className={css.btn}>LogIn</button>
      </form>
    </>
  );
};
