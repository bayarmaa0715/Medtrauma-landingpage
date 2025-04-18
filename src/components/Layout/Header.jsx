"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: "/", label: "Нүүр" },
    { href: "/service", label: "Үйлчилгээ" },
    { href: "/booking", label: "Цаг авах" },
    { href: "/contact", label: "Холбоо барих" },
  ];
  return (
    <header className="w-full ">
      <div className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            src="/images/logo.jpg"
            alt="MediFirm Logo"
            className="h-[40px] w-[40px]"
          />
          <img
            src="/images/logo-text.jpg"
            alt="MediFirm Logo Text"
            className="h-[20px] w-[200px]"
          />
        </div>

        <nav className="hidden md:flex space-x-10">
          {navItems.map((item, i) => (
            <Link
              key={`nav-item-${i}`}
              href={item.href}
              className="text-gray-600 hover:text-[#337669] font-bold text-lg uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
