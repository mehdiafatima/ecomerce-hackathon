import React from "react";
import Image from "next/image";

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const products = [
    {
      slug: "syltherine",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/image 1.png",
      details: "This is a detailed description of the Syltherine chair.",
    },
    {
      slug: "leviosa",
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "",
      discount: "",
      image: "/image 3.png",
      details: "This is a detailed description of the Leviosa chair.",
    },
    {
      slug: "lolito",
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/image 3.png",
      details: "This is a detailed description of the Lolito sofa.",
    },
    {
      slug: "Respira",
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      originalPrice: "",
      discount: "New",
      image:"/Images.png",
      details: "This is a detailed description of the Respira table and stool.",
    },
    {
      slug: "grifo",
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      originalPrice: "",
      discount: "",
      image: "/Images 5.png",
      details: "This is a detailed description of the Grifo lamp.",
    },
    {
      slug: "muggo",
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      originalPrice: "",
      discount: "New",
      image: "/image 6.png",
      details: "This is a detailed description of the Muggo mug.",
    },
    {
      slug: "pingky",
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/image 7.png",
      details: "This is a detailed description of the Pingy bed set.",
    },
    {
      slug: "potty",
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      originalPrice: "",
      discount: "New",
      image: "/image 8.png",
      details: "This is a detailed description of the Potty flower pot.",
    },
  ];

  const product = products.find((prod) => prod.slug === params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:underline">
          Home
        </a>{" "}
        &gt;{" "}
        <a href="/shop" className="hover:underline">
          Shop
        </a>{" "}
        &gt;{" "}
        <span className="text-gray-700 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg object-cover"
          />
          <div className="grid grid-cols-4 gap-2 mt-4">
            {[product.image, product.image, product.image, product.image].map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`${product.name} Thumbnail ${idx + 1}`}
                width={100}
                height={100}
                className="border rounded-lg cursor-pointer hover:border-gray-800"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-4">{product.price}</p>

          {/* Reviews */}
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400 mr-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
            </div>
            <span className="text-gray-500">5 Customer Reviews</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Size Options */}
          <div className="mb-6">
            <span className="block font-medium mb-2">Size:</span>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="mb-6">
            <span className="block font-medium mb-2">Color:</span>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500 border cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-black border cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-500 border cursor-pointer"></div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 border text-center rounded-lg"
            />
            <button className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
              Add To Cart
            </button>
            <button className="px-6 py-2 border rounded-lg hover:bg-gray-100">
              Compare
            </button>
          </div>

          {/* Additional Details */}
          <div className="text-sm text-gray-600">
            <p>
              SKU: <span className="text-gray-800">S5001</span>
            </p>
            <p>
              Category: <span className="text-gray-800">Sofas</span>
            </p>
            <p>
              Tags: <span className="text-gray-800">Sofa, Chair, Home, Shop</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
