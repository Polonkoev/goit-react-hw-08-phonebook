import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth_operations';
import css from './SignUp.module.css';

export const SignUp = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName((name = value));
        break;
      case 'email':
        setEmail((email = value));
        break;
      case 'password':
        setPassword((password = value));
        break;
      default:
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signup({ name, email, password }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name:
        <input
          className={css.name}
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className={css.label}>
        Email:
        <input
          className={css.email}
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label className={css.label}>
        Password:
        <input
          className={css.password}
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <button className={css.button}>Save</button>
    </form>
  );
};
