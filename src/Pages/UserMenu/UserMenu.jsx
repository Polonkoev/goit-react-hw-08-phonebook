import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth_operations';
import { SelectName } from 'redux/selectors';
export const UserMenu = () => {
  const name = useSelector(SelectName);
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout());
  };
  console.log(name);
  return (
    
    <>
    {!name ? <h2>Wellcome Guest!</h2> : <h2>Wellcome {name}</h2>}
      
      <button onClick={logoutHandler}>LOGOUT</button>
    </>
  );
};