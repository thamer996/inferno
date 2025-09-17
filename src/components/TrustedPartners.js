import React from "react";
import "./TrustedPartners.css";

const partnerLogos = [
  `${process.env.PUBLIC_URL}/images/1.png`,
  `${process.env.PUBLIC_URL}/images/2.png`,
  `${process.env.PUBLIC_URL}/images/3.png`,
  `${process.env.PUBLIC_URL}/images/5.png`,
  `${process.env.PUBLIC_URL}/images/6.png`,
  `${process.env.PUBLIC_URL}/images/7.png`,
  `${process.env.PUBLIC_URL}/images/8.png`,
  `${process.env.PUBLIC_URL}/images/9.png`,
];

const TrustedPartners = () => {
  return (
    <div className="trusted-partners">
      <h2>Trusted Partners</h2>
      <div className="logos-banner">
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className={`logo logo${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedPartners;
