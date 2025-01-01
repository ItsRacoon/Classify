import react from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="Homepage">
      <Navbar />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <span>Classify</span>
        <br />
        <p className="homeText">
          Classify is an innovative web-based platform that simplifies classroom
          management and fosters collaboration between students and teachers.
          Teachers can create classes, share assignments, and upload resources,
          while students can join classes, access materials, and submit their
          work online. The platform ensures an organized and efficient learning
          environment by streamlining the process of sharing and tracking
          assignments.
        </p>
        <span className="aboutUs">
          <Link to="/Cards">About Us</Link>
        </span>
      </div>
    </div>
  );
};
export default Home;
