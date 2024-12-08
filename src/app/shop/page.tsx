import React from "react";
import Image from "next/image";
import { FaHeart, FaShareAlt, FaBalanceScale, FaFilter, FaList, FaThLarge } from "react-icons/fa";

const Shop = () => {
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
      image: "/images.png",
    },
    // More products here...
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
    {/* Left Section (Filter & View Options) */}
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mb-4 lg:mb-0">
      <button className="flex items-center gap-3 text-gray-800 hover:text-black">
        <FaFilter className="w-4 h-4" />
        <span>Filter</span>
      </button>
      <div className="flex items-center gap-3">
        <button className="p-1 rounded hover:bg-gray-200">
          <FaThLarge className="w-4 h-4 text-gray-800" />
        </button>
        <button className="p-1 rounded hover:bg-gray-200">
          <FaList className="w-4 h-4 text-gray-800" />
        </button>
      </div>
      <div className="w-px h-4 bg-gray-400 hidden lg:block"></div>
      <span className="text-gray-600">Showing 1–16 of 32 results</span>
    </div>

    {/* Right Section (Show & Sort Options) */}
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
      <div className="flex items-center gap-2">
        <span className="text-gray-600">Show</span>
        <input
          type="text"
          value="16"
          readOnly
          className="w-16 px-2 py-1 border border-gray-300 rounded text-center bg-white text-gray-800"
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-600">Sort by</span>
        <input
          type="text"
          value="Default"
          readOnly
          className="w-28 px-2 py-1 border border-gray-300 rounded text-center bg-white text-gray-800"
        />
      </div>
    </div>
  </div>
</section>
      {/* Product Grid Section */}
      <section className="py-8 bg-white lg:px-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-gray-100 rounded-md shadow-sm overflow-hidden group"
              >
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
            ))}
          </div>
        </div>
      </section>

        <div className="flex flex-col items-center justify-center p-4 bg-white">
          <Image
        src="/Frame 72.png" // Replace with your image path
        alt="Eco-friendly product image"
        width={400} // Default width
        height={300} // Default height
        className=" w-auto h-auto max-w-[200px] max-h-[150px] sm:max-w-[250px] sm:max-h-[200px] lg:max-w-[300px] lg:max-h-[250px]"
      /> </div>

      {/* Feature Section */}
      <div className="bg-[#FDF8F2] py-12 px-6 mb-10">
        <div className="w-full px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          {/* Feature 1 */}
          <div className="flex items-center gap-x-4 justify-center md:justify-start">
            <Image
              src="/trophy 1.png" // Replace with the actual path of the trophy icon
              alt="High Quality Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">High Quality</h3>
              <p className="text-sm text-gray-500">Crafted from top materials</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-x-4 justify-center md:justify-start">
            <Image
              src="/Group.png" // Replace with the actual path of the warranty icon
              alt="Warranty Protection Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Warranty Protection</h3>
              <p className="text-sm text-gray-500">Over 2 years</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-x-4 justify-center md:justify-start">
            <Image
              src="/shipping.png" // Replace with the actual path of the shipping icon
              alt="Free Shipping Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Free Shipping</h3>
              <p className="text-sm text-gray-500">Order over 150$</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-x-4 justify-center md:justify-start">
            <Image
              src="/cs.png" // Replace with the actual path of the support icon
              alt="Support Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">24/7 Support</h3>
              <p className="text-sm text-gray-500">Get help anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
