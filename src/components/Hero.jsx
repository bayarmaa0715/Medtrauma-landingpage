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
          Медтравма эмнэлэг
        </h1>
        <p className="mb-8 text-lg ">
          Эрүүл жаргалтай ирээдүйг хамтдаа бүтээцгээе
        </p>
        <p className="mb-8 text-lg ">MRI- Соронзон Резонанст Томографи</p>
        <p className="mb-8 text-lg ">
          СТ- Компьютерт Томографи 24 цагийн оношилгоо{" "}
        </p>

        <div className="flex self-start mb-12">
          <BookingButton
            btnClass={
              "bg-transparent border cursor-pointer border-[#337669] text-[#337669] px-8 py-3 rounded-lg hover:bg-[#337669]  hover:border-2  hover:text-white transition-colors duration-300"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
