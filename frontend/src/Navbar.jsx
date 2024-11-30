import React from "react";
import { Link } from "react-router-dom";
import './index.css';  

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="left-section">
      <h1>Classify</h1>
    </div>
    <div className="right-section">
      <Link to="/Login" className="button">Signin</Link>
      <Link to="/register" className="button">Signup</Link>
    </div>
  </div>
  );
};

export default Navbar;

