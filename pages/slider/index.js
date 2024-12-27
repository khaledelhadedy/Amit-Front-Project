// 'use client'
// import React, { useState } from 'react';

// export default function Slider() {
//   const images = [
//     "/images/10.png",       // Image 1
//     "/images/20.png",       // Image 2
//     "/images/30.png",       // Image 3
//   ];

//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//   const plusSlides = (n) => {
//     setCurrentSlideIndex((prevIndex) => (prevIndex + n + images.length) % images.length);
//   };

//   const currentSlide = (n) => {
//     setCurrentSlideIndex(n - 1);
//   };

//   return (
//     <section className="relative w-full  mb-16"> {/* Full screen height with bottom margin */}
//       {/* Slideshow Container */}
//       <div className="relative w-full h-50">
//         {/* Slide 1 */}
//         <div className={`${currentSlideIndex === 0 ? 'block' : 'hidden'}`}>
//           <img src={images[0]} className="w-full h-50 object-cover" />
//         </div>

//         {/* Slide 2 */}
//         <div className={`${currentSlideIndex === 1 ? 'block' : 'hidden'}`}>
//           <img src={images[1]} className="w-full h-50 object-cover" />
//         </div>

//         {/* Slide 3 */}
//         <div className={`${currentSlideIndex === 2 ? 'block' : 'hidden'}`}>
//           <img src={images[2]} className="w-full h-50 object-cover" />
//         </div>

//         {/* Prev and Next Arrows */}
//         <a
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
//           onClick={() => plusSlides(-1)}
//         >
//           &#10094;
//         </a>
//         <a
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
//           onClick={() => plusSlides(1)}
//         >
//           &#10095;
//         </a>
//       </div>

//       {/* Dots */}
//       <div className="absolute bottom-4 w-full text-center z-10">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={`dot cursor-pointer inline-block w-3 h-3 rounded-full bg-gray-500 mx-1 ${currentSlideIndex === index ? 'bg-blue-500' : ''}`}
//             onClick={() => currentSlide(index + 1)}
//           ></span>
//         ))}
//       </div>
//     </section>
//   );
// }

// 'use client';

// import React, { useState } from 'react';

// export default function Slider() {
//   const slides = [
//     {
//       id: 1,
//       image: '/images/10.png',
//       title: 'Get up to 50% off Today Only!',
//       subtitle: 'Woman Fashion',
//       link: 'shop-left-sidebar.html',
//     },
//     {
//       id: 2,
//       image: '/images/20.png',
//       title: '50% off in all products',
//       subtitle: 'Man Fashion',
//       link: 'shop-left-sidebar.html',
//     },
//     {
//       id: 3,
//       image: '/images/30.png',
//       title: 'Taking your Viewing Experience to Next Level',
//       subtitle: 'Summer Sale',
//       link: 'shop-left-sidebar.html',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Slides */}
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
//             index === currentIndex ? 'translate-x-0' : 'translate-x-full'
//           }`}
//           style={{
//             backgroundImage: `url(${slide.image})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="flex items-center h-full bg-black bg-opacity-50">
//             <div className="container mx-auto px-4 md:px-8">
//               <div className="text-white max-w-md">
//                 <h5 className="text-xl mb-3 animate-fade-in">{slide.title}</h5>
//                 <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
//                   {slide.subtitle}
//                 </h2>
//                 <a
//                   href={slide.link}
//                   className="btn bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition duration-300 animate-fade-in"
//                 >
//                   Shop Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Previous and Next Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
//       >
//         &#10094;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
//       >
//         &#10095;
//       </button>

//       {/* Dots for navigation */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }


import Slider from '../../components/slider/slider';
import { getSliderData } from '@/utils/sliderData';


export async function getServerSideProps() {
  const slides = getSliderData()

  return {
    props: { slides }, // Pass slides as props
  };
}


export default function SliderPage({ slides }) {
  return <Slider slides={slides} />;
}
