import React from 'react';
import '../styles/CategoryExplorer.css';

interface Category {
  id: number;
  image: string;
  title: string;
  description: string;
}

const CategoryExplorer: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Evening Bags',
      description: 'Timeless elegance for special occasions'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Signature Collection',
      description: 'Our iconic designs reimagined'
    },
    {
      id: 3,
      image: 'dist/assets/shoe.JPG',
      title: 'Travel Essentials',
      description: 'Luxury companions for your journey'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/14679216/pexels-photo-14679216.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Accessories',
      description: 'Complete your look with refinement'
    }
  ];

  return (
    <section className="category-explorer">
      <div className="category-header">
        <h2 className="category-title">Explore Our World</h2>
        <p className="category-subtitle">Discover curated collections that define luxury</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <div className="category-image-container">
              <img 
                src={category.image} 
                alt={category.title} 
                className="category-image"
                loading="lazy"
              />
              <div className="category-content">
                <h3 className="category-item-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <button className="category-button">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryExplorer;