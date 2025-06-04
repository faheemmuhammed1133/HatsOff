import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: SlideData[] = [
    {
      id: 1,
      image: 'dist/assets/fall.jpg',
      title: 'Fall Collection 2025',
      subtitle: 'Timeless Elegance in Every Detail',
    },
    {
      id: 2,
      image: 'dist/assets/sign.jpg',
      title: 'Signature Series',
      subtitle: 'Where Luxury Meets Craftsmanship',
    },
    {
      id: 3,
      image: 'dist/assets/shoe.JPG',
      title: 'Limited Edition',
      subtitle: 'Exclusively Crafted for the Discerning',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [activeSlide, isAnimating]);

  const nextSlide = () => {
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (index !== activeSlide && !isAnimating) {
      setIsAnimating(true);
      setActiveSlide(index);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button className="hero-button">Explore Collection</button>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-controls">
        <button className="hero-arrow prev" onClick={prevSlide}>
          <span></span>
        </button>
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${index === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        <button className="hero-arrow next" onClick={nextSlide}>
          <span></span>
        </button>
      </div>
    </section>
  );
};

export default Hero;