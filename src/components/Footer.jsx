import React, { useEffect, useState } from 'react';
import "../styles/Footer.css";

import logo from "../assets/logo.jpg";


function Footer() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    let hideTimeout, showTimeout;

    const toggleMessage = () => {
      hideTimeout = setTimeout(() => setShowText(false), 20000); // Hide after 20s
      showTimeout = setTimeout(() => {
        setShowText(true);
        toggleMessage(); 
      }, 30000); 
    };

    toggleMessage();

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(showTimeout);
    };
  }, []);

  return (
    <footer className="footer">
      {/* Top section with 3 columns */}
      <div className="footer-top">
        {/* Left: Logo & Typewriter */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          {showText && (
            <div className="typewriter">
              Bringing comfort food to your comfort zone. Your favorite flavors. <br />
              Make hunger no disgrace you — order now! 
            </div>
          )}
        </div>

        {/* Center: Contact & Social Icons */}
        <div className="footer-center">
          <h3>Contact</h3>
          <p><i className="fas fa-phone"></i> Phone: +234 08023581209</p>
          <p><i className="fas fa-envelope"></i> Email: Emma434@gmail.com</p>
          <p><i className="fas fa-map-marker-alt"></i> 15, Food Iwofe, Rivers, Nigeria</p>

          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Right: About Us */}
        <div className="footer-right">
          <h3>About Us</h3>
          <p>
            We’re a proudly Nigerian food delivery service bringing your favorite meals straight to your doorstep.
            From local dishes to continental cravings, we deliver fast, hot, and tasty.
          </p>
        </div>
      </div>

      {/* Divider line */}
      <hr className="footer-divider" />

      {/* Bottom: Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} QuickCrow. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;



