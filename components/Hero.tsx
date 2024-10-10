'use client';

import React from 'react';
import PrimaryButton from './PrimaryButton';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#090015] text-white py-12 md:py-20 px-4 text-center">
      <div className="max-w-3xl lg:max-w-4xl mx-auto">
      
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Talentino.ai – Smarter, Faster Hiring for Startups & SMBs
        </h1>

      
        <p className="text-[#B0BEC5] text-base md:text-lg lg:text-xl mb-8">
          Be the first to streamline your hiring process with Talentino. Early access starts in Fall 2024!
        </p>

       
        <PrimaryButton
          bgColor="#00F2FF"
          textColor="#090015"
          hoverColor="#00D1E0"
        >
          Get Early Access
        </PrimaryButton>
      </div>
    </section>
  );
};

export default HeroSection;
