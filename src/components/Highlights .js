import React, { useEffect } from "react";
import "./Highlights .css";

const Highlights = () => {
  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="highlights-section">
      <div className="highlights-container">
        {/* Title */}
        <h2 className="highlights-title">Investor Highlight</h2>

        {/* Intro */}
        <p className="highlights-subtitle">Inferno-Roll Shutters is expanding.</p>

        <p className="highlights-text">
          Wildfires and extreme weather events are reshaping housing markets and insurance coverage across the country. Inferno Shutters is positioned at the intersection of home protection, energy efficiency, and long-term property value.
        </p>

        {/* Bullet points */}
        <ul className="highlights-list">
          <li>
            <p className="highlight-point-title">Proven Market Demand:</p>
           

 Wildfires caused <span className="highlight-red">$250 billion</span>{" "} in damages last year, yet fewer than 13.5% of homes have ember-resistant protections. Homeowners are seeking resilient solutions that also reduce energy costs and security. 
            
          </li>

          <li>
            <p className="highlight-point-title">Scalable Business Model:</p>
            Custom installations, trusted manufacturing partners, and recurring service programs create predictable revenue and sustainable growth.
          </li>

          <li>
            <p className="highlight-point-title">Expanding Reach:</p>
            With <span className="highlight-red">15% growth</span> in installations year-over-year, Inferno Shutters is scaling from California to high-risk regions nationwide, building brand equity and a reputation for premium fire-resistant, energy-efficient, and  security.

          </li>

          <li>
            <p className="highlight-point-title">Defensible Advantage:</p>
           Proprietary shutter designs uniquely combine fire protection, energy efficiency, and security—a triple value proposition unmatched by commodity providers
          </li>

          <li>
            <p className="highlight-point-title">Investor Opportunity:</p> With strong demand, strategic partnerships, and a clear go-to-market plan, Inferno Shutters presents a compelling investment case with <span className="highlight-red"> projected ROI of 6–10%</span> and national scalability.
           
          </li>
        </ul>

        {/* Closing */}
        <p className="highlights-text">
        Now is the time to partner in shaping the future of fire-resilient home protection. Investor packages and structured opportunities are available for strategic partners ready to grow with us.
        </p>

        {/* Contact */}
        <div className="highlights-contact">
          <h3>Connect With Our Team</h3>
          <p>
            Contact:{" "}
            <a href="mailto:info@infernosutters.com">
              info@infernosutters.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
