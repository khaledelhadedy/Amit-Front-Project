'use client';

import React from 'react';
import { FaRegAddressCard } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="main_content">
      {/* Contact Info Section */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-md">
              <div className="text-4xl text-blue-500 mb-4">
                <FaRegAddressCard/>
               </div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p className="text-gray-600 text-center">
                123 Street, Old Trafford, London, UK
              </p>
            </div>
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-md">
              <div className="text-4xl text-blue-500 mb-4">
               <FaEnvelopeOpen/>
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Address</h3>
              <a
                href="mailto:info@yourmail.com"
                className="text-blue-500 hover:underline"
              >
                info@yourmail.com
              </a>
            </div>
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-md">
              <div className="text-4xl text-blue-500 mb-4">
                <FaPhoneAlt/>
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-gray-600">01000900050</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim. Nullam id varius nunc id varius nunc.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name *"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email *"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone No. *"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Subject"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                name="message"
                rows="4"
                placeholder="Message *"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg w-full hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

            {/* Placeholder for Map or Other Content */}
            <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24288.73591242417!2d-0.13464931801561188!3d51.50986512965915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb193bc9fa3%3A0x248f6d3b6d36b69c!2sOld%20Trafford%20Stadium%2C%20Sir%20Matt%20Busby%20Way%2C%20Stretford%2C%20Manchester%20M16%200RA%2C%20UK!5e0!3m2!1sen!2sus!4v1692703285012!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="h-64 w-full md:h-full border-0"
            ></iframe>
          </div>
         
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-white text-lg font-semibold mb-4 md:mb-0">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex w-full md:w-auto space-x-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                required
                className="w-full md:w-72 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-white text-blue-500 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
