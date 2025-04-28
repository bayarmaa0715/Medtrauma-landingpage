import React from "react";
import Image from "next/image";
import { services } from "@/app/data";

const Footer = () => {
  return (
    <div className="md:rounded-t-4xl bg-gray-50">
      <div className="container px-3 mx-auto rounded-b-lg md:pt-10 ">
        <div className="grid gap-10 py-10 md:grid-cols-2">
          <div className="order-last md:pr-10 md:order-1">
            <a
              className="relative block overflow-hidden aspect-[16/9]"
              href="https://www.google.com/maps/place/24+%D1%86%D0%B0%D0%B3%D0%B8%D0%B9%D0%BD+MRI,+CT+Center+-+%D0%9C%D0%B5%D0%B4%D1%82%D1%80%D0%B0%D0%B2%D0%BC%D0%B0+%D1%8D%D0%BC%D0%BD%D1%8D%D0%BB%D1%8D%D0%B3+-/@47.9201622,106.8556289,17z/data=!3m1!4b1!4m6!3m5!1s0x5d9692da1710d663:0x5b3c5b271af1439b!8m2!3d47.9201622!4d106.8556289!16s%2Fg%2F11f3rw9ddf?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"
              target="_blank"
            >
              <Image
                src={"/images/map.png"}
                alt="image"
                fill
                sizes="w"
                priority
                className="object-cover w-auto h-auto transition-all border rounded-lg hover:rounded-lg hover:scale-105"
              />
            </a>
          </div>
          <div className="flex flex-col order-1 gap-5 md:gap-10 md:order-last">
            <div>
              {/* <p className="mb-10 text-2xl font-bold text-center">
                Дүрс оншилгооны үйлчилгээ 24 цагын турш үзүүлнэ
              </p> */}
              {/* <div className="grid items-center grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
                {services?.map((item, i) => (
                  <div
                    className="flex items-center gap-5"
                    key={`foote image ${i}`}
                  >
                    <div className="relative w-20 h-20 rounded-full shrink-0">
                      <Image
                        src={item.img}
                        alt="image"
                        fill
                        priority
                        className="object-cover w-auto h-auto transition-all rounded-full hover:scale-105"
                      />
                    </div>

                    <p className="text-lg uppercase ">{item.name}</p>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-2xl font-bold text-center">
                Бидэнтэй холбогдохыг хүсвэл
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.google.com/maps/place/24+%D1%86%D0%B0%D0%B3%D0%B8%D0%B9%D0%BD+MRI,+CT+Center+-+%D0%9C%D0%B5%D0%B4%D1%82%D1%80%D0%B0%D0%B2%D0%BC%D0%B0+%D1%8D%D0%BC%D0%BD%D1%8D%D0%BB%D1%8D%D0%B3+-/@47.9201622,106.853054,17z/data=!3m1!4b1!4m6!3m5!1s0x5d9692da1710d663:0x5b3c5b271af1439b!8m2!3d47.9201622!4d106.8556289!16s%2Fg%2F11f3rw9ddf?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"
                  target="_blank"
                >
                  <span className="mr-3 font-bold">Хаяг:</span> Баянгол дүүрэг
                  7-р хороо, ГССҮТ-ийн баруун талд Медтравма эмнэлэг, 16094
                </a>
                <div className="flex">
                  <a href="tel:77110351">
                    <span className="mr-3 font-bold">Утас:</span>77110351
                  </a>
                  <a href="tel:95162407"> , 95162407</a>
                </div>
                <div className="flex">
                  <a href="mailto:info@medtrauma.mn">
                    <span className="mr-3 font-bold">Имэйл:</span>
                    info@medtrauma.mn
                  </a>
                </div>
                <div className="flex">
                  <a href="https://www.facebook.com/24MRI">
                    <span className="mr-3 font-bold">Facebook:</span>
                    24 цагийн MRI CT Center - Медтравма Эмнэлэг - Medtrauma
                    Hospital
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="py-3 border-t border-gray-200 md:py-5">
          <div className="container items-center justify-between px-4 mx-auto md:flex">
            <img
              src="/images/medlogo-removebg-preview (1).png"
              alt="MediFirm Logo"
              className="h-[30px] w-[40px] "
            />

            <div className="">© Copyright MEDTRAUMA. All Rights Reserved</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
