import { useState, useEffect } from 'react';

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Preload images to ensure smooth experience after loading
    const preloadImages = async () => {
      const imageUrls = [
        'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1920'
      ];
      
      const preloadPromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      
      try {
        await Promise.all(preloadPromises);
      } catch (error) {
        console.error('Failed to preload images', error);
      }
    };

    // Simulate loading and preload images
    const timer = setTimeout(() => {
      preloadImages().then(() => {
        setIsLoading(false);
      });
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return { isLoading };
};