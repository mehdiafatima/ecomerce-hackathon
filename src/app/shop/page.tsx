"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaHeart, FaShareAlt, FaBalanceScale, FaFilter, FaList, FaThLarge } from "react-icons/fa";

const Shop = () => {
  const [filterOpen, setFilterOpen] = useState(false); // Define filter state
  const [isGridView, setIsGridView] = useState(true); // Define grid view state

  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/image 1.png",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "",
      discount: "",
      image: "/chair.png",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/image 3.png",
    },
    {
      id: 4,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Images.png",
    },
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/image 1.png",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "",
      discount: "",
      image: "/chair.png",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/image 3.png",
    },
    {
      id: 4,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Images.png",
    },
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/image 1.png",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "",
      discount: "",
      image: "/chair.png",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/image 3.png",
    },
    {
      id: 4,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Images.png",
    },
  
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header
        className="bg-cover bg-center bg-no-repeat py-20 relative"
        style={{
          backgroundImage: "url('/Rectangle 1.png')",
        }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl font-bold text-black lg:text-center">Shop</h1>
          <p className="text-sm text-black mt-2 lg:text-center">
            <span>Home</span> <span className="mx-1">/</span> <span>Shop</span>
          </p>
        </div>
      </header>

      <section className="bg-[#FBF8F5] py-4 lg:mr-20 lg:ml-[18px]">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#FCF7EF] px-6 py-3 text-sm">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mb-4 lg:mb-0">
            <button
              className="flex items-center gap-3 text-gray-800 hover:text-black"
              onClick={() => setFilterOpen(!filterOpen)} // Toggle filter visibility
            >
              <FaFilter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <div className="flex items-center gap-3">
              <button
                className={`p-1 rounded ${isGridView ? "bg-gray-200" : "hover:bg-gray-200"}`}
                onClick={() => setIsGridView(true)} // Switch to grid view
              >
                <FaThLarge className="w-4 h-4 text-gray-800" />
              </button>
              <button
                className={`p-1 rounded ${!isGridView ? "bg-gray-200" : "hover:bg-gray-200"}`}
                onClick={() => setIsGridView(false)} // Switch to list view
              >
                <FaList className="w-4 h-4 text-gray-800" />
              </button>
            </div>
            <div className="w-px h-4 bg-gray-400 hidden lg:block"></div>
            <span className="text-gray-600">Showing 1–16 of 32 results</span>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white lg:px-20">
        <div className="container mx-auto px-4">
          <div className={`flex flex-wrap gap-6 justify-center ${isGridView ? 'lg:grid lg:grid-cols-4' : ''}`}>
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-gray-100 rounded-md shadow-sm overflow-hidden group max-w-[150px] sm:max-w-[200px] lg:max-w-[250px]"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-yellow-500 px-3 py-1 text-sm font-medium hover:bg-yellow-600 rounded">
                    Add to cart
                  </button>
                  <div className="flex space-x-4 text-white mt-3 text-xs">
                    <div className="flex items-center space-x-1 cursor-pointer">
                      <FaShareAlt />
                      <span>Share</span>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                      <FaBalanceScale />
                      <span>Compare</span>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                      <FaHeart />
                      <span>Like</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 lg:p-4">
                  <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-xs text-gray-600">{product.description}</p>
                  <div className="mt-2">
                    <span className="text-sm font-bold text-gray-800">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs line-through text-gray-500 ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
