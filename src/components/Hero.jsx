import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="md:flex justify-between space-y-5">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Соронзон Үелзүүрт Томографийн аппарат
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Magnetic Resonance Imaging-MIRI
        </p>
        <p className="text-gray-600 text-lg mb-8">
          Медтравма эмнэлэгт SIEMENS брендийн MAGNETOM ESSENZA 1.5 Tesla
          Соронзон Резонанст томографийн аппаратыг ашиглаж байна
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-[#337669] text-white px-8 py-3 rounded-full hover:bg-white hover:border-[#337669] hover:border-2  hover:text-[#337669] transition-colors duration-300">
            Book appointment now
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="relative w-[200px] h-[100px] ">
          <Image src={"/images/mri.png"} alt="mri" fill />
        </div>
        <div className="relative w-[200px] h-[100px] ">
          <Image src={"/images/ct.webp"} alt="mri" fill />
        </div>
      </div>
    </div>
  );
};

export default Hero;
