import React, { useState } from 'react';
import '../styles/Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setIsError(true);
      return;
    }
    
    // Simulating form submission
    setIsError(false);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Join Our Exclusive Circle</h2>
          <p className="newsletter-description">
            Subscribe to receive updates on new collections, exclusive offers, and fashion insights.
          </p>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsError(false);
                }}
                placeholder="Your email address"
                className={`newsletter-input ${isError ? 'error' : ''}`}
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </div>
            {isError && (
              <p className="error-message">Please enter a valid email address.</p>
            )}
            {isSubmitted && (
              <p className="success-message">Thank you for subscribing!</p>
            )}
          </form>
          
          <p className="newsletter-privacy">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;