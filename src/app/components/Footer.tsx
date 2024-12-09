import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <h2 className="text-xl font-bold text-black">Funiro.</h2>
            <address className="mt-4 text-gray-600 not-italic leading-6">
              400 University Drive Suite 200 <br />
              Coral Gables, FL 33134 USA
            </address>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide">
              Links
            </h3>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="#" className="text-black hover:text-yellow-500 font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-500 font-bold">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-500 font-bold">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-500 font-bold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide">
              Help
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-black hover:text-yellow-500 font-bold">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-500 font-bold">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-500 font-bold">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide">
              Newsletter
            </h3>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-r-md hover:bg-yellow-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-4">
          <p className="text-sm text-black ">
            © 2024 Funiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
