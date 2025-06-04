import React from 'react';
import '../styles/CompanyStory.css';

const CompanyStory: React.FC = () => {
  const storyPoints = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Heritage of Excellence',
      description: 'Since our founding, we have been dedicated to creating timeless pieces that transcend trends.'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Artisanal Craftsmanship',
      description: 'Every piece is meticulously crafted by skilled artisans, preserving traditional techniques.'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Sustainable Future',
      description: 'We are committed to responsible luxury, ensuring our practices respect both tradition and the environment.'
    }
  ];

  return (
    <section className="company-story">
      <div className="story-header">
        <h2 className="story-title">Our Heritage</h2>
        <p className="story-subtitle">A legacy of luxury craftsmanship</p>
      </div>

      <div className="story-grid">
        {storyPoints.map((point) => (
          <div key={point.id} className="story-item">
            <div className="story-image-container">
              <img 
                src={point.image} 
                alt={point.title} 
                className="story-image"
                loading="lazy"
              />
            </div>
            <div className="story-content">
              <h3 className="story-item-title">{point.title}</h3>
              <p className="story-description">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStory;