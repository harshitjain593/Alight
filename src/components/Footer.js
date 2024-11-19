// src/components/Footer.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../components/Footer.css'

const Footer = () => {
  const navigate = useNavigate(); // Create navigate function

  const handleSectionClick = (sectionId) => {
    // First, navigate to the Home page
    navigate("/");
    
    // After navigating, scroll to the section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer>

      <div className="footer">
      <div>
      <Link to="/" className="footer-link"><img src="logo.jpg"></img></Link>
      </div>

      <div className="footer-sections">
        {/* Internal section links (scrolling) */}
        <button 
          onClick={() => handleSectionClick("hero")} 
          className="footer-link"
        >
          Section 1
        </button>
        <button 
          onClick={() => handleSectionClick("training-program")} 
          className="footer-link"
        >
          Section 2
        </button>
        <button 
          onClick={() => handleSectionClick("section3")} 
          className="footer-link"
        >
          Section 3
        </button>
        <button 
          onClick={() => handleSectionClick("section4")} 
          className="footer-link"
        >
          Section 4
        </button>
        <button 
          onClick={() => handleSectionClick("section5")} 
          className="footer-link"
        >
          Section 5
        </button>
        <button 
          onClick={() => handleSectionClick("section6")} 
          className="footer-link"
        >
          Section 6
        </button>
      </div>

      <div className="contact">
        <Link to="/contact" className="footer-link">Contact Us</Link>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
