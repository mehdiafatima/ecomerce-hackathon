import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShareAlt, FaBalanceScale } from "react-icons/fa";

const OurProducts = () => {
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
      image: "/image 3.png",
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
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      originalPrice: "",
      discount: "New",
      image: "/Images.png",
      slug: "respira",
    },
    {
      id: 5,
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      originalPrice: "",
      discount: "",
      image: "/Images 5.png",
      slug: "grifo",
    },
    {
      id: 6,
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      originalPrice: "",
      discount: "New",
      image: "/image 6.png",
      slug: "muggo",
    },
    {
      id: 7,
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/image 7.png",
      slug : "pingky",
    },
    {
      id: 8,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      originalPrice: "",
      discount: "New",
      image: "/image 8.png",
      slug : "potty",
    },

  
  ];

  return (
    <section className="py-8 bg-white lg:px-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 -mt-20">
            Our Products
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              passHref
              legacyBehavior
            >
              <a className="relative bg-gray-100 rounded-md shadow-sm overflow-hidden group">
                <div className="relative group-hover:opacity-80 transition-opacity duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-40 lg:h-56 object-cover"
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
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
