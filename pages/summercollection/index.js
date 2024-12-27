import React from 'react';

const SummerCollection = () => {
  return (
    <div className="bg-blue-100 py-12 my-10 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
          {/* Text Content */}
          <div className="md:w-1/2 md:pl-8 text-center md:text-left">
            <div className="mb-4">
              <span className="text-lg text-gray-600 uppercase">New season trends!</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-2">
                Best Summer Collection
              </h2>
            </div>
            <h5 className="text-xl text-gray-700 mb-6">Sale Get up to 50% Off</h5>
            <a
              href="/shop"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition"
            >
              Shop Now
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src="/images/tranding_img.png"
              alt="Trending Summer Collection"
              className="w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerCollection;
