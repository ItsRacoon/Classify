import react from "react";
import Navbar from "./Navbar"; 
import Cards from "./Cards";
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
  {/* <br />
  <span>
    PARALLAX PIXEL STARS
  </span> */}
</div>
     </div>
     
     
    )
}
export default Home;