"use client";
import { data } from "@/app/data";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";

const Detail = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const serviceTypeId = searchParams.get("type");
  console.log("firserviceTypeIdst", serviceTypeId);
  const [open, setOpen] = useState(false);

  const selected = data.find((item) => item.id === Number(id));
  const filterDataByType = (typeId) => {
    return data.filter((item) => item.serviceTypeId === Number(typeId));
  };
  useEffect(() => {
    setOpen(true);
  }, [id]);

  return (
    <div className="flex justify-center px-4 py-6 bg-gray-50 md:py-12">
      <div className="grid w-full grid-cols-1 gap-8 max-w-7xl md:grid-cols-4">
        {/* Sidebar */}
        <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-3xl">
          {filterDataByType(serviceTypeId).map((item, i) => (
            <Link
              href={`/service/${item.id}?type=${item.serviceTypeId}`}
              key={`servicedata-${i}`}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                id == item.id
                  ? "bg-[#E6F4F1] border-l-4 border-[#337669]"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="relative overflow-hidden w-14 h-14 shrink-0">
                <Image
                  src={item.img}
                  alt={`Service-img ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-base font-medium">{item.name}</p>
            </Link>
          ))}
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4 p-6 bg-white shadow-md md:col-span-3 rounded-3xl">
          {selected ? (
            <>
              <h2 className="text-2xl uppercase font-semibold text-[#337669]">
                {selected.serviceTypeId == 1 ? "MRI" : "CT"}-{selected.name}
              </h2>
              <div className="flex gap-5 md:gap-10 ">
                <div className="relative w-full h-64 overflow-hidden md:h-80 rounded-3xl">
                  <Image
                    src={selected.img}
                    alt={selected.name}
                    fill
                    className="transition-all hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-5 md:gap-10">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {selected.duration || "No description provided."}
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {selected.description || "No description provided."}
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {selected.reminder || "No description provided."}
                  </p>
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
