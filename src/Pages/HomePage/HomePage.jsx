import { Link, Outlet } from 'react-router-dom';
export const HomePage = () => {
  return (
    <>
      <h2>Wellcome to the PhoneBook</h2>
     
    
      <Outlet/>
      </>
  );
};

export default HomePage;
