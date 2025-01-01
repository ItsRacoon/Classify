import React from "react";
import './teacher_notes.css';
import { Link } from "react-router-dom";

const Subjectnav = () => {
  return (
    <div className="subject-nav">
      <div>
        <span>Data Structures</span>
      </div>
      <div>
        <span>Compiler Design</span>
      </div>
      
      <div>
        <span>Operating Systems</span>
      </div>
      <div>
        <span>DBMS Systems</span>
      </div>
      <div>
        <span>Machine Learning</span>
      </div>
      <div>
        <span>Artificial Intelligence</span>
      </div>
      <div>
        <span>Web Development</span>
      </div>
      <div>
        <span>Computer Networks</span>
      </div>
      <div>
        <span>Cloud Computing</span>
      </div>
    </div>
  );
};

export default Subjectnav;


