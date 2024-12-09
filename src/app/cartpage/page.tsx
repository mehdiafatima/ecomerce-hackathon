import React from 'react';
import LargeScreenCart from '../largescreencart/page';
import SmallScreenCart from '../smallscreen/page';
import Image from 'next/image';



const Cart = () => {
  return (

<div className="lg:min-h-screen bg-gray-100 -mb-48">
      {/* Header Section */}
      <header
        className="bg-cover bg-center bg-no-repeat py-10 relative h-[250px]"
        style={{
          backgroundImage: "url('/Rectangle 1.png')", // Replace with your actual background image path
        }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">
          {/* Logo */}
          <div className="mb-2">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              width={64} // Width of the logo
              height={64} // Height of the logo
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-black">Cart</h1>

          {/* Breadcrumb */}
          <p className="text-sm text-black mt-2">
            <span>Home</span> <span className="mx-1">/</span> <span>cart</span>
          </p>
        </div>
      </header>
      <LargeScreenCart />
      <SmallScreenCart />
</div>
  );
};

export default Cart;
