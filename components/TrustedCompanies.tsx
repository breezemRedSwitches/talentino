import React from 'react';
import Image from 'next/image';

const TrustedCompanies = () => {
  return (
    <section className="bg-white py-16 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#090015] mb-6">
          The world&apos;s best companies trust Talentino.ai
        </h2>

      
        <div className="flex justify-center items-center space-x-8 opacity-70 mb-6">
         
          <div className="grayscale hover:grayscale-0 transition-all">
            <Image
              src="/slider_1.png"
              alt="Capsule"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

         
          <div className="grayscale hover:grayscale-0 transition-all">
            <Image
              src="/slider_2.png"
              alt="Spherule"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

          
          <div className="grayscale hover:grayscale-0 transition-all">
            <Image
              src="/slider_3.png"
              alt="FocalPoint"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

          
          <div className="grayscale hover:grayscale-0 transition-all">
            <Image
              src="/slider_4.png"
              alt="Acme Corp"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

         
          <div className="grayscale hover:grayscale-0 transition-all">
            <Image
              src="/slider_5.png"
              alt="Segment"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

          
          <div className="grayscale hover:grayscale-0 transition-all">
            <Image
              src="/slider_6.png"
              alt="GlobalBank"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        <p className="text-gray-600 text-sm">
          Talentino.ai is used by over 1200+ companies across the globe
        </p>
      </div>
    </section>
  );
};

export default TrustedCompanies;
