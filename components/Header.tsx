import React from "react";

const Header = () => {
  return (
    <header className="bg-[#0a001d] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="flex items-center space-x-2">
          <img
            src="/branding/logo.svg"
            alt="Talentino Logo"
            className="h-8"
          />
          <span className="text-xl font-bold">talentino</span>
        </div>

      
        <nav className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:text-gray-300">
            Features
          </a>
          <a href="#" className="hover:text-gray-300">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Blog
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav>

        <div>
          <a
            href="#"
            className="border border-white px-4 py-2 hover:bg-white hover:text-black transition duration-300"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
