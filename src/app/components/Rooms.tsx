import React from "react";
import Image from "next/image";

const Room = () => {
  return (
    <div className="bg-pink-50 w-full py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-snug">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="text-gray-600 text-lg mt-4">
              Our designer already made a lot of beautiful prototypes of rooms that inspire you.
            </p>
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-8 py-3 rounded-md font-medium">
              Explore More
            </button>
          </div>

          {/* Middle Section */}
          <div className="flex-1">
            <div className="relative bg-pink-200 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/Rectangle 24.png" // Replace with actual image URL
                alt="Inner Peace Room"
                width={600} // Replace with actual width
                height={400} // Replace with actual height
                className="w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-3 rounded-md shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">Inner Peace</h2>
                <p className="text-sm text-gray-500">01 — Bed Room</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 hidden lg:block">
            <Image
              src="/Rectangle 25.png" // Replace with actual image URL
              alt="Room Design"
              width={600} // Replace with actual width
              height={400} // Replace with actual height
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
          <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
          <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Room;
