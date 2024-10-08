import React from "react";
import UseCases from "../components/UseCases";
import Testimonials from "../components/Testimonials";

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <p>This is Main Page</p>

        <UseCases />
        <Testimonials />
      </main>
    </div>
  );
};

export default Home;
