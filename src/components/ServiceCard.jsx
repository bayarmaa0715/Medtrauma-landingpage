import React from "react";
import Image from "next/image";
import BookingButton from "./BookingButton";

const ServiceCard = ({ services, btnClass }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-4">
      {services?.map((item, index) => (
        <div className="" key={`service-${index}`}>
          <div className="group hover:bg-[#0da99e] flex flex-col gap-5 p-10 bg-[#f4f4f4] font-bold rounded-4xl ">
            <div className=" relative w-full h-[200px] rounded-4xl">
              <Image
                src={item.img}
                alt={`Service-img-${index}`}
                fill
                className="object-cover rounded-4xl"
              />
            </div>
            <div className="group-hover:text-white">
              <h1 className="text-xl font-bold">{item.name}</h1>
              <p>{item.description}</p>
            </div>
            <BookingButton btnClass={btnClass} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
