import React, { useEffect, useState } from 'react';

// Import your images (example)
import slide1 from '/1.jpg';
import slide2 from '/2.jpg';
import slide3 from '/3.jpg';
import { Link } from 'react-router-dom';

const slides = [
  { image: slide1, alt: 'First Slide' },
  { image: slide2, alt: 'Second Slide' },
  { image: slide3, alt: 'Third Slide' },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Slide interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.alt}
          className={`
            absolute w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out
            ${index === current ? 'opacity-100 z-10 scale-105' : 'opacity-0 z-0'}
          `}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-20" />

      {/* Fixed CTA */}
      <div className="absolute z-30 inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Welcome to April Twins</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md">
          Your journey to stunning visuals and creative vibes starts here.
        </p>
        <Link to="/" className="bg-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-xl">
          Contact Us
        </Link>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 w-full flex justify-center z-30 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-8 h-2 rounded-full transition-all duration-300 ${index === current ? 'bg-white scale-125' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
