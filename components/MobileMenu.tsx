'use client';

import React, { useState } from "react";

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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

      {isOpen && (
        <nav className="absolute left-0 top-16 w-full bg-[#090015] text-sm font-medium text-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-2 hover:text-gray-400"
            >
              {link.label}
            </a>
          ))}

          <div className="py-4">
            <a
              href="#"
              className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#090015] transition"
            >
              Get started
            </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
