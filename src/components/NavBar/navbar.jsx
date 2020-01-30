import React from "react";
import "./nav.css"
import {Link} from "react-router-dom";


const NavBar = () => (
  
<nav className="nav"> 
  
        <div className="nav-title">
          <h1>Matias Cicchitti</h1>
        </div>

        <div className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li> <a href="https://github.com/Matti50" target="blank"> Projects</a> </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

</nav>

)
export default NavBar;