import React from "react";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
const Footer = () => {
  return (
    <footer className="section-bg-dark">
      <div className="max-container flex flex-col py-5">
        <div className="flex flex-col justify-between items-start gap-3 md:items-center md:flex-row px-4">
          <div className="flex flex-col max-w-[750px]">
            <h2 className="text-white text-[42px] leading-[50px] font-normal">
              Join the Future of Hiring with Talentino.ai
            </h2>
            <p className="text-white text-[14px] font-normal py-3">
              Be among the first to experience the power of AI-driven
              recruitment. Sign up for early access and get exclusive updates as
              we prepare to launch this fall.Be among the first to experience
              the power of AI-driven recruitment. Sign up for early access and
              get exclusive updates as we prepare to launch this fall.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <PrimaryButton
                bgColor="#00F2FF"
                textColor="#090015"
                hoverColor="#00D1E0"
              >
                Get Early Access
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-semi-white my-8"></div>

        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-white font-bold text-xl">
                <Image src="/logo.svg" alt="Logo" width={126} height={24} />
                <p className="text-lg">Subscribe to newsletter</p>
              </div>
              <form className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                <button
                  className="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Invite
                </button>
                <input
                  type="email"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="Your email address"
                  required
                />
              </form>
            </div>
            <div className="space-y-2 text-white md:flex md:justify-center md:flex-col md:items-center">
              <p className="font-bold text-lg">Product</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Chatbot
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sign in
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2 text-white">
              <p className="font-bold text-lg">Company</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2 text-white">
              <p className="font-bold text-lg">Contact Info</p>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <Image src="/phone.svg" alt="Phone" width={16} height={24} />
                  <span>+92 28 27 09 89</span>
                </li>
                <li className="flex items-center">
                  <Image src="/email.svg" alt="Email" width={16} height={24} />
                  <span>contact@hire.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
