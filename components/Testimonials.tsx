import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="bg-[#eafaf6] py-16 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#090015] mb-8">
          What Our Early Users Are Saying?
        </h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto px-4">
          
          {/* Testimonial 1 */}
          <div className="bg-[#FDEAE7] p-6 rounded-lg shadow-md flex items-center space-x-4">
            <Image
              src="/user_1.png"
              alt="User 1"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="text-sm md:text-base text-[#090015]">
              &ldquo;Talentino.ai has completely transformed our hiring process. The AI-driven tools have saved us countless hours and improved the quality of our hires.&rdquo;
            </p>
          </div>

          <div className="bg-[#7CE7E2] p-6 rounded-lg shadow-md flex items-center space-x-4">
            <Image
              src="/user_1.png"
              alt="User 2"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="text-sm md:text-base text-white">
              &ldquo;The WorkMap assessments provided deep insights into candidate skills that we couldn’t get from resumes alone. Highly recommend Talentino.ai!&rdquo;
            </p>
          </div>

          <div className="bg-[#FDEAE7] p-6 rounded-lg shadow-md flex items-center space-x-4">
            <Image
              src="/user_1.png"
              alt="User 3"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="text-sm md:text-base text-[#090015]">
              &ldquo;Talentino.ai has completely transformed our hiring process.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
