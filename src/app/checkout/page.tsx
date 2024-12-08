import React from 'react';
import Image from 'next/image';

const Checkout = () => {
  return (
    <>
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
          <h1 className="text-4xl font-bold text-black">Checkout</h1>

          {/* Breadcrumb */}
          <p className="text-sm text-black mt-2">
            <span>Home</span> <span className="mx-1">/</span> <span>checkout</span>
          </p>
        </div>
      </header>

      <div className="container mx-auto p-4 lg:p-6">
        <h1 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Billing details</h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-5/12 space-y-6 lg:space-y-8">
            <div className="flex space-x-6 lg:space-x-8">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-2 lg:w-1/2 lg:p-1 border rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-2 lg:w-1/2 lg:p-1 border rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="w-full p-2 lg:w-3/4 lg:p-1 border rounded"
            />
            <select className="w-full p-2 lg:w-3/4 lg:p-1 border rounded">
              <option>Country / Region</option>
              <option>Pakistan</option>
              <option>Canada</option>
              <option>America</option>
              <option>Sri Lanka</option>
              {/* Add more options here */}
            </select>
            <input
              type="text"
              placeholder="Street Address"
              className="w-full p-2 lg:w-3/4 lg:p-1 border rounded"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="w-full p-2 lg:w-3/4 lg:p-1 border rounded"
            />
            <select className="w-full p-2 lg:w-3/4 lg:p-1 border rounded">
              <option>Province</option>
              <option>Western Province</option>
              {/* Add more options here */}
            </select>
            <input
              type="text"
              placeholder="ZIP code"
              className="w-full p-2 lg:w-3/4 lg:p-1 border rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-2 lg:w-3/4 lg:p-1 border rounded"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 lg:w-3/4 lg:p-1 border rounded"
            />
            <textarea
              placeholder="Additional information"
              className="w-full p-2 lg:w-3/4 lg:p-1 border rounded"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-12 space-y-6 lg:space-y-8">
            <h2 className="text-lg lg:text-xl font-bold">Product</h2>
            <div className="flex justify-between">
              <p>Asgaard sofa × 1</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  defaultChecked
                />
                Direct Bank Transfer
              </label>
              <p className="text-sm text-gray-600">
                Make your payment directly into our bank account. Please use your
                Order ID as the payment reference. Your order will not be shipped
                until the funds have cleared in our account.
              </p>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                Cash On Delivery
              </label>
            </div>
            <p className="text-sm text-gray-600">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <button className="w-full py-2 lg:py-1 bg-yellow-500 text-white font-bold rounded">
              Place order
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Checkout;
