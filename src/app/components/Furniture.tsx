import React from "react";
import Image from "next/image"; // Import Image from Next.js

const Furniture = () => {
  return (

    <div className="py-8">
    {/* Heading */}
    <div className="text-center mb-6">
      <h3 className="text-black sm:text-2xl lg:text-2xl">
       Share your setup with
      </h3>
      <h1 className="text-black font-bold text-3xl sm:text-4xl lg:text-3xl">
        #FuniroFurniture
      </h1>
    </div>
    
    <div className="py-8">
      <Image
        src="/furniture.png" // Path to your image
        alt="Descriptive Alt Text"
        width={1100} // Set the appropriate width
        height={600} // Set the appropriate height
        className="w-full h-auto object-cover lg:h-[500px] mb-10" // Full width for all screens, reduced height for large screens
      />
    </div></div>
  );
};

export default Furniture;
