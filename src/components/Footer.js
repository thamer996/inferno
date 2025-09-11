import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo */}
        <div className="footer-logo">
          <img src="/images/inferno-roll-logo.png" alt="Inferno Roll Logo" />
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="#">Sun & Security Corporate Site</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Page</a>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <p>Get updates about our latest news!</p>
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
