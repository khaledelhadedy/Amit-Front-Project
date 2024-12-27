import { FaTruckMoving } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTruckMoving />,
      title: "Free Delivery",
      description:
        "If you are going to use Lorem, you need to be sure there is nothing to worry about.",
    },
    {
      icon: <FaHandHoldingDollar />,
      title: "30 Day Return",
      description:
        "If you are going to use Lorem, you need to be sure there is nothing to worry about.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "24/7 Support",
      description:
        "If you are going to use Lorem, you need to be sure there is nothing to worry about.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 mt-2">
            We provide the best services for our customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl text-blue-500 mb-4">{feature.icon}</div>
              <h5 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h5>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
