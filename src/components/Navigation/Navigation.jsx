import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SelectorToken } from '../../redux/selectors';

export const Navigation = () => {
  const token = useSelector(SelectorToken);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {token && (
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};