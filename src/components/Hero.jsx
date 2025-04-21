import React from "react";
import Image from "next/image";
import BookingButton from "./BookingButton";
const Hero = () => {
  return (
    <div
      className="relative bg-center bg-no-repeat bg-cover justify-center items-center  flex h-[60vh] text-white  "
      style={{ backgroundImage: "url('/images/cover.jpg')" }}
    >
      <div className="absolute inset-0 z-0 bg-black opacity-[.20]"></div>{" "}
      <div className="absolute flex flex-col items-center justify-center p-4 mx-auto md:top-2/6 md:left-1/6 md:max-w-2xl z-1 text-start">
        <h1 className="mb-6 text-4xl font-bold uppercase ">
          Соронзон Үелзүүрт Томографийн аппарат
        </h1>
        <p className="mb-8 text-lg ">
          Медтравма эмнэлэгт SIEMENS брендийн MAGNETOM ESSENZA 1.5 Tesla
          Соронзон Резонанст томографийн аппаратыг ашиглаж байна
        </p>

        <div className="flex justify-center mb-12">
          <BookingButton
            btnClass={
              "bg-transparent border cursor-pointer border-white text-white px-8 py-3 rounded-lg hover:border-[#337669] hover:border-2  hover:text-[#337669] transition-colors duration-300"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
