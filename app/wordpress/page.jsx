"use client";

import React from "react";
import dynamic from "next/dynamic";
import Heading from "@/components/Heading/Heading";

// ✅ Dynamically import your component to disable SSR
const WordpressProjects = dynamic(
  () => import("@/components/Categories/WordpressProjects"),
  { ssr: false }
);

const Page = () => {
  return (
    <div>
      <Heading
        title="WordPress Development"
        subtitle="Building fast, functional, and optimized WordPress websites"
      />
      <WordpressProjects />
    </div>
  );
};

export default Page;
