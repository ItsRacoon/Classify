import React from "react";
import { Link } from "react-router-dom";
import './home.css';  

<link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'></link>

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="left-section">
      <h1>Classify</h1>
    </div>
    <div className="right-section">
    <button className="navButton">
    <Link to="/register">Sign Up</Link>
    <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
</button>
<button className="navButton">
    <Link to="/login">Sign In</Link>
    <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
</button>

    </div>
  </div>

  
  );
};

export default Navbar;

