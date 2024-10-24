import Image from "next/image";
import React from "react";

const UseCases = () => {
  return (
    <section className="py-12 bg-white text-center max-container">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#090015] mb-6">
        Use Cases
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-12 px-4 text-base md:text-lg">
        Discover how Talentino.ai helped a tech firm accelerate its software engineer recruitment,
        reduce bias, and improve the quality of its hires in record time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <div className="bg-white p-6  text-left">
          <Image
            src="/use_case_1.png"
            alt="Use Case Image 1"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-lg md:text-xl font-semibold my-4">
            Speed Up Software Engineer Hiring with Talentino.ai
          </h3>
          <p className="text-gray-600 ext-sm mt-2 tmd:text-base">
            A mid-sized tech company that builds cloud-based software. They were growing fast and needed to hire software engineers quickly while maintaining high technical and soft skills standards.
          </p>
        </div>

        <div className="bg-white p-6  text-left">
          <Image
            src="/use_case_2.png"
            alt="Use Case Image 2"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-lg md:text-xl font-semibold my-4">
            The Challenge: Too Many Candidates, Too Little Time
          </h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            The company needed help filtering through many applicants. They needed to screen for coding and soft skills like communication and teamwork. The old hiring process took too long, with multiple interviews delaying project delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
