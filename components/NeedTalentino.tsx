"use client";

import React from "react";
import Image from "next/image";

const WhyTalentino: React.FC = () => {
  return (
    <section className="bg-[#090015] text-white py-16 px-4">
      <div className="max-container">
        <div className="py-8 px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Why You Need Talentino.ai?
            </h1>

            <p className="mt-4 text-lg md:text-xl text-[#B0BEC5]">
              Dealing with resume overload and lengthy role assessments?
              Talentino.ai makes the hiring process quicker, smarter, and
              stress-free.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text comes first on mobile */}
          <div className="space-y-6">
            <div className="text-left">
              <h3 className="text-[#00F2FF] font-medium text-base">
                Onboarding
              </h3>
              <div className="h-1 w-16 bg-[#00F2FF] mt-1 mb-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Seamless Candidate Application Process
            </h2>
            <p className="text-[#B0BEC5]">
              Simplify hiring with easy applications via LinkedIn or a simple
              link.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Reduce manual data entry by up to 90%</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Collect all candidate information in one system</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Focus on finding the right talent</span>
              </li>
            </ul>
          </div>

          {/* Image appears below text on mobile */}
          <div className="flex justify-center md:justify-end items-center">
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src="/need_talentino_1.png"
                alt="Talentino illustration"
                layout="responsive"
                width={600}
                height={600}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-end items-center">
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src="/need_talentino_2.png"
                alt="Talentino illustration"
                layout="responsive"
                width={600}
                height={600}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-left">
              <h3 className="text-[#00F2FF] font-medium text-base">
                Screening
              </h3>
              <div className="h-1 w-16 bg-[#00F2FF] mt-1 mb-4"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Automated Resume Screening and Summaries
            </h2>
            <p className="text-[#B0BEC5] mt-2 text-base">
              Quickly identify top candidates with AI-driven resume parsing.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Save up to 70% of time on resume reviews</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Receive summarized candidate profiles</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Ensure only the most qualified proceed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="text-left">
              <h3 className="text-[#00F2FF] font-medium text-base">
                Interview
              </h3>
              <div className="h-1 w-16 bg-[#00F2FF] mt-1 mb-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Seamless Candidate Application Process
            </h2>
            <p className="text-[#B0BEC5]">
              Simplify hiring with easy applications via LinkedIn or a simple
              link.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Reduce manual data entry by up to 90%</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Collect all candidate information in one system</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Focus on finding the right talent</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end items-center">
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src="/need_talentino_3.png"
                alt="Talentino illustration"
                layout="responsive"
                width={600}
                height={600}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-end items-center">
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src="/need_talentino_2.png"
                alt="Talentino illustration"
                layout="responsive"
                width={600}
                height={600}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-left">
              <h3 className="text-[#00F2FF] font-medium text-base">
                Global Hiring
              </h3>
              <div className="h-1 w-16 bg-[#00F2FF] mt-1 mb-4"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Automated Resume Screening and Summaries
            </h2>
            <p className="text-[#B0BEC5] mt-2 text-base">
              Quickly identify top candidates with AI-driven resume parsing.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Save up to 70% of time on resume reviews</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Receive summarized candidate profiles</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-[#00F2FF]"
                >
                  <path d="M8 0a8 8 0 1 0 16 8 8 8 0 0 0-16 0zm6.354-2.354L7.707 9.293l-2.854-2.854a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 1 0-1.414-1.414z" />
                </svg>
                <span>Ensure only the most qualified proceed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTalentino;
