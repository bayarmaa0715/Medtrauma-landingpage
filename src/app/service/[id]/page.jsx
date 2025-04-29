"use client";
import { data } from "@/app/data";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import BookingButton from "@/components/BookingButton";

const Detail = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const serviceTypeId = searchParams.get("type");
  const [selectedData, setSelectedData] = useState(
    data.find((item) => item.id === Number(id))
  );
  const handleChange = (item) => {
    setSelectedData(data.find((value) => item.id === value.id));
  };
  const filterDataByType = (typeId) => {
    return data.filter((item) => item.serviceTypeId === Number(typeId));
  };

  return (
    <div className="flex justify-center px-4 py-6 bg-gray-50 md:py-12">
      <div className="container flex flex-col md:flex-row gap-5 mx-auto md:gap-10 md:h-[500px]">
        {/* Sidebar */}
        <div className="flex w-full gap-4 p-4 overflow-auto bg-white shadow-md md:w-1/4 md:flex-col rounded-3xl ">
          {filterDataByType(serviceTypeId).map((item, i) => (
            <div className="flex gap-2 md:flex-col " key={`servicedata-${i}`}>
              <div
                className={`flex items-center gap-3 px-4 py-3  transition-all duration-200  ${
                  selectedData.id == item.id
                    ? "bg-[#E6F4F1]  md:border-t-0 border-t-4 md:border-l-4 rounded-xl border-[#337669]"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleChange(item)}
              >
                <div className="relative overflow-hidden w-14 h-14 shrink-0">
                  <Image
                    src={item.img}
                    alt={`Service-img ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-medium md:text-lg ">{item.name}</p>
              </div>
              <div className="w-0.5 h-full md:w-full md:h-0.5 bg-gray-100 "></div>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="p-6 bg-white shadow-md md:w-3/4 rounded-3xl">
          {selectedData ? (
            <>
              <h2 className="md:text-2xl text-lg uppercase font-semibold mb-5 md:mb-10 text-[#337669]">
                {selectedData.serviceTypeId == 1 ? "MRI" : "CT"}-
                {selectedData.name}
              </h2>
              <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10 ">
                <div className="relative w-full h-64 overflow-hidden md:h-80 rounded-3xl">
                  <Image
                    src={selectedData.img}
                    alt={selectedData.name}
                    fill
                    className="transition-all hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-5 md:gap-10 ">
                  <p className="text-lg font-bold leading-relaxed text-gray-700">
                    Үргэжлэх хугацаа:{" "}
                    <span className="font-normal">
                      {" "}
                      {selectedData.duration || "No description provided."}
                    </span>
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {selectedData.description || "No description provided."}
                  </p>
                  <p className="text-lg font-bold leading-relaxed text-gray-700">
                    Анхаарах зүйлс:{" "}
                    <span className="font-normal">
                      {selectedData.reminder || "No description provided."}
                    </span>
                  </p>
                  <BookingButton btnClass="w-full bg-[#0da99e] text-white hover:bg-white hover:text-[#0da99e] hover:border transition-all py-2 rounded-xl" />
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Service not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
