"use client";
import Hero from "@/components/Hero";
import Image from "next/image";
import { Modal, Form, Input, Button, Select } from "antd";
import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
export const services = [
  {
    name: "Компвьютер томографи",
    description: "Lorem ipsum dolor sit amet",
    img: "/images/img2.webp",
  },
  {
    name: "Соронзон үелзүүрт аппарат",
    description: "Lorem ipsum dolor sit amet",
    img: "/images/mri.png",
  },
  {
    name: "Рентген",
    description: "Lorem ipsum dolor sit amet",
    img: "/images/mri.png",
  },
  {
    name: "Хэт авиан оншилгоо",
    description: "Lorem ipsum dolor sit amet",
    img: "/images/mri.png",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <Hero />
      <div className="container flex flex-col justify-center gap-5 mx-auto md:gap-10">
        <h1 className="mb-6 text-2xl font-bold text-center uppercase">
          Компьютерт Томографийн Оношилгоо болон Соронзон Резонанст Томографийн
          Оношилгоо
        </h1>
        <ServiceCard
          services={services}
          btnClass={
            "w-full bg-[#0da99e] group-hover:bg-white group-hover:text-[#0da99e]  text-lg text-white px-2 py-1 rounded-xl cursor-pointor "
          }
        />
      </div>
    </div>
  );
}
