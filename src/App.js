import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignupBox from './components/SignupBox';
import LoginBox from './components/LoginBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
    <Navbar />
    <div className="container">
      <SignupBox />
      <LoginBox />
    </div>
    <Footer />
  </div>
);

}

export default App;
