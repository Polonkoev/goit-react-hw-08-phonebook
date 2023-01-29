import {  Link } from 'react-router-dom';
import css from './AuthNav.module.css'
export const AuthNav = () => {
  return (
    
   <div className={css.container}>
      <ul className={css.list}>
        <li className={css.listItem}>
          
          <Link className={css.listItem} to="signup">Register</Link>
        </li>
        <li className={css.listItem}>
          <Link className={css.listItem} to="login">Login</Link>
        </li>
      </ul>
   </div>
  );
};
