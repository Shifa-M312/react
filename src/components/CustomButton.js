import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomButton = ({ label }) => {
  return (
    <button className="btn btn-primary">{label}</button>
  );
};

export default CustomButton;
