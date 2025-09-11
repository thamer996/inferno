import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
  const features = [
    {
      image: '/images/first-icon.png',
      title: 'Fire ',
      description: 'Proven protection from wildfire embers, storms, and severe winds.'
    },
    {
      image: '/images/second-icon.png',
      title: 'Security',
      description: 'Defend against intruders with reinforced shutter systems.'
    },
    {
      image: '/images/third-icon.png',
      title: 'Savings',
      description: 'Cut utility bills by up to 30% with energy-efficient insulation.'
    },
    {
      image: '/images/fourth-icon.png',
      title: 'Service',
      description: 'Financing and maintenance ensure long-term performance.'
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        <h2 className="section-title">Why Choose Inferno-Roll Shutters?</h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.image} alt={feature.title} className="feature-image" />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
