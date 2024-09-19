import React from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginBox = () => {
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form>
        <CustomInput label="Email" type="email" />
        <CustomInput label="Password" type="password" />
        <CustomButton label="Login" />
      </form>
    </div>
  );
};

export default LoginBox;
