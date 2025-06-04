import React from 'react';
import '../styles/BagsShowcase.css';

interface Bag {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
}

const BagsShowcase: React.FC = () => {
  const bags: Bag[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'The Metropolitan',
      description: 'Perfect for the modern sophisticate',
      price: '₹1,890'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Evening Allure',
      description: 'Timeless elegance for special moments',
      price: '₹2,290'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Heritage Tote',
      description: 'Our signature piece reimagined',
      price: '₹1,690'
    }
  ];

  return (
    <section className="bags-showcase">
      <div className="showcase-header">
        <h2 className="showcase-title">Signature Bags</h2>
        <p className="showcase-subtitle">Each piece tells a story of craftsmanship and elegance</p>
      </div>

      <div className="showcase-grid">
        {bags.map((bag) => (
          <div key={bag.id} className="showcase-item">
            <div className="showcase-image-container">
              <img 
                src={bag.image} 
                alt={bag.title} 
                className="showcase-image"
                loading="lazy"
              />
              <div className="showcase-overlay">
                <button className="showcase-button">View Details</button>
              </div>
            </div>
            <div className="showcase-info">
              <h3 className="showcase-item-title">{bag.title}</h3>
              <p className="showcase-description">{bag.description}</p>
              <p className="showcase-price">{bag.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BagsShowcase;