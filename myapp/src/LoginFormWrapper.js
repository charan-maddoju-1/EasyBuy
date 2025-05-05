// LoginFormWrapper.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm/index.js'; // import your class component

const LoginFormWrapper = (props) => {
  const navigate = useNavigate();
  return <LoginForm {...props} navigate={navigate} />;
};

export default LoginFormWrapper;
