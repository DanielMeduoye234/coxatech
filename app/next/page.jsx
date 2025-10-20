"use client";

import React from "react";
import dynamic from "next/dynamic";
import Heading from "@/components/Heading/Heading";

// ✅ Dynamically import your component (no SSR)
const NextjsProjects = dynamic(
  () => import("@/components/Categories/NextjsProjects"),
  { ssr: false }
);

const Page = () => {
  return (
    <div>
      <Heading
        title="React/Nextjs Development"
        subtitle="Crafting Custom React/Nextjs Solutions for Your Business"
      />
      <NextjsProjects />
    </div>
  );
};

export default Page;
