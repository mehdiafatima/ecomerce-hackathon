import React from "react";
import Image from "next/image"; // Import Next.js Image component

const BrowseRange = () => {
  const categories = [
    {
      id: 1,
      title: "Dining",
      image: "/img1.png", // Replace with your actual image paths
    },
    {
      id: 2,
      title: "Living",
      image: "/img2.png", // Replace with your actual image paths
    },
    {
      id: 3,
      title: "Bedroom",
      image: "/img3.png", // Replace with your actual image paths
    },
  ];

  return (
    <section className="py-2 bg-white mt-8 ">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Browse The Range
          </h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className=" rounded-lg overflow-hidden shadow-sm"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={200} // Reduced width
                height={100} // Reduced height for a thinner appearance
                className="w-full h-3/4 object-contain lg:mr-20 -mb-0.5" // Prevent cropping
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 -mb-5 ">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
