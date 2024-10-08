'use client';

import React, { useState } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#090015] text-white">
      <div className="max-container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-24 md:w-32 lg:w-40 h-auto">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={160} 
              height={30}
              className="w-full h-auto"
            />
          </div>
         
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static left-0 top-16 w-full md:w-auto bg-[#090015] md:bg-transparent md:flex md:items-center md:space-y-0 md:space-x-6 text-sm font-medium`}
        >
          <a href="#" className="block md:inline-block hover:text-gray-400 px-4 py-2">
            Features
          </a>
          <a href="#" className="block md:inline-block hover:text-gray-400 px-4 py-2">
            Pricing
          </a>
          <a href="#" className="block md:inline-block hover:text-gray-400 px-4 py-2">
            About
          </a>
          <a href="#" className="block md:inline-block hover:text-gray-400 px-4 py-2">
            Blog
          </a>
          <a href="#" className="block md:inline-block hover:text-gray-400 px-4 py-2">
            Contact
          </a>
        </nav>
        <div className="hidden md:block">
          <a
            href="#"
            className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#090015] transition"
          >
            Get started
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden text-center bg-[#090015] py-4">
          <a
            href="#"
            className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#090015] transition"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
