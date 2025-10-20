"use client"; 

import React from "react";
import Heading from "@/components/Heading/Heading";
import Shopify from "@/components/Categories/ShopifyProjects";

const page = () => {
  return (
    <div>
      <Heading
        title="Shopify Development"
        subtitle="Crafting Custom shopify Solutions for Your Business"
      />
      <Shopify />
    </div>
  );
};

export default page;
 