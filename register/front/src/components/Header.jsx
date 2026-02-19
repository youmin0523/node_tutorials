import { clearToken } from '../redux/slices/loginSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  console.log(user);

  const handleLogout = () => {
    dispatch(clearToken());
  };
  return (
    <div>
      <Link to="/login">Login</Link>{' '}
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default Header;
