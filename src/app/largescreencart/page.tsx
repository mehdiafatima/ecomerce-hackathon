import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const LargeScreenCart = () => {
  return (
    
      <div className="min-h-screen bg-gray-100 p-3 hidden lg:block mt-10">
        <div className="flex flex-col lg:flex-row gap-4 container mx-auto">
          {/* Cart Table */}
          <div className="bg-white shadow-md rounded-md w-full lg:w-3/4 p-4">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#F9F1E7]">
                <tr>
                  <th className="p-3 text-sm">Product</th>
                  <th className="p-3 text-sm">Price</th>
                  <th className="p-3 text-sm">Quantity</th>
                  <th className="p-3 text-sm">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="flex flex-col md:flex-row items-start md:items-center p-3">
                    <Image
                      src="/Group 146.png"
                      alt="Asgaard Sofa"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded mb-2 md:mb-0 md:mr-3"
                    />
                    <span className="text-sm md:text-base">Asgaard Sofa</span>
                  </td>
                  <td className="p-3 text-sm md:text-base">Rs. 250,000.00</td>
                  <td className="p-3 text-sm md:text-base">
                    <input
                      type="number"
                      className="w-16 p-1 border rounded"
                      defaultValue="1"
                    />
                  </td>
                  <td className="p-3 text-sm md:text-base">Rs. 250,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-[#F9F1E7] shadow-md rounded-md w-full lg:w-2/6 p-4 ">
            <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
            <div className="flex justify-between mb-2 text-sm md:text-base">
              <span>Subtotal:</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-bold text-black mb-4 text-sm md:text-base">
              <span>Total:</span>
              <span className="text-amber-600">Rs. 250,000.00</span>
            </div>
          <Link href="/checkout">  <button className="w-40 bg-[#F9F1E7] ml-24 text-black border-2 border-black rounded-full py-2 px-2 hover:text-yellow-700 transition">
              Check Out
            </button></Link>
          </div>
        </div>
   </div>
  );
};

export default LargeScreenCart;
