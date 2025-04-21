import React from "react";
import Image from "next/image";
import BookingButton from "./BookingButton";

const ServiceCard = ({ services, btnClass }) => {
  return (
    <div className="flex flex-col justify-center w-full gap-5 md:flex-row">
      {services?.map((item, index) => (
        <div
          key={`service-${index}`}
          className=" group hover:border hover:border-[#0da99e] md:flex-row  flex flex-col gap-5 p-10 bg-[#f4f4f4] font-bold rounded-4xl md:w-1/2   "
        >
          <div className="relative w-full h-[200px] md:h-[400px] md:w-1/2 rounded-4xl">
            <Image
              src={item.img}
              alt={`Service-img-${index}`}
              fill
              className="object-cover rounded-4xl"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 md:gap-10 md:w-1/2 ">
            <div className="flex flex-col gap-5 md:gap-10">
              <h1 className="text-xl font-bold">{item.name}</h1>
              <p className="font-normal ">{item.description}</p>
            </div>
            <BookingButton btnClass={btnClass} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
