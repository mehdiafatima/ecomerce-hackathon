import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px]  flex items-center justify-center"
      style={{
        backgroundImage: "url('/banner.png')",
      }}
    >
      {/* Content Overlay */}
      <div className="bg-[#FFF6E7] rounded-lg shadow-md p-8 lg:p-12 max-w-md lg:max-w-lg lg:ml-[750px]  ">
        <p className="text-sm text-gray-500 uppercase mb-2">New Arrival</p>
        <h1 className="text-3xl lg:text-4xl font-bold text-[#bb9041] mb-4">
          Discover Our New Collection
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="px-6 py-3 bg-[#C49A4A] text-white text-sm font-medium rounded-md shadow hover:bg-[#a9823d] transition">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
