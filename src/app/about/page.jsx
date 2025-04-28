"use client";
import React, { useEffect, useState } from "react";
import {
  MedicineBoxOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  FileTextOutlined,
  PrinterOutlined,
  DollarOutlined,
  GiftOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import { Card, Col, Row } from "antd";
import Image from "next/image";
import { communityImages } from "../data";

const About = () => {
  const features = [
    {
      title: "Хамгийн сүүлийн үеийн аппарат",
      description:
        "Phillips brilliance BR64 slice компьютерт томографи, SIEMENS брендийн MAGNETOM ESSENZA 1.5 Tesla Соронзон Резонанст томографийн аппарат",
      icon: (
        <MedicineBoxOutlined style={{ color: "#337669", fontSize: "40px" }} />
      ),
    },
    {
      title: "MRI, CT шинжилгээнд яаралтай үйлчилгээ",
      description:
        "Хэвтэрийн болон хүнд өвчтөнгүүдэд үнэ төлбөргүй үйлчлэх түргэний машинтай",
      icon: (
        <ClockCircleOutlined style={{ color: "#337669", fontSize: "40px" }} />
      ),
    },
    {
      title: "Туршлагатай мэргэжилтнүүд",
      description:
        "Олон жил мэргэжлээрээ ажилласан чадварлаг, ахлах, тэргүүлэх зэргийн эмч мэргэжилтнүүдийн багтай /дүрс оношилгооны эмч, техниологич",
      icon: <TeamOutlined style={{ color: "#337669", fontSize: "40px" }} />,
    },
    {
      title: "Шинжилгээний хариу хурдан гаргана",
      description:
        "MRI шинжилгээний хариу 24-48 цагийн дотор, СТ шинжилгээ 2 цагийн дотор гаргана",
      icon: <FileTextOutlined style={{ color: "#337669", fontSize: "40px" }} />,
    },
    {
      title: "Офсет хэвлэлийн аргаар хэвлэлт",
      description:
        "Эмч нарт зургийг харахад тод байх, шинжлүүлэгч авч явахад хялбар байх боломжийг бүрдүүлж өгсөн",
      icon: <PrinterOutlined style={{ color: "#337669", fontSize: "40px" }} />,
    },
    {
      title: "2024 оны тариф",
      description:
        "2024 онд мөрдөх үнийн тариф нь бусад хувийн эмнэлэгээс хямд, зургийн чанар нь илүү сайн",
      icon: <DollarOutlined style={{ color: "#337669", fontSize: "40px" }} />,
    },
    {
      title: "Шөнийн хөнгөлөлт",
      description:
        "Шөнийн цагаар буюу 02:00-06:00 цагийн хооронд үйлчлүүлэх тохиолдолд 20%-ийн хөнгөлөлтийг эдлэх",
      icon: <GiftOutlined style={{ color: "#337669", fontSize: "40px" }} />,
    },
    {
      title: "24 цагийн цахимаар цаг захиалах",
      description: "Шинжилгээний хариуг үйлчлүүлэгчдэд утсаар мессеж илгээх",
      icon: <CalendarOutlined style={{ color: "#337669", fontSize: "40px" }} />,
    },
    {
      title: "Магадлан итгэмжлэгдсэн",
      description:
        "Дүрс оношилгооны тасаг нь улсын хэмжээнд 24 цагаар үйлчилгээ үзүүлдэг",
      icon: (
        <SafetyCertificateOutlined
          style={{ color: "#337669", fontSize: "40px" }}
        />
      ),
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === communityImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [communityImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? communityImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === communityImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="p-5 md:py-10">
      <div className="container flex flex-col gap-5 mx-auto md:gap-10">
        <h1 className="text-lg font-bold text-center uppercase md:text-2xl ">
          Медтравма эмнэлэг
        </h1>
        <div className={`flex flex-col md:flex-row items-stretch gap-8 `}>
          <div className="flex flex-col justify-center gap-6 md:w-1/2">
            <p className="leading-relaxed text-justify ">
              “ДУБ” ХХК нь 2007 онд байгуулагдсан бөгөөд 2017 оноос үйл
              ажиллагаагаа өргөжүүлэн Гэмтэл Согогийн тусламж үйлчилгээ бүхий
              Дүрс оношилгооны “МедТравма” эмнэлгийг үүсгэн байгуулсан.
              Улаанбаатар хотын Баянгол дүүрэг, 31-р хороо Ард Аюушийн өргөн
              чөлөө 90/6 тоот байршиж, 05/22/2699 дугаар бүхий үйл ажиллагаа
              эрхлэх тусгай зөвшөөрөлтэй. МедТравма эмнэлгийн Дүрс оношилгооны
              тасаг нь улсын хэмжээнд 24 цагаар үйлчилгээ үзүүлдэг. Тус тасаг нь
              компьютерт томографи (СТ) болон Соронзон үелзүүрт томографи (MRI)
              зэрэг хамгийн сүүлийн үеийн дэвшилтэт тоног төхөөрөмжүүдийг
              ашиглан, 5 их эмч, 11 технологичтой мэргэшсэн баг хамт олон эрүүл
              мэндийн тусламж үйлчилгээг өндөр чанартай, мэргэжлийн түвшинд
              үзүүлдэг. Дүрс оношилгооны шинжилгээний дүгнэлтүүдийг өндөр хурдны
              интернет ашиглан цаг алдалгүй Улаанбаатар хотын төрийн болон
              хувийн хэвшлийн эмнэлэгүүд, аймаг, дүүргийн дүрс оношилгооны
              тасгуудтай холбогдон гарган өгдөг. Эмнэлгийн ажиллах арга барил нь
              Эрүүл мэндийг хамгаалах технологи-Гэмтэл согогийн тусламж
              үйлчилгээний MNS 5315-1:2005 стандартын дагуу бүрдүүлж, шаардлагыг
              бүрэн баримталж ажилладаг
            </p>
          </div>
          <div className="relative w-full md:w-1/2 h-[250px] md:h-[400px] overflow-hidden rounded-2xl">
            <Image
              src={"/images/coverimg.webp"}
              alt="Service Image"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105 rounded-2xl"
            />
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row-reverse items-stretch gap-8 `}
        >
          <div className="flex flex-col justify-center gap-6 md:w-1/2">
            <h1 className="font-bold">
              Гэмтэл Согогийн тусламж үйлчигээ, дэвшилтэт технологи, тоног
              төхөөрөмж бүхий Дүрс оношилгооны хэсэг бүхий ЭМНЭЛЭГ
            </h1>
            <p className="leading-relaxed text-justify ">
              Гэмтэл Согогийн тусламж үйлчилгээг, дүрс оношилгооны тоног
              төхөөрөмж бүхий оношилгооны тасгийн үйл ажиллагаатай уялдуулан 24
              цагийн турш үзүүлнэ. Манай улсын хүн амын дунд халдварт бус
              өвчлөлийн тэргүүлэх шалтгаан болж байгаа өвчлөл 2003 онтой
              харьцуулахад 10 000 хүн амд 1-2,5 дахин нэмэгдсэний дотор гэмтэл,
              хордлого ба гадны шалтгаант эмгэгийн 87,6 хувь нь Улаанбаатар
              хотын иргэд өвчилсөн байна. Гэмтэл хордлого ба гадны шалтгаант
              өвчин эмгэгийн үеийн тусламж, үйлчилгээний хүртээмж хангалтгүй,
              гэмтэл согогийн тусламж, үйлчилгээ төвлөрөлтэй ачаалал өндөр. Иймд
              гэмтэл, согогийн тусламж,үйлчилгээг бүхий л талаар хөгжүүлж, улсын
              эмнэлэгийн ачааллыг хуваалцах зорилго тавин ажиллаж байна.
            </p>
          </div>
          <div className="relative w-full md:w-1/2 h-[250px] md:h-[400px] overflow-hidden rounded-2xl">
            <Image
              key={`communityImage ${currentImageIndex}`}
              src={communityImages[currentImageIndex].img}
              alt="Service Image"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105 rounded-2xl"
            />

            {/* Previous/Next Buttons */}
            <div className="absolute flex justify-between w-full p-2 top-1/2">
              <button
                onClick={goToPrevious}
                className="flex items-center justify-center w-6 h-6 text-white transition bg-gray-300 rounded-full cursor-pointer hover:bg-gray-600 bg-opacity-70 hover:bg-opacity-100 shrink-0"
              >
                <ArrowLeftOutlined className="text-sm" />
              </button>
              <button
                onClick={goToNext}
                className="flex items-center justify-center w-6 h-6 text-white transition bg-gray-300 rounded-full cursor-pointer hover:bg-gray-600 bg-opacity-70 hover:bg-opacity-100 shrink-0"
              >
                <ArrowRightOutlined className="text-sm" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <h1 className="text-lg font-bold text-center uppercase md:text-2xl ">
            Медтравма эмнэлэгийн давуу тал
          </h1>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 md:gap-10">
            {features.map((feature, index) => (
              <div
                key={`add ${index}`}
                className="relative flex flex-col gap-3 p-4 text-center bg-white border-b-[1px] border-gray-200 rounded-lg group hover:shadow-lg"
              >
                <p className="">{feature.icon}</p>
                <h3 className="text-lg font-semibold text-center">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
