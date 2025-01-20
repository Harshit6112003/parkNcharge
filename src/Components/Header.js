import React from 'react';
import { Link } from 'react-router-dom';
import '/home/ryuk/reactapp/sparkncharge/src/Css/Style.css';
import logo1 from '../Components/Images/logo-org.png';
function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src={logo1} alt="logo" />
        </div>
        <div className="nav-list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUs">Our Vision</Link></li>
            <li><Link to="/OurTeam">About us</Link></li>
            <li><Link to="/ChargingLocator">EV Stations</Link></li>
          </ul>
        </div>
      </div>
      {/* <nav>
        <ul>
          <li><Link to="/Screen1">contirbute</Link></li>
          <li><Link to="/Screen2">locater</Link></li>
        </ul>
      </nav>*/}
    </header>
  );
}

export default Header;