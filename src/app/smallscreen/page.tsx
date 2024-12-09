import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SmallScreenCart = () => {
  return (
    <div className="bg-white p-4 lg:hidden">
      <div className="container mx-auto">
        {/* Shopping Cart Header */}
        <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>

        {/* Cart Items */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-md shadow-md">
            <div className="flex items-center space-x-3">
              <Image
                src="/Group 146.png" // Replace with your actual image path
                alt="Asgaard Sofa"
                width={64} // Adjust the width as necessary
                height={64} // Adjust the height as necessary
                className="rounded"
              />
              <div>
                <p className="text-sm font-semibold">Asgaard Sofa</p>
                <p className="text-sm">1 x Rs. 250,000.00</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Remove item</span>
              &times;
            </button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-md shadow-md">
            <div className="flex items-center space-x-3">
              <Image
                src="/Group 146 (1).png" // Replace with your actual image path
                alt="Casaliving Wood"
                width={64} // Adjust the width as necessary
                height={64} // Adjust the height as necessary
                className="rounded"
              />
              <div>
                <p className="text-sm font-semibold">Casaliving Wood</p>
                <p className="text-sm">1 x Rs. 270,000.00</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Remove item</span>
              &times;
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="mt-6">
          <div className="flex justify-between font-semibold text-sm mb-10">
            <span>Subtotal:</span>
            <span>Rs. 520,000.00</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between space-x-2 mb-10">
          <button className="w-full bg-white text-black border-2 border-black rounded-full py-2 hover:bg-gray-100 transition">
            Cart
          </button>
          <Link href="/checkout">
            <button className="w-full bg-white text-black border-2 border-black rounded-full px-3 py-2 hover:bg-gray-100 transition">
              Checkout
            </button>
          </Link>
          <button className="w-full bg-white text-black border-2 border-black rounded-full py-2 hover:bg-gray-100 transition">
            Comparison
          </button>
        </div>

        
      {/* Feature Section */}
      <div className="bg-[#FDF8F2] py-12 px-6 mb-10 -ml-20 -mr-4 mb-40">
        <div className="w- px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          {/* Feature 1 */}
          <div className="flex items-center gap-x-3 justify-center md:justify-start ml-12">
            <Image
              src="/trophy 1.png" // Replace with the actual path of the trophy icon
              alt="High Quality Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900 ">High Quality</h3>
              <p className="text-sm text-gray-500">Crafted from top materials</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-x-4 justify-center md:justify-start ml-14">
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
          <div className="flex items-center gap-x-4 justify-center md:justify-start ml-14">
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
          <div className="flex items-center gap-x-4 justify-center md:justify-start ml-16">
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
    </div>
  );
};

export default SmallScreenCart;
