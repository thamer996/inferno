import React from "react";
import "./TwoImages.css";

const TwoImages = () => {
  return (
    <section className="twoimages">
      <div className="twoimages-container">
        <img src="/images/map.png" alt="Map" className="twoimages-img" />
        <img src="/images/expanded.png" alt="Expanded" className="twoimages-img" />
      </div>
    </section>
  );
};

export default TwoImages;
