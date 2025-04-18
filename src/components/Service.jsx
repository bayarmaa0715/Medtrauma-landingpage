import React from "react";
import Image from "next/image";

const Section = () => {
  const services = [
    {
      title: "Home visit services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
      img: "/images/img1.jpg",
    },
    {
      title: "In-patient care",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
      img: "/images/img3.jpg",
    },
    {
      title: "Laboratory services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore",
      img: "/images/img4.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Our Professional Services.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-lg transition-all duration-300 hover:bg-[#337669c4] cursor-pointer overflow-hidden"
          >
            <div className="text-4xl mb-4 transition-colors duration-300 group-hover:text-white  relative w-full h-3/5">
              <Image src={service.img} alt={`Service image ${index}`} fill />
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  {service.description}
                </p>
              </div>

              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-white transform transition-all duration-300 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        ))}
      </div>

      <hr className="my-12 border-gray-300" />

      <div className="flex items-start gap-4 bg-green-50 p-6 rounded-lg">
        <span className="text-2xl font-bold text-green-600">✔</span>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>
    </div>
  );
};

export default Section;
