import Hero from "@/components/hero";
import Newest from "@/components/newest";
import Link from "next/link";
import React from "react";
export const dynamic = "force-dynamic";
const page = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
       <Hero />
       <Newest/>
    </div>
  );
};

export default page;
