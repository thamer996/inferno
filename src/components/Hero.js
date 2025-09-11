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
          src={images[current]}
          alt={`Hero ${current + 1}`}
          className="hero-image"
        />
        {/* Arrows + Dots */}
        <div className="hero-arrows-dots">
          <img src="/images/Polygon 1.png" alt="Left Arrow" className="arrow" onClick={prevImage}/>
          <div className="hero-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
          <img src="/images/Polygon 2.png" alt="Right Arrow" className="arrow" onClick={nextImage}/>
        </div>
      </div>

      {/* Overlay Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Protect What Matters.
            Save Energy. <br />Gain Peace of Mind.
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
    </section>
  );
};

export default Hero;
