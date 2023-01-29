import {  NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'
export const AuthNav = () => {
  return (
    
   <div className={css.container}>
      <ul className={css.list}>
        <li className={css.listItem}>
          
          <NavLink to="signup">Register</NavLink>
        </li>
        <li className={css.listItem}>
          <NavLink to="login">Login</NavLink>
        </li>
      </ul>
   </div>
  );
};
