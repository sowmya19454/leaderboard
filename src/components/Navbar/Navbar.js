import React, {useState} from "react";
import "./Navbar.css";
import image5 from "../Images/image5.png"
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="Navbar">
      <img className="image" src={image5} alt="ipl" />
      <ul className={`nav-list ${isNavOpen ? 'nav-list-open' : ''}`}>
      {/* <div className="About"> */}
      <Link to="/Home" className="no-underline">
          Home
        </Link>
        <Link to="/Popularplayer" className="no-underline">
          Popularplayer
        </Link>
        <Link to="/Contact" className="no-underline">
          Contact Us
        </Link>
        <Link to="/UpcomingMatches" className="no-underline">
          UpcomingMatches
        </Link>
        <Link to="/Team" className="no-underline">
          Teams
        </Link>
        <Link to="/Leaderboard" className="no-underline">
          Leaderboard
        </Link>
        <Link to="/Dashboard" className="no-underline">
          Dashboard
        </Link>
        </ul>
        <button className="nav-toggle" onClick={handleNavToggle}>
        {isNavOpen ? 'Close' : 'Open'}
      </button>
      </div>
      
    
  );
}
export default Navbar;
