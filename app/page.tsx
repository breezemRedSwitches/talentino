import React from "react";
import UseCases from "../components/UseCases";
import Testimonials from "../components/Testimonials";
import NeedTalentino from "../components/NeedTalentino";

const Home: React.FC = () => {
  return (
    <div>
      <main>

        <UseCases />
        <NeedTalentino/>
        <Testimonials />
      </main>
    </div>
  );
};

export default Home;
