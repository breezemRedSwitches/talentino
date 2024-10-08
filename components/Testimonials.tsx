import React from 'react';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#eafaf6] py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#090015] mb-8">
        What Our Early Users Are Saying?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <Image
            src="/images/user_1.png"
            alt="User 1"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="text-sm md:text-base text-[#090015]">
            "Talentino.ai has completely transformed our hiring process. The AI-driven tools have saved us countless hours and improved the quality of our hires."
          </p>
        </div>

        <div className="bg-[#7CE7E2] p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <Image
            src="/images/user_1.png" 
            alt="User 2"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="text-sm md:text-base text-white">
            "The WorkMap assessments provided deep insights into candidate skills that we couldn’t get from resumes alone. Highly recommend Talentino.ai!"
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <Image
            src="/images/user_1.png"
            alt="User 3"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="text-sm md:text-base text-[#090015]">
            "Talentino.ai has completely transformed our hiring process."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
