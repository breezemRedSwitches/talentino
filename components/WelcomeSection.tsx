'use client';

import React from 'react';
import PrimaryButton from './PrimaryButton';
import Image from 'next/image';

const WelcomeSection: React.FC = () => {
  return (
    <section className="bg-[#EAF5F4] text-center py-12 md:py-16 px-4">
      <div className="max-w-3xl lg:max-w-4xl mx-auto">
      
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to <span className="text-[#00A5FF]">Talentino.ai</span>
        </h1>

     
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1B1B1B] mb-6">
          The Future of Hiring
        </h2>

      
        <p className="text-[#5F6368] text-base md:text-lg lg:text-xl mb-8">
          Looking for a better way to hire? Talentino uses AI to help startups and small businesses simplify recruitment, evaluate candidates more effectively, and create a smoother experience for everyone. Let’s work together to find your next great hire!
        </p>

       
        <PrimaryButton bgColor="#FFFFFF" textColor="#000000" hoverColor="#F0F0F0">
          Get Early Access
        </PrimaryButton>

       
        <div className="mt-12 lg:mt-16">
          <Image
            src="/future_of_hiring.png"
            alt="Dashboard Preview"
            className="mx-auto max-w-full h-auto"
            width={500}
            height={300}
          />
       
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
