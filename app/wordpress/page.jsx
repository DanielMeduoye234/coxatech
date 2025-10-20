"use client"; 

import React from "react";
import Heading from "@/components/Heading/Heading";
import Wordpress from "@/components/Categories/WordpressProjects";

const page = () => {
  return (
    <div>
      <Heading
        title="WordPress Development"
        subtitle="Crafting Custom WordPress Solutions for Your Business"
      />
      <Wordpress />
    </div>
  );
};

export default page;
