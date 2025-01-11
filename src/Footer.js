import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        {/* Left Section: Logo and Description */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="./cinilogo.png" alt="Shree Padmini Cinemas Logo" className="footer-logo-img" />
            {/* <h1>Shree Padmini Cinemas</h1> */}
          </div>
          <p className="footer-description">
            Some mysterious kidnaps are happening in a town but wherever the kidnap happens, the kidnapper leaves a code language hint. 
            Due to unusual dreams, Vijay (Hero) gets panicked and suffers psychologically.{' '}
            <a href="#" className="footer-link">Learn More</a>
          </p>
        </div>

        {/* Middle Section: Movie List */}
        <div className="footer-middle">
          <ul className="movie-list">
            <li>Raaraja</li>
            <li>Maathru</li>
            <li>Mahathi</li>
            <li>UpComing Movies</li>
          </ul>
          <ul className="movie-list">
            <li>Raaraja</li>
            <li>Maathru</li>
            <li>Mahathi</li>
            <li>UpComing Movies</li>
          </ul>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="footer-social-icons">
            <a href="#"><img src="instagram.svg" alt="Instagram" className="footer-social-icon" /></a>
            <a href="#"><img src="facebook.svg" alt="Facebook" className="footer-social-icon" /></a>
            <a href="#"><img src="youtube.svg" alt="YouTube" className="footer-social-icon" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Shree Padmini Cinemas all rights Reserved 2024</p>
        <a href="#" className="footer-link">Terms of Use</a> | <a href="#" className="footer-link">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
