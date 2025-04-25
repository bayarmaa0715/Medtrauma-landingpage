"use client";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { Modal, Form, Input, Button, Select } from "antd";
import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import { data, highlights, services } from "./data";
import BookingButton from "@/components/BookingButton";
import { ArrowRightOutlined } from "@ant-design/icons";
export default function Home() {
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <Hero />

      <div className="container flex flex-col justify-center gap-5 mx-auto md:gap-20">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="mb-6 text-2xl font-bold text-center uppercase">
            Эрүүл жаргалтай ирээдүйг хамтдаа бүтээцгээе
          </h1>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={124}
                  height={124}
                />
                <p className="text-sm font-semibold text-center text-gray-600 uppercase">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 mx-auto md:gap-10">
          <div className="flex flex-col gap-10 p-6 shadow-md md:p-10 rounded-3xl">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0da99e] uppercase">
              Компьютерт томографи CT
            </h2>

            {/* Service Detail Section */}
            <div className="flex flex-col items-stretch gap-8 md:flex-row">
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-[250px] md:h-[400px] overflow-hidden rounded-2xl">
                <Image
                  src={services[0].img}
                  alt="Service Image"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105 rounded-2xl"
                />
              </div>

              {/* Text & Booking */}
              <div className="flex flex-col justify-between gap-6 md:w-1/2">
                <div>
                  {/* <h3 className="text-xl md:text-2xl font-semibold text-[#0da99e] mb-2">
                    {services[0].name}
                  </h3> */}
                  <p className="leading-relaxed text-justify text-gray-700">
                    {services[0].description}
                  </p>
                </div>

                <BookingButton btnClass="w-full md:w-fit bg-[#0da99e] hover:bg-white hover:text-[#0da99e] hover:border border-[#0da99e] text-white px-6 py-2 rounded-xl text-lg transition duration-300" />
              </div>
            </div>

            {/* Service Items Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {data.map((item, i) => (
                <Link
                  href={`/service/${item.id}`}
                  key={i}
                  className="flex items-center justify-between gap-4 bg-white p-4 rounded-xl hover:shadow-lg transition-all group border border-transparent hover:border-[#0da99e]"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 overflow-hidden rounded-full">
                      <Image
                        src={item.img}
                        alt={`Service ${item.name}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <p className="font-medium text-gray-700 group-hover:text-[#0da99e] transition">
                      {item.name}
                    </p>
                  </div>
                  <ArrowRightOutlined className="text-gray-400 group-hover:text-[#0da99e] transition" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10 p-6 shadow-md  md:p-10 rounded-3xl">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0da99e] uppercase">
              Соронзон үелзүүрт томографи MRI
            </h2>

            {/* Service Detail Section */}
            <div className="flex flex-col items-stretch gap-8 md:flex-row">
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-[250px] md:h-[400px] overflow-hidden rounded-2xl">
                <Image
                  src={services[1].img}
                  alt="Service Image"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105 rounded-2xl"
                />
              </div>

              {/* Text & Booking */}
              <div className="flex flex-col justify-between gap-6 md:w-1/2">
                <div>
                  {/* <h3 className="text-xl md:text-2xl font-semibold text-[#0da99e] mb-2">
                    {services[1].name}
                  </h3> */}
                  <p className="leading-relaxed text-justify text-gray-700">
                    {services[1].description}
                  </p>
                </div>

                <BookingButton btnClass="w-full md:w-fit bg-[#0da99e] hover:bg-white hover:text-[#0da99e] hover:border border-[#0da99e] text-white px-6 py-2 rounded-xl text-lg transition duration-300" />
              </div>
            </div>

            {/* Service Items Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {data.map((item, i) => (
                <Link
                  href={`/service/${item.id}`}
                  key={i}
                  className="flex items-center justify-between gap-4 bg-white p-4 rounded-xl hover:shadow-lg transition-all group border border-transparent hover:border-[#0da99e]"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 overflow-hidden rounded-full">
                      <Image
                        src={item.img}
                        alt={`Service ${item.name}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <p className="font-medium text-gray-700 group-hover:text-[#0da99e] transition">
                      {item.name}
                    </p>
                  </div>
                  <ArrowRightOutlined className="text-gray-400 group-hover:text-[#0da99e] transition" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
