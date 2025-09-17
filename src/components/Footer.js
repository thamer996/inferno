// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left - Logo + Powered by + Socials */}
        <div className="footer-logo">
          <img 
            src={`${process.env.PUBLIC_URL}/images/LogoInferno.png`} 
            alt="Inferno Roll Logo" 
          />
          <p className="powered-by">Powered by Sun & Security</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Middle - Email + Links */}
        <div className="footer-links">
          <p className="email-label">Email us on:</p>
          <p className="email"><strong>info@infernoshutters.com</strong></p>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Page</a>
        </div>

        {/* Right - Newsletter */}
        <div className="footer-newsletter">
          <p className="newsletter-title">Get updates about our latest news!</p>
          <form>
            <input type="email" placeholder="you@example.com" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
