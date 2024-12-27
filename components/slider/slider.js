
'use client';

import React, { useState } from 'react';

export default function Slider({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex items-center h-full bg-black bg-opacity-50">
            <div className="container mx-auto px-4 md:px-8">
              <div className="text-white max-w-md">
                <h5 className="text-xl mb-3">{slide.title}</h5>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  {slide.subtitle}
                </h2>
                <a
                  href={slide.link}
                  className="btn bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition duration-300"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        &#10095;
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
