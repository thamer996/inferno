import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left - Logo + Powered by + Socials */}
        <div className="footer-logo">
          <img 
            src={`${process.env.PUBLIC_URL}/images/LogoInferno.png`} 
            alt="Inferno Roll Logo" 
          />
          <p className="powered-by">Powered by Sun & Security</p>
          <div className="social-icons">
            {/* Facebook SVG */}
            <a href="https://www.facebook.com/people/Inferno-Roll-Shutters/61572242558667/" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f81515" width="30px" height="30px">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>

            {/* LinkedIn SVG */}
            <a href="https://x.com/Infernoshutters/following" aria-label="Twitter">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f81515" width="30px" height="30px">
    <path d="M17.21 3H20.49L14.69 9.63L21.68 21H15.83L11.46 14.3L6.33 21H3.05L9.27 14.01L2.55 3H8.55L12.49 9.13L17.21 3ZM16.19 19H17.79L8.43 5H6.73L16.19 19Z"/>
  </svg>
</a>

            {/* Instagram SVG */}
            <a href=" https://www.instagram.com/infernorollshutters?igsh=eGJxdXV3OHFmaTd2&utm_source=qr" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f81515" width="30px" height="30px">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.314.975.975 1.253 2.242 1.315 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.253-3.608 1.315-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.253-2.242-1.315-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.314-3.608.975-.975 2.242-1.253 3.608-1.315C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.77.131 4.633.384 3.675 1.343c-.958.958-1.211 2.095-1.27 3.377C2.013 5.668 2 6.077 2 9.335v5.33c0 3.258.013 3.667.072 4.947.059 1.282.312 2.419 1.27 3.377.958.958 2.095 1.211 3.377 1.27 1.28.059 1.689.072 4.947.072s3.667-.013 4.947-.072c1.282-.059 2.419-.312 3.377-1.27.958-.958 1.211-2.095 1.27-3.377.059-1.28.072-1.689.072-4.947v-5.33c0-3.258-.013-3.667-.072-4.947-.059-1.282-.312-2.419-1.27-3.377-.958-.958-2.095-1.211-3.377-1.27C15.667.013 15.258 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle - Email + Links */}
        <div className="footer-links">
          <p className="email-label">Email us on:</p>
          <p className="email"><strong>info@infernoshutters.com</strong></p>
          <a href="#">(888) 999-8809</a>
          <a href="#">Terms & Conditions</a>
          <Link to="/Privacypolicy">Privacy Policy</Link>
          <a href="#">Page</a>
        </div>

        {/* Right - Newsletter */}
        <div className="footer-newsletter">
          <p className="newsletter-title">Get updates about our latest news!</p>
          <form>
            <input type="email" placeholder="you@example.com" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
