import React from "react";
import "./Investor.css";

const Investor = () => {
  return (
    <section className="investor-section">
      <div className="investor-container">
        <h2 className="investor-title">Investor Highlight</h2>
        <p className="investor-text">
          Inferno Shutters is expanding. Discover investment opportunities in energy-efficient home protection.
        </p>
        <div className="investor-buttons">
          <button className="investor-btn primary-btn">Learn More</button>
          <button className="investor-btn secondary-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Investor;
