import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">HattsOff</h2>
            <p className="footer-tagline">Timeless Elegance, Redefined</p>
          </div>
          
          <div className="footer-nav-container">
            <div className="footer-nav">
              <h3 className="footer-nav-title">Collections</h3>
              <ul className="footer-nav-list">
                <li><a href="#" className="footer-nav-link">New Arrivals</a></li>
                <li><a href="#" className="footer-nav-link">Signature Collection</a></li>
                <li><a href="#" className="footer-nav-link">Evening Bags</a></li>
                <li><a href="#" className="footer-nav-link">Accessories</a></li>
                <li><a href="#" className="footer-nav-link">Limited Edition</a></li>
              </ul>
            </div>
            
            <div className="footer-nav">
              <h3 className="footer-nav-title">Client Services</h3>
              <ul className="footer-nav-list">
                <li><a href="#" className="footer-nav-link">Contact Us</a></li>
                <li><a href="#" className="footer-nav-link">Shipping & Returns</a></li>
                <li><a href="#" className="footer-nav-link">Care Guide</a></li>
                <li><a href="#" className="footer-nav-link">FAQs</a></li>
              </ul>
            </div>
            
            <div className="footer-nav">
              <h3 className="footer-nav-title">About</h3>
              <ul className="footer-nav-list">
                <li><a href="#" className="footer-nav-link">Our Heritage</a></li>
                <li><a href="#" className="footer-nav-link">Craftsmanship</a></li>
                <li><a href="#" className="footer-nav-link">Sustainability</a></li>
                <li><a href="#" className="footer-nav-link">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-middle">
          <div className="footer-social">
            <a href="https://www.instagram.com/hatsoff_accessories/" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/HatsOffAcc/" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://x.com/Hatsoff_Acc" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} HattsOff. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
            <a href="#" className="footer-legal-link">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;