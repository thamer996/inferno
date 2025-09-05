import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-container">
            <img
  src="/images/Logo inferno.png"
  alt="Home with security shutters installed"
  className="hero-image"
/>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#products" className="nav-link">Products</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;