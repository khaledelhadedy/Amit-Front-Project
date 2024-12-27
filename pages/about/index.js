import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsLayoutWtf } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const About = () => {
  return (
    <div className="main-content">
      {/* Section: Who We Are */}
      <div className="section py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <img
                src="images/about.jpg"
                alt="Who We Are"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quibusdam enim expedita sed nesciunt incidunt
                accusamus adipisci officia libero laboriosam!
              </p>
              <p className="text-gray-600">
                Proin gravida nibh vel velit auctor aliquet. Nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Why Choose Us */}
      <div className="section bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg text-center items-center flex flex-col shadow-md">
              <div className="flex justify-center items-center text-blue-500 text-4xl mb-4">
              <MdOutlineDesignServices/>     
                       </div>
              <h5 className="text-xl font-bold mb-2">Creative Design</h5>
              <p className="text-gray-600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg text-center items-center flex flex-col shadow-md">
              <div className="flex justify-center items-center text-blue-500 text-4xl mb-4">
                <BsLayoutWtf/>
              </div>
              <h5 className="text-xl font-bold mb-2">Flexible Layouts</h5>
              <p className="text-gray-600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg text-center items-center flex flex-col shadow-md">
  <div className="flex justify-center items-center text-blue-500 text-4xl mb-4">
    <MdEmail />
  </div>
  <h5 className="text-xl font-bold mb-2">Email Marketing</h5>
  <p className="text-gray-600">
    There are many variations of passages of Lorem Ipsum available, but the
    majority have suffered alteration in some form.
  </p>
</div>
          </div>
        </div>
      </div>
      <div className="section py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Our Team Members</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "John Muniz",
                role: "Project Engineer",
                image: "images/member1.jpg",
              },
              {
                name: "Alea Brooks",
                role: "Graphics Designer",
                image: "images/member2.jpg",
              },
              {
                name: "Anders Glick",
                role: "Software Developer",
                image: "images/member3.jpg",
              },
              {
                name: "Richard Tice",
                role: "Web Developer",
                image: "images/member4.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-lg mb-4 shadow-md"
                />
                <h5 className="text-xl font-bold">{member.name}</h5>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section: Subscribe Newsletter */}
      <div className="section bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Subscribe Our Newsletter</h3>
          </div>
          <form className="flex flex-col sm:flex-row w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg border border-gray-300"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
