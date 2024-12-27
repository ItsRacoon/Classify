import React from "react";
import './navsec.css';
import { Link } from "react-router-dom";

const Navsec = () => {
  return (
    <div className="dashNav">
      <div className="dashNavLeft">
        <Link to="/Teacher"><span>Weekly Schedule</span></Link>
      </div>
      <div className="dashNavMid">
        <Link to="/Teacher_assign"><span>Assignment</span></Link>
      </div>
      <div className="dashNavRight">
        <Link to="/Teacher_notes"><span>Notes</span></Link>
      </div>
    </div>
  );
};

export default Navsec;
