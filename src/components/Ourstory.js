import React from "react";
import "./Ourstory.css";

const Ourstory = () => {
  return (
    <section className="ourstory">
      <div className="ourstory-container">
        <div className="ourstory-text">
          <h2>Our Story</h2>
          <p>
            Born out of a mission to protect homes from California wildfires,
            Inferno Shutters has grown into a trusted provider of fire, storm,
            and security solutions across the West Coast.
          </p>
        </div>
        <div className="ourstory-image">
          <img 
            src={`${process.env.PUBLIC_URL}/images/bigcandl.png`} 
            alt="Big Candle" 
          />
        </div>
      </div>
    </section>
  );
};

export default Ourstory;
