"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Нүүр" },
    { href: "/about", label: "Бидний тухай" },
    { href: "/service", label: "Үйлчилгээ" },
    { href: "/booking", label: "Цаг авах" },
    { href: "/contact", label: "Холбоо барих" },
  ];

  return (
    <header className="relative z-50 shadow-lg">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link href={"/"} className="flex items-center justify-center gap-5">
          <img
            src="/images/medlogo-removebg-preview.png"
            alt="MediFirm Logo"
            className="h-[65px] w-[100px] hidden md:block "
          />
          <img
            src="/images/medlogo-removebg-preview (1).png"
            alt="MediFirm Logo"
            className="h-[40px] w-[50px] md:hidden"
          />
        </Link>

        {/* Main Navigation */}
        <nav className="hidden space-x-10 md:flex">
          {navItems.map((item, i) => (
            <Link
              key={`nav-item-${i}`}
              href={item.href}
              className="text-gray-600 hover:text-[#337669] font-bold  uppercase transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl text-gray-700 md:hidden"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 z-40 bg-white bg-opacity-50 rounded-l-lg shadow-lg shadow-gray-600 transition-all duration-500 ease-in-out ${
            isOpen ? "w-2/3 h-full" : "w-0 h-full"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="flex flex-col w-full h-full p-6 bg-white rounded-l-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the menu
          >
            <button
              className="self-end text-3xl text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <div className="flex flex-col h-full gap-10 ">
              <Link href={"/"} className="flex items-center gap-5">
                <img
                  src="/images/medlogo-removebg-preview.png"
                  alt="MediFirm Logo"
                  className="h-[120px] w-[200px]"
                />
              </Link>
              <nav className="flex flex-col flex-1 h-full gap-6">
                {navItems.map((item, i) => (
                  <div key={`nav-item-${i}`}>
                    <Link
                      href={item.href || "#"}
                      className="px-5 py-3 text-lg font-semibold transition-all hover:bg-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </nav>

              <footer className="border-t border-gray-200 ">
                <div className="pt-5 text-[10px] text-center text-gray-400">
                  © Copyright MEDTRAUMA
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
