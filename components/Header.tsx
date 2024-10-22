import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import the MobileMenu only on the client
const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

const Header: React.FC = () => {
  const navLinks = [
    { href: "#", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "About" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Contact" },
  ];

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

     
        <MobileMenu links={navLinks} />

 
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gray-400">
              {link.label}
            </a>
          ))}
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
    </header>
  );
};

export default Header;
