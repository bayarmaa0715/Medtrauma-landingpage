"use client";
import Hero from "@/components/Hero";
import Image from "next/image";
import { Modal, Form, Input, Button, Select } from "antd";
import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
export const services = [
  {
    name: "Компьютерт томографи CT",
    description:
      "64 зүслэгт КТ аппарат нь эдийн 0,625 мм нарийвчлалтай 3н хэмжээст тэнхлэгээр буюу аксиаль, корональ, сагиталь зүслэгээр яс,зөөлөн эд, судсыг 3D дүрслэн харуулдаг",
    img: "/images/ct1.jpeg",
  },
  {
    name: "Соронзон үелзүүрт томографи MRI",
    description:
      "АІ буюу хиймэл оюун ухаанаар тооцоолж дүрсийг боловсруулдаг төхөөрөмжид суурилсан. Хиймэл оюун ухаан ашигласнаар зургийн нарийвчлал өндөр байхаас гадна шинжилгээний хугацаа богиносдог буюу (15-30мин) байна",
    img: "/images/mri1.jpeg",
  },
  // {
  //   name: "Рентген",
  //   description: "Lorem ipsum dolor sit amet",
  //   img: "/images/mri.png",
  // },
  // {
  //   name: "Хэт авиан оншилгоо",
  //   description: "Lorem ipsum dolor sit amet",
  //   img: "/images/mri.png",
  // },
];
export default function Home() {
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <Hero />

      <div className="container flex flex-col justify-center gap-5 mx-auto md:gap-20">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="mb-6 text-2xl font-bold text-center uppercase">
            Эрүүл жаргалтай ирээдүйг хамтдаа бүтээцгээе
          </h1>
          <div className="flex justify-between ">
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={"/images/service/24-7.png"}
                alt="Image-24-"
                width={124}
                height={124}
                className="object-cover "
              />
              <p className="text-lg font-bold text-center text-gray-600 uppercase">
                24 цагийн оншилгоо
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={"/images/service/24-7.png"}
                alt="Image-24-"
                width={124}
                height={124}
                className="object-cover "
              />
              <p className="text-lg font-bold text-center text-gray-600 uppercase">
                24 цагийн оншилгоо
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={"/images/service/24-7.png"}
                alt="Image-24-"
                width={124}
                height={124}
                className="object-cover "
              />
              <p className="text-lg font-bold text-center text-gray-600 uppercase">
                24 цагийн оншилгоо
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={"/images/service/24-7.png"}
                alt="Image-24-"
                width={124}
                height={124}
                className="object-cover "
              />
              <p className="text-lg font-bold text-center text-gray-600 uppercase">
                24 цагийн оншилгоо
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 mx-auto md:gap-10">
          <h1 className="mb-6 text-2xl font-bold text-center uppercase">
            Компьютерт томографи CT болон Соронзон үелзүүрт томографи MRI
          </h1>
          <ServiceCard
            services={services}
            btnClass={
              "w-full bg-[#0da99e] group-hover:bg-white group-hover:border-[#0da99e]  group-hover:border group-hover:text-[#0da99e] text-lg text-white px-2 py-1 rounded-xl cursor-pointer "
            }
          />
        </div>
      </div>
    </div>
  );
}
