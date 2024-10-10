import React from "react";
import UseCases from "../components/UseCases";
import Testimonials from "../components/Testimonials";
import NeedTalentino from "../components/NeedTalentino";
import Hero from "../components/Hero";
import WelcomeSection from "../components/WelcomeSection";
import SolutionSection from "../components/SolutionSection";

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <Hero/>
        <WelcomeSection/>
        <NeedTalentino/>
        <UseCases />
        <SolutionSection/>
        <Testimonials />
      </main>
    </div>
  );
};

export default Home;
