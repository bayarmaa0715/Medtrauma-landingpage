"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const contactInfo = [
    {
      icon: <EnvironmentOutlined style={{ color: "#337669" }} />,
      title: "Хаяг",
      description: [
        {
          description:
            "Баянгол дүүрэг, 7-р хороо, ГССҮТ-ийн баруун талд, Медтравма эмнэлэг, 16094",
        },
      ],
      color: "#337669",
    },
    {
      icon: <PhoneOutlined style={{ color: "#337669" }} />,
      title: "Холбоо барих",
      description: [
        {
          icon: <MailOutlined />,
          title: "Имэйл",
          description: "info@medtrauma.mn",
          color: "text-red-500",
        },
        {
          icon: <MailOutlined />,
          title: "Утас",
          description: "77110351, 95162407",
          color: "text-red-500",
        },
      ],
      color: "#337669",
    },
    {
      icon: <MailOutlined style={{ color: "#337669" }} />,
      title: "Ажиллах цагийн хуваарь",
      description: [
        {
          description: "Дүрс оншилгооны үйлчилгээ 24 цагын турш үзүүлнэ",
        },
      ],
      color: "#337669",
    },
  ];

  const openModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-100 md:h-96">
        <Image
          src="/images/coverimg.webp"
          alt="Contact Background"
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 flex items-center justify-center p-5 bg-black/30">
          <div className="text-center text-white">
            <h1 className="mb-4 text-lg font-bold uppercase md:text-2xl">
              Медтравма эмнэлэг
            </h1>
            <p className="text-lg uppercase md:text-2xl">
              Дүрс оншилгооны үйлчилгээ 24 цагын турш үзүүлнэ
            </p>
          </div>
        </div>
      </div>

      <div className="container flex flex-col gap-5 p-5 mx-auto md:gap-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((info, index) => (
            <div
              key={`contact card ${index}`}
              className="flex flex-col items-center justify-center p-6 space-y-3 text-center transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
            >
              <div className={`text-4xl ${info.color}`}>{info.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 uppercase">
                {info.title}
              </h3>
              {info.description?.map((item, i) => (
                <p key={`contact desc ${i}`} className="text-gray-600">
                  {item.description}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Зурагнууд */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full h-64 md:h-[450px]">
          <div
            className="relative h-full cursor-pointer md:w-1/2"
            onClick={() => openModal("/images/build.jpg")}
          >
            <Image
              src="/images/build.jpg"
              alt="Building"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div
            className="relative h-full cursor-pointer md:w-1/2"
            onClick={() => openModal("/images/buildMap.jpg")}
          >
            <Image
              src="/images/buildMap.jpg"
              alt="Map"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Modal хэсэг */}
      <Modal
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
        centered
        width={800}
      >
        <div className="relative w-full h-[500px]">
          <Image
            src={currentImage}
            alt="Expanded"
            fill
            className="object-contain rounded-xl"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
