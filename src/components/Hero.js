import React, { useState } from 'react';
import '../../src/components/Hero.css';

const Hero = () => {
  const images = [
    "/images/hero image.jpg",
    "/images/hero image2.jpg",
    "/images/hero image3.jpg"
  ];

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-background">
        <img
          key={current} /* re-render for animation */
          src={images[current]}
          alt={`Hero ${current + 1}`}
          className="hero-image active"
        />

        {/* Arrows + Dots */}
        <div className="hero-arrows-dots">
          <img
            src="/images/Polygon 1.png"
            alt="Left Arrow"
            className="arrow"
            onClick={prevImage}
          />
          <div className="hero-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
          <img
            src="/images/Polygon 2.png"
            alt="Right Arrow"
            className="arrow"
            onClick={nextImage}
          />
        </div>
      </div>

      {/* Overlay Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>Home Defense Meets Wildfire Science.</h1>
          <p>
            Custom-installed fire, storm, and security shutters — engineered for safety,
            savings, and lasting value.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="hero-buttons-top">
        <button className="btn-primary">Get a Free Quote</button>
        <button className="btn-secondary">Investor Info</button>
      </div>
    </section>
  );
};

export default Hero;
