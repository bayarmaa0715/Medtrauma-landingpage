import React from "react";
import Image from "next/image";
import BookingButton from "./BookingButton";
const Hero = () => {
  return (
    <div
      className="relative bg-center bg-no-repeat bg-cover justify-center items-center  flex h-[60vh] text-white  "
      style={{ backgroundImage: "url('/images/ct1.jpeg')" }}
    >
      <div className="absolute inset-0 z-0 bg-black opacity-[.35]"></div>{" "}
      <div className="absolute z-10 flex flex-col items-start justify-center p-4 mx-auto text-start md:top-2/6 md:left-1/6 md:max-w-2xl">
        <h1 className="text-lg font-bold text-white uppercase md:text-3xl">
          Медтравма эмнэлэг
        </h1>

        <div className="flex flex-col gap-2 mt-4 md:text-xl text-white/90">
          <p className="">Эрүүл жаргалтай ирээдүйг хамтдаа бүтээцгээе</p>
          <p className="">MRI- Соронзон Резонанст Томографи</p>
          <p className="">СТ- Компьютерт Томографи 24 цагийн оношилгоо</p>
        </div>

        <div className="flex self-start mt-8">
          <BookingButton btnClass="bg-transparent border cursor-pointer border-white text-white px-8 py-3 rounded-lg hover:bg-[#337669]  hover:border-[#337669] hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
