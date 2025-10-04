import React from "react";
import Heading from "@/components/Heading/Heading";
import Graphics from "@/components/Categories/GraphicsProjects";

const page = () => {
  return (
    <div>
      <Heading
        title="Graphics Design"
        subtitle="Crafting Beauitful Graphics Designs for Your Business!"
      />
      <Graphics />
    </div>
  );
};

export default page;
