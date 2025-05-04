import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { banners } from '../data/products';

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate the banner every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % banners.length
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden shadow-md">
      {/* Banner slides */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className="min-w-full relative bg-gray-100"
          >
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent flex flex-col justify-center pl-8 md:pl-16">
              <h2 className="text-white text-xl md:text-3xl font-bold mb-2">{banner.title}</h2>
              <p className="text-white text-sm md:text-lg">{banner.subtitle}</p>
              <button className="bg-white text-[#2874F0] px-4 py-2 mt-4 rounded-sm text-sm md:text-base font-medium w-max">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Left/Right Controls */}
      <button 
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow-md hover:bg-white transition-colors"
      >
        <ChevronLeft size={20} className="text-gray-800" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow-md hover:bg-white transition-colors"
      >
        <ChevronRight size={20} className="text-gray-800" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;