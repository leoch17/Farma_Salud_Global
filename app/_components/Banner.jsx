import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-48 md:h-64 lg:h-80 xl:h-96">
      <Image
        src="/image/logo.png"
        alt="Farma Salud Global Banner"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );
};

export default Banner;
