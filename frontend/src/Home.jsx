import react from "react";
import Navbar from "./Navbar"; 
import Cards from "./Cards";
import { Link } from "react-router-dom";
import './home.css';
const Home = () =>{
    return (
     <div className="Homepage">  
      <Navbar />
      <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
<div id='title'>
  <span>
    Classify
  </span>
  <br />
  <p className="homeText">Classify is a web platform that streamlines student-teacher interactions. Teachers can create classes, share assignments, and manage submissions, while students can join classes, access materials, and submit their work. It simplifies classroom management and enhances collaboration.
  </p>


  </div>
  
  
     </div>
     
     
    )
}
export default Home;