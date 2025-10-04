import React from "react";
import Heading from "@/components/Heading/Heading";
import Next from "@/components/Categories/NextjsProjects";

const page = () => {
  return (
    <div>
      <Heading
        title="React/Nextjs Development"
        subtitle="Crafting Custom React/Nextjs Solutions for Your Business"
      />
      <Next />
    </div>
  );
};

export default page;
