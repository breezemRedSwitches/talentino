"use client";

import React from "react";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

const SolutionSection: React.FC = () => {
  return (
    <>
      <section className="bg-[#090015] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            The Solution: Talentino.ai
          </h2>
          <p className="text-lg md:text-xl text-[#B0BEC5] mb-12 text-center">
            The company used Talentino.ai to speed up and improve hiring. Here's
            how:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-2 mb-2">
            <div className="bg-[#1F1630] p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[400px]">
              <div className="relative mb-4 w-full h-40 md:h-48 lg:h-56">
                <Image
                  src="/solution_2.png"
                  alt="AI-Powered Screening"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Screening</h3>
              <p className="text-[#B0BEC5]">
                The platform analyzed video interviews, assessing technical
                skills, communication, and cultural fit.
              </p>
            </div>

            <div className="bg-[#1F1630] p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[400px]">
              <div className="relative mb-4 w-full h-40 md:h-48 lg:h-56">
                <Image
                  src="/solution_1.png"
                  alt="Skill-Based Assessments"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Skill-Based Assessments
              </h3>
              <p className="text-[#B0BEC5]">
                Coding challenges were added, with AI scoring problem-solving
                and technical proficiency.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-2 ">
            <div className="bg-[#1F1630] p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[400px]">
              <div className="relative mb-4 w-full h-40 md:h-48 lg:h-56">
                <Image
                  src="/solution_3.png"
                  alt="Faster Shortlisting"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Faster Shortlisting</h3>
              <p className="text-[#B0BEC5]">
                AI reduced the hiring cycle from 3 weeks to 1, ranking
                candidates by key skills for quicker selection.
              </p>
            </div>

            <div className="bg-[#1F1630] p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[400px]">
              <div className="relative mb-4 w-full h-40 md:h-48 lg:h-56">
                <Image
                  src="/solution_4.png"
                  alt="Bias-Free Hiring"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Bias-Free Hiring</h3>
              <p className="text-[#B0BEC5]">
                AI ensured an unbiased, skills-based selection process, focusing
                on merit over opinions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#090015] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Results: Faster, Better, and More Diverse Hiring
          </h2>
          <p className="text-lg md:text-xl text-[#B0BEC5] mb-12">
            Talentino.ai delivered faster, more efficient hiring while improving
            candidate quality and diversity.
          </p>

           
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1F1630] p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div className="relative w-full h-32 mb-4">
                <Image
                  src="/benefits_3.png"
                  alt="35% Better Hires"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">35% better hires</h3>
              <p className="text-[#B0BEC5]">
                35% better hires by finding candidates with both coding and
                communication skills.
              </p>
            </div>

            <div className="bg-[#1F1630] p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div className="relative w-full h-32 mb-4">
                <Image
                  src="/benefits_1.png"
                  alt="Diverse Hiring"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Diverse Hiring</h3>
              <p className="text-[#B0BEC5]">
                More diverse hires, thanks to the bias-free screening process.
              </p>
            </div>

            <div className="bg-[#1F1630] p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div className="relative w-full h-32 mb-4">
                <Image
                  src="/benefits_2.png"
                  alt="Happy Sourcing"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Happy Sourcing</h3>
              <p className="text-[#B0BEC5]">
                Hiring managers were happier with the quicker, more efficient
                process and better-quality candidates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionSection;
