import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import CategoryExplorer from './components/CategoryExplorer';
import BagsShowcase from './components/BagsShowcase';
import CompanyStory from './components/CompanyStory';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { useLoader } from './hooks/useLoader';
import './styles/App.css';

function App() {
  const { isLoading } = useLoader();

  useEffect(() => {
    // Set page title
    document.title = "HattsOff • Timeless Elegance";
    
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader">
          <div className="loader-content">
            <div className="loader-logo">HattsOff</div>
            <div className="loader-bar">
              <div className="loader-progress"></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <FeaturedCollections />
            <CategoryExplorer />
            <BagsShowcase />
            <CompanyStory />
            <Newsletter />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;