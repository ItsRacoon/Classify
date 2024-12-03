import React from "react";
import './home.css';  
import { Link } from "react-router-dom";

const Navsec = () => {
  return (
    <div className="navSec">
      <div className="navSecLeft">
        <h1>
          <Link to="/">Classify</Link>
        </h1>
      </div>
    </div>
  );
};

export default Navsec;
