"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

interface iAppProps {
  images: any[];
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
    
      <div className="order-last flex gap-4 overflow-x-auto lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div
            key={idx}
            className="min-w-[80px] max-w-[80px] overflow-hidden bg-white lg:w-auto"
          >
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="Thumbnail"
              className={`h-20 w-20 object-contain cursor-pointer ${
                image === bigImage ? "border-2 border-black" : ""
              }`}
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
 <div className="relative overflow-hidden rounded-lg lg:col-span-4 ">
        <Image
          src={urlFor(bigImage).url()}
          alt="Main Image"
          layout="responsive"
          width={1500}
          height={1900}
          className="object-contain  md:max-w-[100%] max-w-[100%] max-h-[50vh] md:max-h-[80vh] mx-auto" // Adjusted max width and height
        />

        <span className="absolute left-5 top-0 rounded-br-lg bg-red-600 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
