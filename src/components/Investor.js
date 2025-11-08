import React from "react";
import { useNavigate } from "react-router-dom"; // <-- import navigate
import "./Investor.css";

const Investor = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/highlights"); // <-- go to highlights page
  };

  return (
    <section className="investor-section">
      <div className="investor-container">
        <h2 className="investor-title">Investor Highlight</h2>
        <p className="investor-text">
          Inferno shutters is expanding. Discover investment opportunities in fire storm and security home protection

.
        </p> 
        <div className="investor-buttons">
          <button onClick={handleClick} className="investor-btn primary-btn">
            Learn More About us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Investor;
