'use client';

import React from "react";
import Link from "next/link";

const ShopBanners = ({ banners = [] }) => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {banners.map((banner, index) => (
            <div key={index} className="relative group">
              <img
                src={banner.imageSrc}
                alt={banner.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h3 className="text-3xl font-bold">{banner.title}</h3>
                {banner.subtitle && (
                  <h4 className="text-lg font-semibold mt-2">{banner.subtitle}</h4>
                )}
                <Link
                  href={banner.link}
                  className="mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopBanners;
