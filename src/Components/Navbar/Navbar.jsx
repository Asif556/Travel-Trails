import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const changenav = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="logo">
        <h1>Travel-Trails</h1>
      </div>
      <div className="links">
        <span onClick={() => changenav('/')}>Home</span>
        <span onClick={() => changenav('/Info')}>About Us</span>
        <span onClick={() => changenav('/Map')}>Features</span>
      </div>
    </div>
  );
};

export default Navbar;
