import React, { useEffect, useRef } from 'react';
import '../styles/FeaturedCollections.css';

interface Collection {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
}

const FeaturedCollections: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const collections: Collection[] = [
    {
      id: 1,
      image: 'https://i.ibb.co/DHWKjBDz/class.jpg',
      category: 'Signature Collection',
      price: '₹1,890'
    },
    {
      id: 2,
      image: 'https://i.ibb.co/35n02YcW/even.jpg',
      title: 'The Classic Tote',',
      title: 'Evening Elegance',
      category: 'Evening Bags',
      price: '₹890'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Voyager Collection',
      category: 'Travel',
      price: '₹2,490'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Urban Crossbody',
      category: 'Everyday Luxury',
      price: '₹1,290'
    },
    {
      id: 5,
      image: 'https://i.ibb.co/KjCc1LRm/ess.jpg',
      title: 'The Classic Tote',',
      title: 'Essential Wallet',
      category: 'Accessories',
      price: '₹490'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Heritage Collection',
      category: 'Limited Edition',
      price: '₹3,990'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('.collection-item');
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section ref={sectionRef} className="featured-collections">
      <div className="collections-header">
        <h2 className="collections-title">Exclusive Collections</h2>
        <p className="collections-subtitle">Crafted with precision and unparalleled attention to detail</p>
      </div>

      <div className="collections-grid">
        {collections.map((collection) => (
          <div key={collection.id} className="collection-item">
            <div className="collection-image-container">
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="collection-image" 
                loading="lazy"
              />
              <div className="collection-overlay">
                <button className="collection-button">Discover More</button>
              </div>
            </div>
            <div className="collection-info">
              <h3 className="collection-title">{collection.title}</h3>
              <p className="collection-category">{collection.category}</p>
              <p className="collection-price">{collection.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="collections-footer">
        <button className="view-all-button">View All Collections</button>
      </div>
    </section>
  );
};

export default FeaturedCollections;
