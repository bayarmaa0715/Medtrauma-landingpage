"use client";
import ServiceCard from "@/components/ServiceCard";
import React from "react";
import { services } from "../data";

const Service = () => {
  return (
    <div className="container flex flex-col justify-center gap-5 py-5 mx-auto md:gap-10 md:py-10">
      <h1 className="mb-6 text-2xl font-bold text-center uppercase">
        Компьютерт Томографийн Оношилгоо болон Соронзон Резонанст Томографийн
        Оношилгоо
      </h1>
      <ServiceCard
        services={services}
        btnClass={
          "w-full bg-[#0da99e] group-hover:bg-white group-hover:border-[#0da99e]  group-hover:border group-hover:text-[#0da99e] text-lg text-white px-2 py-1 rounded-xl cursor-pointer "
        }
      />
    </div>
  );
};

export default Service;
