import React from 'react';
import '../../src/components/Hero.css'; // Import CSS file

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-background">
        <img
          src="/images/hero image.jpg"
          alt="Home with security shutters installed"
          className="hero-image"
        />
      </div>

      {/* Overlay Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Protect What Matters.
            Save Energy. <br />Gain
            Peace of Mind.
          </h1>
          <p>
            Custom-installed fire, storm, and security shutters — engineered for safety,<br />
            savings, and lasting value.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get a Free Quote</button>
            <button className="btn-secondary">Investor Info</button>
          </div>
        </div>
      </div>

      {/* Fire Image + Candle at bottom right */}
      <div className="fire-hero-container">
        <img src="/images/firehero.png" alt="Fire Hero" className="fire-hero" />
        <img src="/images/candle.png" alt="Candle" className="candle" />
      </div>

      {/* Navigation Button (N) */}
     
    </section>
  );
};

export default Hero;
