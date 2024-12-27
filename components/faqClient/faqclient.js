'use client';

import React, { useState } from 'react';

export default function FAQClient({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-10 px-4">
      <div className="container bg-[#f7f8fb] py-10 ps-28">
        <div className="page-title space-y-4">
          <h1 className="text-5xl">Frequently asked questions</h1>
        </div>
      </div>
      <div className="container mx-auto">
        {faqs.map((faqCategory, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {faqCategory.category}
            </h3>
            <div className="space-y-4">
              {faqCategory.items.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg overflow-hidden shadow-md"
                >
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 focus:outline-none"
                    onClick={() => toggleFAQ(`${categoryIndex}-${index}`)}
                  >
                    <span className="text-gray-700 text-lg font-medium">
                      {item.question}
                    </span>
                    <span className="text-gray-500">
                      {activeIndex === `${categoryIndex}-${index}` ? '-' : '+'}
                    </span>
                  </button>
                  {activeIndex === `${categoryIndex}-${index}` && (
                    <div className="px-4 py-3 bg-white text-gray-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
