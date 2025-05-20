import React from 'react';
import './Footer.css';
import logo from '../assets/footer-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <img src={logo} alt="Male Fashion" className="logo" />
          <p>Style redefined for the modern man. Stay confident. Stay fashionable.</p>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li>Trending Styles</li>
            <li>Accessories</li>
            <li>Formal Wear</li>
            <li>Streetwear</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Contact</li>
            <li>Return Policy</li>
            <li>Shipping Info</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4>Subscribe</h4>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <p className="copy">© 2025 Male Fashion. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
