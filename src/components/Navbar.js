import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Title centered */}
        <div className="logo-title-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/LogoInferno.png`} 
            alt="Logo"
            className="logo"
          />
          <h1 className="logo-title">Powered by Sun & Security</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
