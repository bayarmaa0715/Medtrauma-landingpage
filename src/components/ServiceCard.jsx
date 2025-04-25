import React from "react";
import Image from "next/image";
import BookingButton from "./BookingButton";

const ServiceCard = ({ services, btnClass }) => {
  return (
    <div className="flex flex-col justify-center w-full gap-5 md:flex-row">
      {services?.map((item, index) => (
        <div
          key={`servicecard-${index}`}
          className="group shadow-lg transition duration-300 ease-in-out p-6 bg-white rounded-3xl w-1/2 hover:border hover:border-[#0da99e] flex flex-col md:flex-row gap-6"
        >
          <div className="relative w-full overflow-hidden md:w-1/2 h-52 md:h-full rounded-3xl">
            <Image
              src={item.img}
              alt={`Үйлчилгээ - ${item.name}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 md:w-1/2">
            <h2 className="text-2xl font-semibold ">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <BookingButton
              btnClass="w-full bg-[#0da99e] text-white hover:bg-white hover:text-[#0da99e] hover:border transition-all py-2 rounded-xl"
              defaultService={item.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
