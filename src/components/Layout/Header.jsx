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
    <header className="flex justify-center w-full shadow-xl ">
      <div className="container flex items-center justify-between py-4">
        <Link href={"/"} className="flex items-center gap-5">
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
        </Link>

        <nav className="hidden space-x-10 md:flex">
          {navItems.map((item, i) => (
            <Link
              key={`nav-item-${i}`}
              href={item.href}
              className="text-gray-600 hover:text-[#337669] font-bold text-lg uppercase underline_animation"
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
