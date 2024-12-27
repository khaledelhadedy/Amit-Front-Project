'use client';

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Lissa Castro",
    role: "Designer",
    image: "/images/user_img1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
  },
  {
    name: "Alden Smith",
    role: "Designer",
    image: "/images/user_img2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
  },
  {
    name: "Daisy Lana",
    role: "Designer",
    image: "/images/user_img3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
  },
  {
    name: "John Becker",
    role: "Designer",
    image: "/images/user_img4.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Our Client Say!
          </h2>
          <p className="text-gray-600 mt-2">
            What our clients think about us.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="relative mx-auto max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg text-center">
          <p className="text-gray-600 italic mb-6 leading-relaxed">
            "{testimonials[currentIndex].text}"
          </p>

          {/* User Info */}
          <div className="flex flex-col items-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <h5 className="text-lg font-bold text-gray-800">
              {testimonials[currentIndex].name}
            </h5>
            <span className="text-sm text-gray-500">
              {testimonials[currentIndex].role}
            </span>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-2 md:-left-10 transform -translate-y-1/2 bg-gray-100 text-gray-700 p-3 rounded-full shadow hover:bg-gray-200 transition"
            onClick={prevSlide}
          >
            <FaArrowLeft className="text-lg" />
          </button>
          <button
            className="absolute top-1/2 right-2 md:-right-10 transform -translate-y-1/2 bg-gray-100 text-gray-700 p-3 rounded-full shadow hover:bg-gray-200 transition"
            onClick={nextSlide}
          >
            <FaArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
