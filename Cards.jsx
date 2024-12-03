import React from 'react';
import Navbar from "./Navbar";
import './cards.css';
 // Import the CSS file

const Cards = () => {
    return (
        
     <div >  
     <Navbar />

     <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div id="cardTable" className="cardTable">
  <div className="card-container">
    <div className="card">
      <div className="front-content">
        <p>Seamless Ingress Experience</p>
      </div>
      <div className="content">
        <p className="heading">Seamless Ingress Experience</p>
        <p>Effortless navigation for students to peruse and join their class particulars.</p>
      </div>
    </div>
  </div>

  <div className="card-container">
    <div className="card">
      <div className="front-content">
        <p>Cognitive Class Scheduler</p>
      </div>
      <div className="content">
        <p className="heading">Cognitive Class Scheduler</p>
        <p>Intuitive interface empowering students and tutors to delineate preferred temporal epochs.</p>
      </div>
    </div>
  </div>

  <div className="card-container">
    <div className="card">
      <div className="front-content">
        <p>Attendance Assignment</p>
      </div>
      <div className="content">
        <p className="heading">Attendance Assignment</p>
        <p>Impeccable feature for the scrupulous recording of attendance.</p>
      </div>
    </div>
  </div>

  <div className="card-container">
    <div className="card">
      <div className="front-content">
        <p>NLP Pinnacle Chatbot</p>
      </div>
      <div className="content">
        <p className="heading">NLP Pinnacle Chatbot</p>
        <p>NLP eminence enabling students to elegantly requisition class timetables.</p>
      </div>
    </div>
  </div>
</div>





 
 
    </div>
    
    
    );
};

export default Cards;