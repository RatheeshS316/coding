import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../slices/userSlice'; // ✅ FIXED: import setUser

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    dispatch(
      setUser({
        // name: "Rath",
        // email: 'Rath202@gmail.com'
      })
    );
    navigate('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;

