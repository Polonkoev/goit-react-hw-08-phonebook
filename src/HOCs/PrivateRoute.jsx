import { useSelector } from 'react-redux';
import { SelectorToken } from '../redux/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(SelectorToken);

  return token ? children : <Navigate to="/login" />;
};
