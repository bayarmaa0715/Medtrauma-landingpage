import React from "react";
import Image from "next/image";
const services = [
  {
    name: "Компвьютер томографи",
    description: "Lorem ipsum dolor sit amet",
    img: "/images/ct.webp",
  },
  {
    name: "Соронзон үелзүүрт аппарат",
    description: "Lorem ipsum dolor sit amet",
    img: "/images/mri.png",
  },
  {
    name: "Рентген",
    description: "Lorem ipsum dolor sit amet",
    img: "/images/ct.webp",
  },
  {
    name: "Хэт авиан оншилгоо",
    description: "Lorem ipsum dolor sit amet",
    img: "/images/mri.png",
  },
];
const Footer = () => {
  return (
    <div className="md:rounded-t-4xl bg-gray-50">
      <div className="container px-3 mx-auto mt-5 rounded-b-lg md:mt-10 md:pt-10 ">
        <div className="grid gap-10 py-10 md:grid-cols-2">
          <div className="order-last md:pr-10 md:order-1">
            <a
              className="relative block overflow-hidden aspect-[16/9]"
              href="https://www.google.com/maps/place/%D0%A5%D1%83%D1%80%D0%B4+27-%D1%80+%D0%B1%D0%B0%D0%B9%D1%80/@47.8997434,106.9172752,17.43z/data=!4m6!3m5!1s0x5d96938486986a53:0xf185c9adee17f5da!8m2!3d47.9001005!4d106.9198894!16s%2Fg%2F11qzcm3st6?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <Image
                src={"/images/map.png"}
                alt="image"
                fill
                sizes="w"
                priority
                className="object-cover w-auto h-auto transition-all rounded-lg hover:rounded-lg hover:scale-105"
              />
            </a>
          </div>
          <div className="flex flex-col order-1 gap-5 md:gap-10 md:order-last">
            <div>
              <p className="mb-10 text-2xl font-bold text-center">
                Дүрс оншилгооны үйлчилгээ 24 цагын турш үзүүлнэ
              </p>
              <div className="grid items-center grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
                {services?.map((item, i) => (
                  <div
                    className="flex items-center gap-5"
                    key={`foote image ${i}`}
                  >
                    <Image
                      src={item.img}
                      alt="image"
                      width={60}
                      height={60}
                      priority
                      className="object-cover w-auto h-auto transition-all rounded hover:scale-105"
                    />
                    <p className="text-lg uppercase ">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <p className="text-2xl font-bold text-center">
                Бидэнтэй холбогдохыг хүсвэл
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.google.com/maps/place/%D0%A5%D1%83%D1%80%D0%B4+27-%D1%80+%D0%B1%D0%B0%D0%B9%D1%80/@47.8997434,106.9172752,17.43z/data=!4m6!3m5!1s0x5d96938486986a53:0xf185c9adee17f5da!8m2!3d47.9001005!4d106.9198894!16s%2Fg%2F11qzcm3st6?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <span className="mr-3 font-bold">Хаяг:</span> Гэмтэл Согог
                  Судлалын Үндэсний Төвийн баруун талд, 3-р Хороолол,
                  Улаанбаатар
                </a>
                <div className="flex">
                  <a href="tel:77110351">
                    <span className="mr-3 font-bold">Утас:</span>77110351
                  </a>
                  <a href="tel:77110351"> , 77110351</a>
                </div>
                <div className="flex">
                  <a href="mailto:info@medtrauma.mn">
                    <span className="mr-3 font-bold">Имэйл:</span>
                    info@medtrauma.mn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="pt-4 pb-10 bg-white border-t">
          <div className="container justify-between px-4 mx-auto md:flex">
            <div className="uppercase ">Медтравма Эмнэлэг</div>
            <div className="">© Copyright Bayarmaa. All Rights Reserved</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
