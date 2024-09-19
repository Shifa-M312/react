import React from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupBox = () => {
  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form>
        <CustomInput label="Name" type="text" />
        <CustomInput label="Email" type="email" />
        <CustomInput label="Number" type="text" />
        <CustomInput label="Password" type="password" />
        <CustomButton label="Signup" />
      </form>
    </div>
  );
};

export default SignupBox;
