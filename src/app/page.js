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
  const filterDataByType = (typeId) => {
    return data.filter((item) => item.serviceTypeId === typeId);
  };
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
          {services.map((item, i) => (
            <div
              key={`servicetype-${i}`}
              className="flex flex-col gap-10 p-6 md:p-10"
            >
              <h2 className="text-2xl font-bold text-center uppercase md:text-3xl">
                {item.name}{" "}
              </h2>

              <div className="flex flex-col items-stretch gap-8 md:flex-row">
                <div className="relative w-full md:w-1/2 h-[250px] md:h-[400px] overflow-hidden rounded-2xl">
                  <Image
                    src={item.img}
                    alt="Service Image"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 rounded-2xl"
                  />
                </div>

                <div className="flex flex-col justify-center gap-6 md:w-1/2">
                  <p className="leading-relaxed text-justify md:text-xl ">
                    {item.description}
                  </p>

                  <BookingButton btnClass="w-full md:w-fit bg-[#0da99e] hover:bg-white hover:text-[#0da99e] hover:border border-[#0da99e] text-white px-6 py-2 rounded-xl text-lg transition duration-300 self-end" />
                </div>
              </div>

              <div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {filterDataByType(item.id)
                    .slice(0, 6)
                    .map((value, index) => (
                      <Link
                        href={`/service/${value.id}?type=${value.serviceTypeId}`}
                        key={index}
                        className="flex items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-lg transition-all group border border-[#0da99e]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 overflow-hidden rounded-full">
                            <Image
                              src={value.img}
                              alt={`Service ${value.name}`}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <p className="font-medium text-gray-700 group-hover:text-[#0da99e] transition md:text-lg uppercase">
                            {value.name}
                          </p>
                        </div>
                        <ArrowRightOutlined
                          className="transition"
                          style={{ color: "#0da99e" }}
                        />
                      </Link>
                    ))}
                </div>
                <div className="flex justify-center w-full mt-6 md:justify-end">
                  <Link
                    href={`/service/${
                      data.find((item) => item.serviceTypeId === item.id)?.id
                    }?type=${item.id}`}
                    className="text-lg font-semibold text-[#0da99e] hover:text-white hover:bg-[#0da99e] border-2 border-[#0da99e] rounded-xl px-6 py-2 transition-all"
                  >
                    Дэлгэрэнгүйг харах
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
