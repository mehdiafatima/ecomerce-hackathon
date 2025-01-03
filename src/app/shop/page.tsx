"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaShareAlt,
  FaBalanceScale,
} from "react-icons/fa";

const Shop = () => {

  const [isGridView, ] = useState(true);

  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/image 1.png",
      slug: "syltherine",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "",
      discount: "",
      image: "/chair.png",
      slug: "leviosa",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/image 3.png",
      slug: "lolito",
    },
    {
      id: 4,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/images.png",
      slug: "syltherine",
    },
    {
      id: 5,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/image 1.png",
      slug: "syltherine",
    },
    {
      id: 6,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "",
      discount: "",
      image: "/chair.png",
      slug: "leviosa",
    },
    {
      id: 7,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/image 3.png",
      slug: "lolito",
    },
    {
      id: 8,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Images.png",
      slug: "syltherine",
    },
    {
      id: 9,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/image 1.png",
      slug: "syltherine",
    },
    {
      id: 10,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "",
      discount: "",
      image: "/chair.png",
      slug: "leviosa",
    },
    {
      id: 11,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/image 3.png",
      slug: "lolito",
    },
    {
      id: 12,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/Images.png",
      slug : "syltherine",
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

      <section className="py-8 bg-white lg:px-20">
      <div className="container mx-auto px-4">
          <div className={`flex flex-wrap gap-6 justify-center ${isGridView ? "lg:grid lg:grid-cols-4" : ""}`}>
            {products.map((product) => (
              <Link href={`/store/${product.slug}`} key={product.id}>
                <div className="relative bg-gray-100 rounded-md shadow-sm overflow-hidden group max-w-[150px] sm:max-w-[200px] lg:max-w-[250px]">
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
                    {/* Hover buttons: Like, Compare, and Share */}
                    <div className="mt-2 flex flex-row gap-2">
  <button className="bg-white text-red-500 px-2 py-1 text-xs font-medium hover:bg-red-500 hover:text-white rounded flex items-center">
    <FaHeart className="mr-1" /> Like
  </button>
  <button className="bg-white text-gray-700 px-2 py-1 text-xs font-medium hover:bg-gray-300 rounded flex items-center">
    <FaBalanceScale className="mr-1" /> Compare
  </button>
  <button className="bg-white text-gray-700 px-2 py-1 text-xs font-medium hover:bg-gray-300 rounded flex items-center">
    <FaShareAlt className="mr-1" /> Share
  </button>
</div>
                  </div>
                  <div className="p-3 lg:p-4">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-600">{product.description}</p>
                    <div className="mt-2">
                      <span className="text-sm font-bold text-gray-800">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs line-through text-gray-500 ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
