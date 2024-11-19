import React from 'react';
import '../components/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
          <div className="navbar">
           <div>
           <Link to="/"><img src='alight.png'></img></Link>
           </div>
           
           <div className="contact">
           <Link to="/contact">Contact Us</Link>
           </div>
          </div>
              
           
        </nav>
      );
}

export default Navbar;