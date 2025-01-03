"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

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
    image: "/Images.png",
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

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="text-center text-xl mt-10">Product not found</div>;
  }

  return (
    <div className=" min-h-screen p-10">
      <div className="max-w-5xl mx-auto p-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span>Home</span> &gt; <span>Shop</span> &gt; <span>{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded"
            />
          </div>

          {/* Details Section */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-yellow-500">{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg line-through text-gray-500 ml-2">
                  {product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="ml-4 text-sm text-green-600">{product.discount}</span>
              )}
            </div>

            {/* Add to Cart and Compare */}
            <div className="mt-6 flex items-center gap-4">
              <button className="bg-white text-yellow-500 px-6 py-2 rounded hover:bg-yellow-700 transition">
                Add to Cart
              </button>
              <button className="border border-gray-400 text-gray-600 px-6 py-2 rounded hover:bg-gray-100 transition">
                Compare
              </button>
            </div>

            {/* Additional Details */}
            <div className="mt-8 text-sm text-gray-500">
              <p>
                <strong>SKU:</strong> S{product.id}001
              </p>
              <p>
                <strong>Category:</strong> Sofas
              </p>
              <p>
                <strong>Tags:</strong> Sofa, Chair, Home, Shop
              </p>
            </div>

            {/* Share Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-yellow-600">
                Facebook
              </a>
              <a href="#" className="text-yellow-400">
                Twitter
              </a>
              <a href="#" className="text-gray-700">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
