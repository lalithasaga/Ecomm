import React from 'react';
import { FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">The Generics</p>
        <div className="social-icons">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaYoutube />
          </a>
          <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaSpotify />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;