import React, { useState } from "react";
import "./Showcase.css";

const Showcase = () => {
  const [images, setImages] = useState([
    "/images/house.jpg",
    "/images/house2.jpg"
  ]);

  const handlePrev = () => {
    setImages([images[1], images[0]]); // swap images
  };

  const handleNext = () => {
    setImages([images[1], images[0]]); // swap images
  };

  return (
    <section className="showcase">
      <h2 className="showcase-title">Our Showcase</h2>

      <div className="showcase-container">
        {/* Left arrow image */}
        <img
          src="/images/Polygon 1.png"
          alt="Previous"
          className="arrow arrow-left"
          onClick={handlePrev}
        />

        <div className="images-wrapper">
          <div className="image-box">
            <img src={images[0]} alt="Showcase left" />
          </div>
          <div className="image-box">
            <img src={images[1]} alt="Showcase right" />
          </div>
        </div>

        {/* Right arrow image */}
        <img
          src="/images/Polygon 2.png"
          alt="Next"
          className="arrow arrow-right"
          onClick={handleNext}
        />
      </div>

      <h2 className="showcase-subtitle">
        “5 Ways Inferno Shutters Protect Your Home & Save Energy”
      </h2>
    </section>
  );
};

export default Showcase;
